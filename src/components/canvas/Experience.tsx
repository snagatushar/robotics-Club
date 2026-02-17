import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Float, Environment, Grid } from '@react-three/drei';
import { Robot } from './Robot';
import { Drone } from './Drone';
import { Overlay } from '../dom/Overlay';
import * as THREE from 'three';
import { damp3, dampE } from 'maath/easing';
import { useIsMobile } from '../../hooks/useIsMobile';

const SceneContent = () => {
    const scroll = useScroll();
    const isMobile = useIsMobile();
    const robotGroup = useRef<THREE.Group>(null!);

    // Reusable vector to avoid GC stutter
    const targetPos = useMemo(() => new THREE.Vector3(0, 0, 5), []);

    useFrame((state, delta) => {
        // Reset vector each frame
        targetPos.set(0, 0, 5);

        let targetRotY = 0; // Default: facing forward

        const PAGE_COUNT = isMobile ? 7 : 6;
        const P = 1 / (PAGE_COUNT - 1); // Normalize to 0-1 range based on scroll progress

        // Helper to check range
        // We use scroll.range(start, distance) -> 0 to 1
        // But scroll.visible(start, distance) is also good.
        // Let's stick to checking ranges manually or using helper if easier.
        // Actually, existing code used scroll.visible(k * P, P).
        // Let's refine based on the new page count.

        // Page 1: Home (0 -> 1)
        if (scroll.visible(0, P)) {
            if (isMobile) {
                targetPos.set(0, -2, 7);
                targetRotY = 0;
            } else {
                targetPos.set(1.5, 0, 4.5);
                targetRotY = -0.3;
            }
        }

        // Page 2: About (1 -> 2)
        if (scroll.visible(P, P)) {
            if (isMobile) {
                targetPos.set(0, -2.5, 7);
                targetRotY = 0.5;
            } else {
                targetPos.set(-1.8, 0, 5);
                targetRotY = 0.5;
            }
        }

        // Page 3: Project 1 - Humanoid (2 -> 3)
        // Robot RIGHT, Looking LEFT
        if (scroll.visible(2 * P, P)) {
            if (isMobile) {
                targetPos.set(0, -2.5, 7);
                targetRotY = 0;
            } else {
                targetPos.set(1.5, 0, 5); // Right
                targetRotY = -0.5; // Look Left
            }
        }

        // Page 4: Project 2 - Arm (3 -> 4)
        // Robot LEFT, Looking RIGHT
        if (scroll.visible(3 * P, P)) {
            if (isMobile) {
                targetPos.set(0, -2.5, 7);
                targetRotY = 0;
            } else {
                targetPos.set(-1.5, 0, 5); // Left
                targetRotY = 0.5; // Look Right
            }
        }

        // Page 5: Project 3 - Car (4 -> 5)
        // Robot RIGHT, Looking LEFT
        if (scroll.visible(4 * P, P)) {
            if (isMobile) {
                targetPos.set(0, -2.5, 7);
                targetRotY = 0;
            } else {
                targetPos.set(1.5, 0, 5); // Right
                targetRotY = -0.5; // Look Left
            }
        }

        // Page 6: Contact (5 -> 6)
        if (scroll.visible(5 * P, P)) {
            if (isMobile) {
                targetPos.set(0, -2, 6);
            } else {
                targetPos.set(0, 0, 5.5);
            }
            targetRotY = 0;
        }

        // Smooth camera movement
        damp3(state.camera.position, targetPos, 0.6, delta);
        state.camera.lookAt(0, 0.5, 0);

        // Smooth Robot Rotation
        if (robotGroup.current) {
            dampE(robotGroup.current.rotation, [0, targetRotY, 0], 0.6, delta);
        }
    });

    return (
        <>
            <color attach="background" args={['#050505']} />

            {/* Performance Lighting: No Shadows, Simple Ambient + Directional */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[-5, 5, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[5, 5, -5]} intensity={1} color="#3b82f6" />

            {/* Environment: No Blur (Expensive) */}
            <Environment preset="studio" blur={0} />

            {/* Simplified Grid */}
            <Grid
                position={[0, -2, 0]}
                args={[40, 40]}
                cellColor="#222"
                sectionColor="#333"
                fadeDistance={25}
                fadeStrength={1}
            />

            {/* Robot */}
            <group ref={robotGroup} position={[0, -2, 0]}>
                <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
                    <Robot scale={isMobile ? 1.3 : 1.8} />
                </Float>
            </group>

            {/* Drone - Flies in with message - Desktop Only */}
            {!isMobile && <Drone />}
        </>
    );
};

export const Experience = () => {
    const isMobile = useIsMobile();

    return (
        // Optimizations:
        // 1. dpr limited to 1.5 (Avoids 4K rendering on retina/4k screens which kills FPS)
        // 2. No shadows prop = WebGL renderer doesn't allocate shadow maps
        // 3. performance prop for automatic regression (Drei)
        <Canvas dpr={[1, 1.2]} performance={{ min: 0.5 }} camera={{ position: [0, 0, 5], fov: 35 }}>
            <ScrollControls pages={isMobile ? 7 : 6} damping={0.2}>
                <SceneContent />
                <Scroll html style={{ width: '100%', height: '100%' }}>
                    <Overlay />
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}

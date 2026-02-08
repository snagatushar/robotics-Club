import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Float, Environment, Grid } from '@react-three/drei';
import { Robot } from './Robot';
import { Overlay } from '../dom/Overlay';
import * as THREE from 'three';
import { damp3 } from 'maath/easing';

const SceneContent = () => {
    const scroll = useScroll();
    const robotGroup = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        // Safe movement calculations
        const r1 = scroll.range(0, 1 / 4);
        const r2 = scroll.range(1 / 4, 1 / 4);

        // Dynamic Camera Position
        const targetPos = new THREE.Vector3(0, 0, 5);

        // Page 1: Shift right to let text be left
        if (scroll.visible(0, 1 / 2)) {
            targetPos.set(r1 * 2, 0, 5 + r1 * 2);
        }
        // Page 2: Shift left
        if (scroll.visible(1 / 3, 1 / 2)) {
            targetPos.set(2 - r2 * 4, r2, 6);
        }

        // Smooth movement
        damp3(state.camera.position, [
            0 + Math.sin(scroll.offset * Math.PI * 2) * 2,
            0 + scroll.offset * 2,
            5 + scroll.offset * 5
        ], 0.5, delta);

        state.camera.lookAt(0, 0, 0);

        // Robot Animation
        if (robotGroup.current) {
            robotGroup.current.rotation.y = Math.PI * 2 * scroll.offset;
            robotGroup.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <>
            <color attach="background" args={['#050505']} />

            {/* Cinematic Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 10, 5]} intensity={2} angle={0.5} penumbra={1} castShadow color="#ffffff" />
            <pointLight position={[-10, 0, -10]} intensity={2} color="#7000ff" />

            {/* Environment for Reflections (Blurry city gives nice metallic reflections) */}
            <Environment preset="city" blur={1} />

            {/* Floor Grid - Adds depth */}
            <Grid
                position={[0, -2, 0]}
                args={[20, 20]}
                cellColor="#222"
                sectionColor="#00f3ff"
                fadeDistance={15}
                fadeStrength={1}
            />

            {/* 3D Elements */}
            <group ref={robotGroup} position={[0, -1, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Robot active={scroll.offset > 0.01} scale={1.2} />
                </Float>
            </group>

            {/* ContactShadows removed for stability */}
        </>
    );
}

export const Experience = () => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
            {/* Standard sRGBEncoding is default in R3F v8 but ensuring toneMapping is good */}
            <ScrollControls pages={5} damping={0.2}>
                <SceneContent />
                <Scroll html style={{ width: '100%' }}>
                    <Overlay />
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}

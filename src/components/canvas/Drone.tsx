import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Float } from '@react-three/drei';
import { Group } from 'three';

// Preload the model
useGLTF.preload('/bee.glb');

export const Drone = ({ cargo = true, ...props }: { cargo?: boolean } & JSX.IntrinsicElements['group']) => {
    const group = useRef<Group>(null!);
    const { scene, animations } = useGLTF('/bee.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            // Play the first animation found (usually "Flying" or "Hover")
            const keys = Object.keys(actions);
            if (keys.length > 0) {
                const actionName = keys[0];
                const action = actions[actionName];
                action?.reset().fadeIn(0.5).play();
            }
        }
    }, [actions]);

    useFrame((state) => {
        // High frequency vibration/buzz
        if (group.current) {
            group.current.position.y += Math.sin(state.clock.elapsedTime * 20) * 0.002;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} scale={0.5} />

            {/* CARGO CONTAINER - Visible only if requested */}
            {cargo && (
                <group position={[0, -0.8, 0]}>
                    {/* Frame */}
                    <mesh>
                        <boxGeometry args={[1.2, 0.8, 1.2]} />
                        <meshStandardMaterial color="#00f3ff" wireframe />
                    </mesh>
                    {/* Inner Box */}
                    <mesh scale={0.9}>
                        <boxGeometry args={[1.2, 0.8, 1.2]} />
                        <meshBasicMaterial color="#000" transparent opacity={0.8} />
                    </mesh>
                    {/* Data Crystal */}
                    <mesh position={[0, 0, 0]}>
                        <octahedronGeometry args={[0.3, 0]} />
                        <meshBasicMaterial color="#00f3ff" />
                    </mesh>
                </group>
            )}
        </group>
    );
};

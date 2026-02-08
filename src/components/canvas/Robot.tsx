import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group, AnimationAction } from 'three';

// Preload the model
useGLTF.preload('/robot_a.l.e.x.glb');

export const Robot = ({ active = false, ...props }: { active?: boolean } & JSX.IntrinsicElements['group']) => {
    const group = useRef<Group>(null!);
    // Load the GLB model
    // The path should be relative to the public folder
    const { scene, animations } = useGLTF('/robot_a.l.e.x.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            // Log available animations to help debug
            const keys = Object.keys(actions);
            console.log('Available animations:', keys);

            // Play the first animation found, loop it
            if (keys.length > 0) {
                const actionName = keys[0];
                const action = actions[actionName];
                action?.reset().fadeIn(0.5).play();
            }
        }
    }, [actions]);

    useFrame((state) => {
        // Simple idle float if no animations, or just add subtle motion
        if (group.current) {
            // Optional: Add subtle breathing scale or position if desired
            // group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Primitive renders the scene graph. Adjust scale based on model size. */}
            {/* Usually Sketchfab models need scaling. Try 2 or 0.01 depending on units. */}
            <primitive object={scene} scale={2} position={[0, -2, 0]} />
        </group>
    );
};

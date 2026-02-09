import { useRef, useEffect } from 'react';

import { useGLTF, useAnimations } from '@react-three/drei';
import { Group } from 'three';

// Preload the model
useGLTF.preload('/robot_a.l.e.x.glb');

export const Robot = (props: React.ComponentProps<'group'>) => {
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



    return (
        <group ref={group} {...props} dispose={null}>
            {/* Primitive renders the scene graph. Adjust scale based on model size. */}
            {/* Usually Sketchfab models need scaling. Try 2 or 0.01 depending on units. */}
            <primitive object={scene} scale={2} position={[0, -2, 0]} />
        </group>
    );
};

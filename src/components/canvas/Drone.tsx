import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import { Group, Vector3 } from 'three';

// Preload the model
useGLTF.preload('/ai-41_attack_drone.glb');

export const Drone = (props: React.ComponentProps<'group'>) => {
    const group = useRef<Group>(null!);
    const { scene } = useGLTF('/ai-41_attack_drone.glb');

    // Animation state
    // Move drone further back (Z=0.5) and closer to center (X=2.0) to be visible but not huge
    const [targetPos] = useState(new Vector3(2.0, 0.8, 0.5));
    const [startPos] = useState(new Vector3(10, 4, 2));

    // Set initial position
    useEffect(() => {
        if (group.current) {
            group.current.position.copy(startPos);
        }
    }, [startPos]);

    useFrame((state, delta) => {
        if (!group.current) return;

        // Smoothly move towards target
        // Using simple lerp for "fly in" effect
        // 2.5 is speed factor
        group.current.position.lerp(targetPos, 2.0 * delta);

        // Slight hover/bobbing when near target
        if (group.current.position.distanceTo(targetPos) < 0.5) {
            group.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
        }

        // Face slightly towards camera/center
        group.current.lookAt(0, 0, 5);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Drone Model - Removed Float wrapper to sync with grouped movement */}
            <primitive object={scene} scale={0.25} />

            {/* Container/Banner */}
            {/* Lowered position to avoiding clipping with drone body */}
            <group position={[0, -0.45, 0]}>
                {/* Visual Container Box - More opacity for better contrast */}
                <mesh>
                    <boxGeometry args={[0.9, 0.25, 0.05]} />
                    <meshStandardMaterial color="#000" emissive="#3b82f6" emissiveIntensity={0.5} transparent opacity={0.9} />
                </mesh>

                {/* Border */}
                <mesh>
                    <boxGeometry args={[0.92, 0.27, 0.04]} />
                    <meshStandardMaterial color="#3b82f6" wireframe />
                </mesh>

                {/* Text */}
                <Text
                    position={[0, 0, 0.03]}
                    fontSize={0.08}
                    color="#fff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.005}
                    outlineColor="#000"
                >
                    hii i am Alex
                </Text>
            </group>
        </group>
    );
};

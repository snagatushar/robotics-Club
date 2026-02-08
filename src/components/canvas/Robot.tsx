import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { dampE } from 'maath/easing';

export const Robot = ({ active = false, ...props }: { active?: boolean } & React.JSX.IntrinsicElements['group']) => {
    const group = useRef<Group>(null!);
    const innerGroup = useRef<Group>(null!);
    const head = useRef<Group>(null!);
    const eyes = useRef<Group>(null!);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();

        // Idle Animation: Floating & Breathing (Inner Group only)
        const breathingSpeed = active ? 2 : 1;
        const breathingAmp = active ? 0.1 : 0.05;

        if (innerGroup.current) {
            innerGroup.current.position.y = Math.sin(t * breathingSpeed) * breathingAmp;
        }

        // Head Tracking
        if (head.current) {
            // Look at cursor
            const targetRot: [number, number, number] = active
                ? [-state.pointer.y * 0.5, state.pointer.x * 0.5, 0]
                : [Math.sin(t * 0.5) * 0.1, Math.sin(t * 0.3) * 0.1, 0];

            dampE(head.current.rotation, targetRot, active ? 0.1 : 0.5, delta);
        }

        // Eye Glow Pulse
        if (eyes.current) {
            eyes.current.scale.setScalar(1 + Math.sin(t * 5) * 0.05);
        }
    });

    // Brighter materials for visibility against black background
    const materialBody = <meshStandardMaterial color="#2a2a2a" metalness={1} roughness={0.2} envMapIntensity={1} />; // Glossy dark grey
    const materialJoint = <meshStandardMaterial color="#555" metalness={0.8} roughness={0.1} />;
    const materialGlow = <meshBasicMaterial color="#00f3ff" toneMapped={false} />;
    const materialAccent = <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} emissive="#333" emissiveIntensity={0.2} />;

    return (
        <group ref={group} {...props}>
            <group ref={innerGroup}>
                {/* HEAD */}
                <group ref={head} position={[0, 1.4, 0]}>
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[0.6, 0.7, 0.7]} />
                        {materialBody}
                        {/* Outline or subtle wireframe could be cool */}
                    </mesh>
                    <mesh position={[0, 0, 0.36]}>
                        <planeGeometry args={[0.5, 0.4]} />
                        <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
                    </mesh>

                    {/* Eyes Group */}
                    <group ref={eyes} position={[0, 0.05, 0.37]}>
                        <mesh position={[0.15, 0, 0]}>
                            <planeGeometry args={[0.12, 0.04]} />
                            {materialGlow}
                        </mesh>
                        <mesh position={[-0.15, 0, 0]}>
                            <planeGeometry args={[0.12, 0.04]} />
                            {materialGlow}
                        </mesh>
                    </group>

                    {/* Ears */}
                    <mesh position={[0.35, 0, 0]}>
                        <boxGeometry args={[0.1, 0.5, 0.3]} />
                        {materialAccent}
                    </mesh>
                    <mesh position={[-0.35, 0, 0]}>
                        <boxGeometry args={[0.1, 0.5, 0.3]} />
                        {materialAccent}
                    </mesh>
                </group>

                {/* NECK */}
                <mesh position={[0, 1.0, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
                    {materialAccent}
                </mesh>

                {/* TORSO */}
                <group position={[0, 0.3, 0]}>
                    <mesh castShadow receiveShadow>
                        <cylinderGeometry args={[0.4, 0.3, 1.1, 6]} />
                        {materialBody}
                    </mesh>

                    {/* Exoskeleton Ribs */}
                    <mesh position={[0, 0, 0]} scale={[1.05, 0.8, 1.05]}>
                        <cylinderGeometry args={[0.4, 0.3, 1.1, 6]} />
                        <meshStandardMaterial color="#00f3ff" wireframe />
                    </mesh>

                    {/* Core Reactor */}
                    <mesh position={[0, 0.1, 0.35]}>
                        <circleGeometry args={[0.08, 32]} />
                        <meshBasicMaterial color={active ? "#ff0055" : "#00f3ff"} toneMapped={false} />
                    </mesh>
                </group>

                {/* SHOULDERS */}
                <mesh position={[0.55, 0.7, 0]}>
                    <sphereGeometry args={[0.22, 32, 32]} />
                    {materialJoint}
                </mesh>
                <mesh position={[-0.55, 0.7, 0]}>
                    <sphereGeometry args={[0.22, 32, 32]} />
                    {materialJoint}
                </mesh>

                {/* ARMS */}
                <group position={[0.75, 0.3, 0]} rotation={[0, 0, -0.1]}>
                    <mesh>
                        <cylinderGeometry args={[0.1, 0.08, 0.8]} />
                        {materialBody}
                    </mesh>
                    {/* Forearm */}
                    <mesh position={[0, -0.5, 0.2]} rotation={[0.4, 0, 0]}>
                        <boxGeometry args={[0.15, 0.6, 0.15]} />
                        {materialBody}
                    </mesh>
                </group>
                <group position={[-0.75, 0.3, 0]} rotation={[0, 0, 0.1]}>
                    <mesh>
                        <cylinderGeometry args={[0.1, 0.08, 0.8]} />
                        {materialBody}
                    </mesh>
                    <mesh position={[0, -0.5, 0.2]} rotation={[0.4, 0, 0]}>
                        <boxGeometry args={[0.15, 0.6, 0.15]} />
                        {materialBody}
                    </mesh>
                </group>

            </group>
        </group>
    );
};

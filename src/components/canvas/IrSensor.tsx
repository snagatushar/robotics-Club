import { useGLTF } from '@react-three/drei';

export const IrSensorModel = () => {
    const { scene } = useGLTF('/infrared_sensor_ir_sensor.glb');
    return (
        <group>
            {/* Adjust rotation and scale as needed to fit the scene */}
            <primitive object={scene} scale={2} rotation={[0, Math.PI / 2, 0]} />
        </group>
    );
};

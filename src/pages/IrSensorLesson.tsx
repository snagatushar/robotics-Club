import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { IrSensorModel } from '../components/canvas/IrSensor';

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#ef4444',
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <div style={{ width: '6px', height: '18px', background: '#ef4444' }}></div>
            {title}
        </h3>
        {children}
    </div>
);

const PinItem = ({ name, details }: { name: string, details: string[] }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.3rem' }}>{name}</h4>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {details.map((d, i) => {
                const parts = d.split(':');
                if (parts.length > 1) {
                    return (
                        <li key={i} style={{ fontSize: '0.9rem', marginBottom: '0.4rem', lineHeight: 1.5 }}>
                            <span style={{ color: '#ef4444', fontWeight: 600 }}>{parts[0]}:</span>
                            <span style={{ color: '#cbd5e1', marginLeft: '0.4rem' }}>{parts.slice(1).join(':')}</span>
                        </li>
                    );
                }
                return (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.3rem', lineHeight: 1.5, display: 'flex', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                        <div style={{ color: '#ef4444' }}>•</div>
                        {d}
                    </li>
                );
            })}
        </ul>
    </div>
);

export const IrSensorLesson = () => {
    const [, setLocation] = useLocation();

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#020202',
            color: '#fff',
            display: 'flex',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Left Side: Instructions Panel */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '460px',
                    padding: '0',
                    zIndex: 10,
                    background: 'rgba(5,5,5,0.98)',
                    backdropFilter: 'blur(40px)',
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '20px 0 50px rgba(0,0,0,0.5)'
                }}
            >
                {/* Header */}
                <div style={{ padding: '3rem 3rem 2rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <button
                        onClick={() => setLocation('/learning')}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ef4444',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            marginBottom: '2rem',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        ← BACK TO TRAINING
                    </button>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.05rem' }}>IR Sensor</h1>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        Infrared Obstacle Avoidance Sensor Module
                    </p>
                    <a style={{ color: 'red' }} href="https://youtu.be/3-V8VNHJgFY?si=Ykie9DF9YSnIvDsE">IR SensorExplanation Video</a>
                </div>

                {/* Scrollable Content */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '3rem 3rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ef4444 transparent'
                }} className="custom-scroll">

                    <ContentSection title="1. What is an IR Sensor?">
                        <PinItem name="Definition" details={[
                            "An electronic device that detects infrared radiation (light not visible to human eye).",
                            "Commonly used to detect: Objects, Obstacles, Motion, Distance (short range)."
                        ]} />
                        <PinItem name="Why Do We Use It?" details={[
                            "Obstacle detection (robots)",
                            "Line follower robots",
                            "Automatic doors",
                            "TV remote controls",
                            "Object counting systems",
                            "Parking sensors (basic systems)"
                        ]} />
                    </ContentSection>

                    <ContentSection title="2. Functionality (How It Works)">
                        <PinItem name="Basic Working Principle" details={[
                            "Works using reflection of infrared light.",
                            "1. IR LED (Transmitter) emits infrared light.",
                            "2. If an object is in front → IR light reflects back.",
                            "3. IR Receiver detects the reflected light.",
                            "4. The sensor gives an output signal (HIGH or LOW)."
                        ]} />
                        <PinItem name="Logic" details={[
                            "More reflected light → Object detected",
                            "No reflection → No object"
                        ]} />
                    </ContentSection>

                    <ContentSection title="3. IR Sensor Module Parts">
                        <PinItem name="Main Components" details={[
                            "IR LED (Transmitter): Sends infrared light.",
                            "IR Receiver: Receives reflected IR light.",
                            "Comparator IC (Usually LM393): Converts analog signal to digital (0 or 1).",
                            "Potentiometer: Adjusts sensitivity (distance range)."
                        ]} />
                    </ContentSection>

                    <ContentSection title="4. Pin Explanation">
                        <PinItem name="3-Pin Module (Common)" details={[
                            "VCC: Power supply (3.3V or 5V)",
                            "GND: Ground (Connected to microcontroller ground)",
                            "OUT: Output signal (HIGH or LOW). Changes state when object detected."
                        ]} />
                        <PinItem name="4-Pin Module (Optional)" details={[
                            "VCC: Power",
                            "GND: Ground",
                            "DO (Digital Output): HIGH or LOW",
                            "AO (Analog Output): Gives variable voltage depending on distance"
                        ]} />
                    </ContentSection>

                </div>
            </motion.div>

            {/* Right Side: Local Interactive 3D Viewer */}
            <div style={{ flex: 1, position: 'relative', background: '#050505' }}>
                <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                    <spotLight position={[-10, 10, 10]} angle={0.4} penumbra={1} intensity={2} color="#ef4444" />

                    <Suspense fallback={null}>
                        <IrSensorModel />
                        <ContactShadows position={[0, -0.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls makeDefault enablePan={true} maxDistance={20} minDistance={2} />
                </Canvas>

                {/* HUD Elements */}
                <div style={{
                    position: 'absolute',
                    top: '2.5rem',
                    right: '2.5rem',
                    zIndex: 5,
                    textAlign: 'right',
                    pointerEvents: 'none',
                    background: 'rgba(5,5,5,0.7)',
                    padding: '1.2rem 2rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.1)'
                }}>
                    <p style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 800, letterSpacing: '0.2rem', margin: 0 }}>SENSOR MODULE // IR-OBSTACLE</p>
                    <p style={{ fontSize: '0.65rem', color: '#666', margin: '0.2rem 0 0 0', fontWeight: 700 }}>COMPONENT VISUALIZATION</p>
                </div>
            </div>

            <style>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #ef4444;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

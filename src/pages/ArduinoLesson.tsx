import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const ArduinoModel = () => {
    const { scene } = useGLTF('/arduino_uno_-_low_poly.glb');
    return (
        <group>
            {/* Flipped 90 degrees on X to face the camera flat */}
            <primitive object={scene} scale={0.5} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    );
};

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#3b82f6',
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <div style={{ width: '6px', height: '18px', background: '#3b82f6' }}></div>
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
                            <span style={{ color: '#3b82f6', fontWeight: 600 }}>{parts[0]}:</span>
                            <span style={{ color: '#cbd5e1', marginLeft: '0.4rem' }}>{parts.slice(1).join(':')}</span>
                        </li>
                    );
                }
                return (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.3rem', lineHeight: 1.5, display: 'flex', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                        <div style={{ color: '#3b82f6' }}>•</div>
                        {d}
                    </li>
                );
            })}
        </ul>
    </div>
);

export const ArduinoLesson = () => {
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
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#3b82f6',
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

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.05rem' }}>Arduino Uno</h1>
                    <a style={{ color: 'red' }} href="https://youtu.be/HIXnwFB902M?si=mnhflfL3KCJsSnXS">Arduino Uno Explanation video</a>

                </div>

                {/* Scrollable Content */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '3rem 3rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#3b82f6 transparent'
                }} className="custom-scroll">

                    <ContentSection title="1. Power Systems">
                        <PinItem name="VIN" details={[
                            "Type: External Power Input",
                            "Recommended Voltage: 7V – 12V",
                            "Usage: Power via adapters or batteries"
                        ]} />
                        <PinItem name="5V / 3.3V" details={[
                            "Type: Regulated Outputs",
                            "5V: For sensors, modules, logic circuits",
                            "3.3V: Max current 50mA (low-power devices)"
                        ]} />
                        <PinItem name="GND" details={[
                            "Type: Common Ground",
                            "Reference: 0V",
                            "Note: Must be shared across all connected circuits"
                        ]} />
                        <PinItem name="RESET" details={[
                            "Type: System Restart",
                            "Function: Pulled LOW to restart program execution"
                        ]} />
                        <PinItem name="IOREF" details={[
                            "Type: Voltage Reference",
                            "Purpose: Allows shields to detect board operating voltage"
                        ]} />
                    </ContentSection>

                    <ContentSection title="2. Analog Inputs (A0 – A5)">
                        <PinItem name="A0 – A5" details={[
                            "Function: Reading continuous (analog) values",
                            "Resolution: 10-bit (0 – 1023)",
                            "Voltage Range: 0V – 5V",
                            "Potentiometers",
                            "Temperature sensors",
                            "Light sensors"
                        ]} />
                    </ContentSection>

                    <ContentSection title="3. Digital Interface">
                        <PinItem name="Pins 0 – 13" details={[
                            "Type: General Purpose I/O",
                            "Logic Level: 5V",
                            "INPUT",
                            "OUTPUT",
                            "INPUT_PULLUP"
                        ]} />
                    </ContentSection>

                    <ContentSection title="4. Special Purpose Pins">
                        <PinItem name="0 (RX) / 1 (TX)" details={[
                            "Function: Serial Communication",
                            "Purpose: Data transfer between Arduino and USB/Computer",
                            "Warning: Avoid usage during active debugging"
                        ]} />
                        <PinItem name="PWM (~) Pins" details={[
                            "Type: Pulse Width Modulation",
                            "Available Pins: 3, 5, 6, 9, 10, 11",
                            "Motor speed control",
                            "LED brightness control"
                        ]} />
                        <PinItem name="Pin 13" details={[
                            "Feature: Onboard LED",
                            "Usage: Built-in visual debugging indicator"
                        ]} />
                    </ContentSection>

                    <ContentSection title="5. Communication Hub">
                        <PinItem name="I²C System" details={[
                            "Pins: A4 → SDA (Data), A5 → SCL (Clock)",
                            "Devices: OLED displays, RTC modules, advanced sensors"
                        ]} />
                        <PinItem name="SPI Interface" details={[
                            "10 → SS",
                            "11 → MOSI",
                            "12 → MISO",
                            "13 → SCK",
                            "Use Case: High-speed communication (SD Cards, RFID)"
                        ]} />
                    </ContentSection>

                    <ContentSection title="6. Precision & Control">
                        <PinItem name="AREF" details={[
                            "Type: Analog Reference",
                            "Function: Custom precision voltage mapping for analog inputs"
                        ]} />
                        <PinItem name="ICSP Header" details={[
                            "Function: Direct Programming",
                            "Purpose: Bypass bootloader / direct SPI access"
                        ]} />
                        <PinItem name="Reset Button" details={[
                            "Type: Manual Override",
                            "Action: Immediate software restart"
                        ]} />
                    </ContentSection>
                </div>
            </motion.div>

            {/* Right Side: Local Interactive 3D Viewer */}
            <div style={{ flex: 1, position: 'relative', background: '#050505' }}>
                <Canvas camera={{ position: [0, 0, 100], fov: 35 }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[20, 20, 20]} intensity={2} />
                    <spotLight position={[-20, 50, 20]} angle={0.4} penumbra={1} intensity={3} color="#3b82f6" />

                    <Suspense fallback={null}>
                        <ArduinoModel />
                        <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={100} blur={2.5} far={40} />
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls makeDefault enablePan={true} maxDistance={250} minDistance={10} />
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
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)'
                }}>
                    <p style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 800, letterSpacing: '0.2rem', margin: 0 }}>VIRTUAL PROTOTYPE // ARDUINO-UNO</p>
                    <p style={{ fontSize: '0.65rem', color: '#666', margin: '0.2rem 0 0 0', fontWeight: 700 }}>HARDWARE ARCHITECTURE VIEW</p>
                </div>

                <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', pointerEvents: 'none', zIndex: 10 }}>
                    <div className="glass-panel" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(5,5,5,0.8)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="status-blink" style={{ width: '10px', height: '10px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6' }}></div>

                        </div>
                    </div>
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
                    background: #3b82f6;
                    border-radius: 10px;
                }
                @keyframes blink {
                    0% { opacity: 0.3; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0.3; transform: scale(0.8); }
                }
                .status-blink {
                    animation: blink 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#8b5cf6',
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <div style={{ width: '6px', height: '18px', background: '#8b5cf6' }}></div>
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
                            <span style={{ color: '#8b5cf6', fontWeight: 600 }}>{parts[0]}:</span>
                            <span style={{ color: '#cbd5e1', marginLeft: '0.4rem' }}>{parts.slice(1).join(':')}</span>
                        </li>
                    );
                }
                return (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.3rem', lineHeight: 1.5, display: 'flex', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                        <div style={{ color: '#8b5cf6' }}>•</div>
                        {d}
                    </li>
                );
            })}
        </ul>
    </div>
);

export const ServoMotorLesson = () => {
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
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            color: '#8b5cf6',
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

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.05rem' }}>ServoMotor SG90</h1>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.05rem' }}>PRECISION ACTUATOR & ROBOTICS COMPONENT</span>
                </div>

                {/* Scrollable Content */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '3rem 3rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8b5cf6 transparent'
                }} className="custom-scroll">

                    <div style={{ marginBottom: '3rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        <p style={{ marginBottom: '1rem' }}>
                            A servo motor is a rotary actuator used for precise control of angular position, speed, and torque.
                            It is widely used in robotics, robotic arms, automation, and RC systems where accurate movement is required.
                        </p>
                    </div>

                    <ContentSection title="1. How It Works">
                        <PinItem name="Mechanism" details={[
                            "Closed-loop control system",
                            "Continuously checks position via feedback",
                            "Controlled by PWM signal from microcontroller"
                        ]} />
                    </ContentSection>

                    <ContentSection title="2. Pin Configuration">
                        <PinItem name="Wiring" details={[
                            "Red: VCC (Power 5V-6V)",
                            "Brown/Black: GND (Ground)",
                            "Yellow/Orange: Signal (PWM control)"
                        ]} />
                    </ContentSection>

                    <ContentSection title="3. Control Signal (PWM)">
                        <PinItem name="Basics" details={[
                            "Frequency: 50 Hz",
                            "Range: 0° to 180°"
                        ]} />
                        <PinItem name="Pulse Width Mapping" details={[
                            "1 ms: 0° Position",
                            "1.5 ms: 90° Position",
                            "2 ms: 180° Position"
                        ]} />
                    </ContentSection>

                    <ContentSection title="4. Types of Servos">
                        <PinItem name="Positional" details={[
                            "Range: 0° - 180°",
                            "Usage: Standard robotics, arms"
                        ]} />
                        <PinItem name="Continuous" details={[
                            "Range: 360° continuous rotation",
                            "Usage: Wheels, drive systems"
                        ]} />
                        <PinItem name="Digital" details={[
                            "Features: Faster response, higher precision",
                            "Advantage: Better torque control"
                        ]} />
                    </ContentSection>

                    <ContentSection title="5. Applications">
                        <PinItem name="Common Uses" details={[
                            "Robotic arms",
                            "Humanoid robots",
                            "Pan-tilt camera systems",
                            "Automated doors",
                            "CNC and automation systems"
                        ]} />
                    </ContentSection>

                    <ContentSection title="6. With Microcontrollers">
                        <PinItem name="ESP32" details={[
                            "Method: PWM control",
                            "Benefit: Smooth, precise motion for wireless robotics"
                        ]} />
                        <PinItem name="Raspberry Pi" details={[
                            "Method: GPIO PWM or external driver",
                            "Context: AI + Robotics applications"
                        ]} />
                    </ContentSection>

                    <ContentSection title="7. Pros & Cons">
                        <PinItem name="Advantages" details={[
                            "High accuracy",
                            "Easy to control",
                            "Compact size",
                            "Reliable position holding"
                        ]} />
                        <PinItem name="Limitations" details={[
                            "Limited rotation (standard types)",
                            "Requires constant power",
                            "Torque limited by size"
                        ]} />
                    </ContentSection>

                </div>
            </motion.div>

            {/* Right Side: Sketchfab Embed */}
            <div style={{ flex: 1, position: 'relative', background: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%' }}>
                    <iframe
                        title="Servomotor SG90"
                        frameBorder="0"
                        allowFullScreen
                        // mozallowfullscreen="true"
                        // webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src="https://sketchfab.com/models/863b04f543a94b82ad5f660aafd997de/embed"
                        style={{ width: '100%', height: '100%' }}
                    > </iframe>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 10,
                    fontSize: '0.8rem',
                    textAlign: 'right',
                    pointerEvents: 'none'
                }}>
                    <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(0,0,0,0.8)', pointerEvents: 'auto' }}>
                        <p style={{ margin: 0, color: '#94a3b8' }}>
                            <a href="https://sketchfab.com/3d-models/servomotor-sg90-863b04f543a94b82ad5f660aafd997de?utm_medium=embed&utm_campaign=share-popup&utm_content=863b04f543a94b82ad5f660aafd997de" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#8b5cf6', textDecoration: 'none' }}> ServoMotor</a>

                        </p>
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
                    background: #8b5cf6;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

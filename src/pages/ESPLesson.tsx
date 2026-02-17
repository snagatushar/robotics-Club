import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#10b981',
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <div style={{ width: '6px', height: '18px', background: '#10b981' }}></div>
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
                            <span style={{ color: '#10b981', fontWeight: 600 }}>{parts[0]}:</span>
                            <span style={{ color: '#cbd5e1', marginLeft: '0.4rem' }}>{parts.slice(1).join(':')}</span>
                        </li>
                    );
                }
                return (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.3rem', lineHeight: 1.5, display: 'flex', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                        <div style={{ color: '#10b981' }}>•</div>
                        {d}
                    </li>
                );
            })}
        </ul>
    </div>
);

export const ESPLesson = () => {
    const [, setLocation] = useLocation();
    const isMobile = useIsMobile();
    const [isContentVisible, setIsContentVisible] = useState(true);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#020202',
            color: '#fff',
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
        }}>
            {/* Left Side: Instructions Panel */}
            {(!isMobile || isContentVisible) && (
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: isMobile ? '100%' : '460px',
                        position: isMobile ? 'absolute' : 'relative',
                        height: '100%',
                        padding: '0',
                        zIndex: 20,
                        background: 'rgba(5,5,5,0.98)',
                        borderRight: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '20px 0 50px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Header */}
                    <div style={{ padding: '3rem 3rem 2rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <button
                                onClick={() => setLocation('/learning')}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    color: '#10b981',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '2rem',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                ← BACK
                            </button>

                            {isMobile && (
                                <button
                                    onClick={() => setIsContentVisible(false)}
                                    style={{
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                        color: '#10b981',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        cursor: 'pointer',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.1rem'
                                    }}
                                >
                                    VIEW 3D MODEL
                                </button>
                            )}
                        </div>

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.05rem' }}>NodeMCU ESP32</h1>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.05rem' }}>DUAL-CORE WI-FI & BLUETOOTH SOC</span><br></br> <br></br>
                        <a style={{ color: 'red', display: 'inline-block', marginTop: '0.5rem' }} href="https://youtu.be/A5CB4t9sukM?si=NK61AxGqH7yhq7G4">ESP32 Explanation Video</a>

                    </div>

                    {/* Scrollable Content */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '3rem 3rem',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#10b981 transparent',
                        marginBottom: isMobile ? '5rem' : '0'
                    }} className="custom-scroll">

                        <div style={{ marginBottom: '3rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '1rem' }}>
                                The ESP32 is a powerful, low-cost microcontroller designed for IoT, robotics, and smart systems.
                                It combines Wi-Fi and Bluetooth connectivity with high performance, making it ideal for modern embedded applications.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8' }}>
                                <li>Dual-core 32-bit processor (up to 240 MHz)</li>
                                <li>Built-in Wi-Fi & Bluetooth (BLE)</li>
                                <li>3.3V operating logic</li>
                                <li>Multiple GPIOs with ADC, DAC, PWM support</li>
                                <li>Low-power modes for battery-powered projects</li>
                            </ul>
                        </div>

                        <ContentSection title="1. Power Pins">
                            <PinItem name="5V / VIN" details={[
                                "Function: External power input",
                                "WARNING: ESP32 pins are not 5V tolerant"
                            ]} />
                            <PinItem name="3V3" details={[
                                "Function: Regulated 3.3V output",
                                "Usage: Powering low-voltage sensors"
                            ]} />
                            <PinItem name="GND" details={[
                                "Function: Ground reference"
                            ]} />
                            <PinItem name="EN" details={[
                                "Function: Enable / Reset pin"
                            ]} />
                        </ContentSection>

                        <ContentSection title="2. Digital GPIO Pins">
                            <PinItem name="Overview" details={[
                                "Usage: LEDs, motors, relays, switches, sensors",
                                "Features: PWM, interrupts, digital I/O"
                            ]} />
                            <PinItem name="Common Uses" details={[
                                "GPIO 2: Onboard LED",
                                "GPIO 4, 5, 12–19, 21–23, 25–27: General I/O",
                                "GPIO 34–39: Input only pins"
                            ]} />
                        </ContentSection>

                        <ContentSection title="3. Analog System">
                            <PinItem name="ADC (Analog Input)" details={[
                                "Function: Read sensor values (temp, gas, light)",
                                "Resolution: 12-bit (0–4095)",
                                "ADC1: GPIO 32–39 (Recommended)",
                                "ADC2: GPIO 0, 2, 4, 12–15 (Shared with Wi-Fi)"
                            ]} />
                            <PinItem name="DAC (Analog Output)" details={[
                                "GPIO 25: DAC Channel 1",
                                "GPIO 26: DAC Channel 2",
                                "Usage: Audio signals, variable voltage output"
                            ]} />
                        </ContentSection>

                        <ContentSection title="4. Communication Interfaces">
                            <PinItem name="UART (Serial)" details={[
                                "UART0: GPIO 1 (TX), GPIO 3 (RX)",
                                "UART2: GPIO 16 (RX), GPIO 17 (TX)",
                                "Usage: Debugging, GPS, GSM"
                            ]} />
                            <PinItem name="I2C" details={[
                                "SDA: GPIO 21",
                                "SCL: GPIO 22",
                                "Usage: OLED displays, RTC modules, sensors"
                            ]} />
                            <PinItem name="SPI" details={[
                                "MOSI: GPIO 23",
                                "MISO: GPIO 19",
                                "SCK: GPIO 18",
                                "CS: GPIO 5",
                                "Usage: SD cards, TFT displays, high-speed devices"
                            ]} />
                        </ContentSection>

                        <ContentSection title="5. Special Pins">
                            <PinItem name="Restrictions" details={[
                                "GPIO 0: Boot mode selection",
                                "GPIO 6–11: Connected to internal flash (DO NOT USE)",
                                "GPIO 34–39: Input only"
                            ]} />
                        </ContentSection>

                    </div>
                </motion.div>
            )}

            {isMobile && !isContentVisible && (
                <button
                    onClick={() => setIsContentVisible(true)}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        zIndex: 30,
                        background: 'rgba(5,5,5,0.8)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#10b981',
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    INFO
                </button>
            )}

            {/* Right Side: Sketchfab Embed - Always Rendered */}
            <div style={{ flex: 1, position: 'relative', background: '#050505', display: 'flex', flexDirection: 'column', width: isMobile ? '100%' : 'auto', height: isMobile ? '100vh' : 'auto' }}>
                <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%' }}>
                    <iframe
                        title="NodeMCU ESP32"
                        frameBorder="0"
                        allowFullScreen
                        // mozallowfullscreen="true"
                        // webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src="https://sketchfab.com/models/a09ed2e58a4248ffb1ab5e6597754f18/embed"
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
                    pointerEvents: 'none' // Let clicks pass through if needed, but links might need clicks
                }}>
                    <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(0,0,0,0.8)', pointerEvents: 'auto' }}>
                        <p style={{ margin: 0, color: '#94a3b8' }}>
                            <a href="https://sketchfab.com/3d-models/nodemcu-esp32-a09ed2e58a4248ffb1ab5e6597754f18?utm_medium=embed&utm_campaign=share-popup&utm_content=a09ed2e58a4248ffb1ab5e6597754f18" target="_blank" rel="noopener noreferrer nofollow" style={{ fontWeight: 'bold', color: '#10b981', textDecoration: 'none' }}> NodeMCU ESP32 </a>

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
                    background: #10b981;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

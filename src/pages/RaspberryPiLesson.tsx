import { useState } from 'react';
import { useLocation } from 'wouter';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#f59e0b',
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <div style={{ width: '6px', height: '18px', background: '#f59e0b' }}></div>
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
                            <span style={{ color: '#f59e0b', fontWeight: 600 }}>{parts[0]}:</span>
                            <span style={{ color: '#cbd5e1', marginLeft: '0.4rem' }}>{parts.slice(1).join(':')}</span>
                        </li>
                    );
                }
                return (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.3rem', lineHeight: 1.5, display: 'flex', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                        <div style={{ color: '#f59e0b' }}>•</div>
                        {d}
                    </li>
                );
            })}
        </ul>
    </div>
);

export const RaspberryPiLesson = () => {
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
            position: 'relative'
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
                        backdropFilter: 'blur(40px)',
                        borderRight: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '20px 0 50px rgba(0,0,0,0.5)'
                    }}
                >
                    {/* Header */}
                    <div style={{ padding: '3rem 3rem 2rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <button
                                onClick={() => setLocation('/learning')}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(245, 158, 11, 0.3)',
                                    color: '#f59e0b',
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
                                        background: 'rgba(245, 158, 11, 0.1)',
                                        border: '1px solid rgba(245, 158, 11, 0.3)',
                                        color: '#f59e0b',
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

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.05rem' }}>Raspberry Pi 5</h1>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.05rem' }}>NEXT-GEN SINGLE BOARD COMPUTER</span><br></br> <br></br>
                        <a style={{ color: 'red' }} href="https://youtu.be/ZH6vfvRstfM?si=IsaxEaVWv9IJcWFD">Raspberry Pi 5 Explanation Video</a>
                    </div>

                    {/* Scrollable Content */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '3rem 3rem',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#f59e0b transparent',
                        marginBottom: '5rem'
                    }} className="custom-scroll">

                        <div style={{ marginBottom: '3rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '1rem' }}>
                                The Raspberry Pi 5 is a high-performance single board computer (SBC) designed for computing, robotics, AI, and embedded system projects.
                                Unlike microcontrollers, it runs a full operating system and supports advanced peripherals.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8' }}>
                                <li>Quad-core ARM Cortex-A76 CPU</li>
                                <li>Up to 8GB LPDDR4X RAM</li>
                                <li>Dual 4K HDMI display output</li>
                                <li>PCIe support for high-speed expansion</li>
                                <li>USB 3.0, Ethernet, Wi-Fi, Bluetooth</li>
                                <li>40-pin GPIO header for hardware control</li>
                            </ul>
                        </div>

                        <ContentSection title="1. Power & Boot">
                            <PinItem name="Power" details={[
                                "USB-C Power Port: Main power input (5V)",
                                "Power Management IC: Handles voltage regulation",
                                "Power Button: Soft power on/off"
                            ]} />
                        </ContentSection>

                        <ContentSection title="2. 40-Pin GPIO Header">
                            <PinItem name="Power Pins" details={[
                                "5V: Power output",
                                "3.3V: Logic voltage",
                                "GND: Ground",
                                "WARNING: GPIO pins operate at 3.3V only (not 5V tolerant)"
                            ]} />
                            <PinItem name="GPIO Pins" details={[
                                "Usage: LEDs, switches, relays, motor drivers",
                                "Features: Supports input/output, interrupts, PWM",
                                "Control: Python, C, or Node.js"
                            ]} />
                        </ContentSection>

                        <ContentSection title="3. Communication Interfaces">
                            <PinItem name="I2C" details={[
                                "Usage: Sensors, RTC modules, OLED displays",
                                "Common Pins: GPIO 2 (SDA), GPIO 3 (SCL)"
                            ]} />
                            <PinItem name="SPI" details={[
                                "Usage: High-speed communication (TFT displays, ADCs, SD modules)"
                            ]} />
                            <PinItem name="UART" details={[
                                "Usage: Serial communication (Debugging, GPS, GSM modules)"
                            ]} />
                        </ContentSection>

                        <ContentSection title="4. Display & Camera">
                            <PinItem name="Interfaces" details={[
                                "Dual HDMI: Monitor / Display output",
                                "CSI Port: Camera module",
                                "DSI Port: Touchscreen display"
                            ]} />
                        </ContentSection>

                        <ContentSection title="5. USB & Networking">
                            <PinItem name="Ports" details={[
                                "USB 3.0: High-speed devices",
                                "USB 2.0: Keyboard, mouse",
                                "Ethernet: Wired networking",
                                "Wireless: Wi-Fi & Bluetooth connectivity"
                            ]} />
                        </ContentSection>

                        <ContentSection title="6. Storage">
                            <PinItem name="Options" details={[
                                "MicroSD Card: OS & data storage",
                                "PCIe Slot: NVMe SSD support (via adapter)"
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
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        color: '#f59e0b',
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
            )
            }

            {/* Right Side: Sketchfab Embed */}
            <div style={{ flex: 1, position: 'relative', background: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%' }}>
                    <iframe
                        title="Raspberry Pi 5"
                        frameBorder="0"
                        allowFullScreen
                        // mozallowfullscreen="true"
                        // webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src="https://sketchfab.com/models/aa1652bd5f344b2baae8d239c8fe4bda/embed"
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
                            <a href="https://sketchfab.com/3d-models/raspberry-pi-5-aa1652bd5f344b2baae8d239c8fe4bda?utm_medium=embed&utm_campaign=share-popup&utm_content=aa1652bd5f344b2baae8d239c8fe4bda" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#f59e0b', textDecoration: 'none' }}> Raspberry Pi 5 </a>

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
                    background: #f59e0b;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

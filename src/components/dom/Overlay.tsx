import { motion } from 'framer-motion';

const Section = ({ children, style, id, innerStyle, ...props }: any) => {
    return (
        <section
            id={id}
            style={{
                width: '100vw',
                minHeight: '100vh', // Ensure it fills screen
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5vw',
                boxSizing: 'border-box', // Important for padding
                ...style
            }}
            {...props}
        >
            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', pointerEvents: 'auto', ...innerStyle }}>
                {children}
            </div>
        </section>
    );
};

import { useIsMobile } from '../../hooks/useIsMobile';

export const Overlay = () => {
    const isMobile = useIsMobile();

    return (
        <div style={{ width: '100%', pointerEvents: 'none' }}>

            {/* HERO - Subtle Fade */}
            <Section
                id="home"
                style={{
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    paddingTop: isMobile ? '15vh' : '0'
                }}
                innerStyle={{
                    margin: '0',
                    padding: isMobile ? '0 1rem' : '0'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', textAlign: isMobile ? 'center' : 'left' }}
                >
                    <h5 className="text-accent" style={{ marginBottom: '1rem', letterSpacing: '0.2rem' }}>NEXT-GEN ROBOTICS</h5>
                    <h1 style={{ fontSize: isMobile ? '3rem' : 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        INTELLIGENT <br />
                        <span className="text-gradient">AUTONOMY</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#ffffffff', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '480px' }}>
                        We build adaptive humanoid systems designed to collaborate, learn, and extend human potential.
                    </p>

                </motion.div>
            </Section>

            {/* ABOUT - Polished Container - No Drone */}
            <Section
                id="about"
                style={{ justifyContent: isMobile ? 'center' : 'flex-end', alignItems: 'center' }}
                innerStyle={{ maxWidth: '100%', paddingRight: isMobile ? '0' : '0rem', padding: isMobile ? '0 1rem' : undefined }}
            >

                <motion.div
                    // Sliding in gracefully from right
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: isMobile ? '2rem' : '3rem', maxWidth: '400px', textAlign: 'left', marginLeft: isMobile ? '0' : 'auto' }}
                >
                    <h5 className="text-accent" style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>🚀 WHO WE ARE</h5>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Robotics Club</h2>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        The Robotics Club is a community of passionate students, innovators, and technology enthusiasts dedicated to exploring the world of robotics, artificial intelligence, and automation. We bring together students from different backgrounds to collaborate, learn, and build intelligent systems that solve real-world problems.
                    </p>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Our club provides a platform for creativity, experimentation, and innovation, where members can transform their ideas into functional robots and smart solutions.
                    </p>
                </motion.div>
            </Section>

            {/* PROJECTS - Centered Container */}
            <Section id="projects" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '100%' }}
                >

                    <h2 style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '3rem' }}>Upcoming Projects</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Decreased min-width for mobile
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: isMobile ? '0 1rem' : '0'
                    }}>
                        {/* Project 1 */}
                        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                🤖
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Humanoid Robot Platform</h3>
                            <p style={{ fontSize: '1.2rem', color: '#ffffffff', lineHeight: 1.6 }}>
                                Our primary goal is to design and develop a modular humanoid robot capable of walking, interacting, and assisting humans. This robot will include computer vision, speech recognition, and AI-based decision-making. It will serve as a foundation for future research in human-robot interaction and intelligent systems.
                            </p>
                        </div>

                        {/* Project 2 */}
                        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                🏭
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Automotive Manufacturing Robotic Arm</h3>
                            <p style={{ fontSize: '1.2rem', color: '#ffffffff', lineHeight: 1.6 }}>
                                Our aim is to design and implement an intelligent robotic arm capable of automating key tasks in automotive manufacturing. The system will simulate assembly, object handling, and inspection processes using computer vision and automation. This project will help students gain practical knowledge of industrial robotics and smart manufacturing.
                            </p>
                        </div>

                        {/* Project 3 */}
                        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                🚗
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Autonomous Smart Car</h3>
                            <p style={{ fontSize: '1.2rem', color: '#ffffffff', lineHeight: 1.6 }}>
                                Our goal is to build an autonomous robotic vehicle capable of navigating real-world environments with minimal human intervention. The system will use sensors, computer vision, and intelligent algorithms to detect obstacles, plan paths, and make real-time driving decisions. This project aims to explore the future of smart mobility and autonomous transportation.
                            </p>

                        </div>

                    </div>
                </motion.div>
            </Section>

            {/* LEARNING - New Section */}


            {/* CONTACT */}
            <Section id="contact" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ maxWidth: '700px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0' }}
                >
                    <h2 style={{ fontSize: isMobile ? '3rem' : '4rem', marginBottom: '1rem', lineHeight: 1 }}>Ready to Scale?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '3rem' }}>
                        Partner with the leaders in humanoid robotics.
                    </p>
                    <button style={{
                        padding: '1.2rem 3.5rem',
                        background: '#3b82f6',
                        color: '#fff',
                        borderRadius: '3rem',
                        border: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}>
                        Initialize Partnership
                    </button>
                </motion.div>
            </Section>
        </div>
    );
};

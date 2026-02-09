import { motion } from 'framer-motion';

const Section = ({ children, style, id, innerStyle, ...props }: any) => {
    return (
        <section
            id={id}
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5vw',
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

export const Overlay = () => {
    return (
        <div style={{ width: '100%', pointerEvents: 'none' }}>

            {/* HERO - Subtle Fade */}
            <Section id="home" style={{ justifyContent: 'flex-start' }} innerStyle={{ margin: '0' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', textAlign: 'left' }}
                >
                    <h5 className="text-accent" style={{ marginBottom: '1rem', letterSpacing: '0.2rem' }}>// NEXT-GEN ROBOTICS</h5>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        INTELLIGENT <br />
                        <span className="text-gradient">AUTONOMY</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '480px' }}>
                        We build adaptive humanoid systems designed to collaborate, learn, and extend human potential.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button style={{
                            padding: '1rem 2.5rem',
                            background: '#fff',
                            color: '#000',
                            borderRadius: '2rem',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            View Platform
                        </button>
                    </div>
                </motion.div>
            </Section>

            {/* ABOUT - Polished Container - No Drone */}
            <Section id="about" style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <motion.div
                    // Sliding in gracefully from right
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '3rem', maxWidth: '500px', textAlign: 'left', marginLeft: 'auto' }}
                >
                    <h5 className="text-accent" style={{ marginBottom: '0.5rem' }}>01 / ARCHITECTURE</h5>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Precision Engineered</h2>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Constructed from aerospace-grade carbon composites and powered by our proprietary Neural Core.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 700 }}>24<span className="text-accent">h</span></span>
                            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Battery Life</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 700 }}>120<span className="text-accent">DoF</span></span>
                            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Articulation</span>
                        </div>
                    </div>
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
                    <h5 className="text-accent" style={{ marginBottom: '1rem' }}>02 / DEPLOYMENTS</h5>
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Operational Sectors</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {['Industrial', 'Medical', 'Exploration'].map((sector, i) => (
                            <div key={sector} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }}>
                                <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontWeight: 700 }}>
                                    0{i + 1}
                                </div>
                                <h3 style={{ marginBottom: '1rem' }}>{sector}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                                    Autonomous solutions optimized for high-stake environments.
                                </p>
                            </div>
                        ))}
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
                    style={{ maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1 }}>Ready to Scale?</h2>
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

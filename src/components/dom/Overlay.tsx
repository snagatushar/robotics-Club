const Section = ({ children, style, ...props }: any) => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 10vw',
                ...style,
            }}
            {...props}
        >
            {children}
        </section>
    );
};

export const Overlay = () => {
    return (
        <div style={{ width: '100%', pointerEvents: 'none' }}> {/* pointerEvents none on wrapper so we can click through to 3D if needed, but enable on children */}

            {/* HERO */}
            <Section style={{ alignItems: 'flex-start' }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <h5 style={{ color: 'var(--color-primary)', letterSpacing: '0.2em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '10px', height: '10px', background: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--color-primary)' }}></span>
                        SYSTEM ONLINE
                    </h5>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', maxWidth: '900px', lineHeight: 0.9, marginBottom: '20px' }}>
                        BUILDING THE <br />
                        <span className="text-gradient" style={{ fontWeight: 800 }}>FUTURE OF ROBOTICS</span>
                    </h1>
                    <p style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '500px', color: 'var(--color-secondary-text)', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
                        Advanced AI. Precision Engineering. Cinematic Experience. <br />
                        Enter the next generation of automation.
                    </p>
                    <div style={{ marginTop: '3rem', display: 'flex', gap: '20px' }}>
                        <button style={{ padding: '15px 40px', background: '#fff', color: '#000', fontWeight: 700, borderRadius: '2px', border: '1px solid #fff' }}>EXPLORE</button>
                        <button style={{ padding: '15px 40px', background: 'transparent', color: '#fff', fontWeight: 700, borderRadius: '2px', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)' }}>CONTACT</button>
                    </div>
                </div>
            </Section>

            {/* ABOUT */}
            <Section style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                <div className="glass" style={{ maxWidth: '600px', padding: '50px', borderRight: '4px solid var(--color-primary)', pointerEvents: 'auto' }}>
                    <h5 style={{ color: 'var(--color-secondary-text)', marginBottom: '10px' }}>01 / ORIGIN</h5>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1 }}>ENGINEERED <br /> PERFECTION</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#ccc' }}>
                        We are a collective of visionaries engineering the next generation of autonomous systems.
                        From humanoid kinesis to swarm intelligence, we redefine what machines can do.
                    </p>
                </div>
            </Section>

            {/* MISSION */}
            <Section style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '40%' }}>
                    {/* Space for 3D robot */}
                </div>
                <div style={{ width: '50%', pointerEvents: 'auto' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>02 / OBJECTIVE</h5>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1 }}>OUR MISSION</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div className="glass" style={{ padding: '30px', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>VISION</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>A world where automation enhances human potential through seamless integration.</p>
                        </div>
                        <div className="glass" style={{ padding: '30px', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-accent)' }}>STRATEGY</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Relentless iteration, physics-first design, and neural network optimization.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* PROJECTS */}
            <Section style={{ justifyContent: 'center' }}>
                <div style={{ width: '100%', pointerEvents: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '4rem', lineHeight: 0.8 }}>ACTIVE <br /> <span style={{ color: 'var(--color-primary)' }}>PROTOCOLS</span></h2>
                        <p style={{ maxWidth: '300px', textAlign: 'right', color: '#888' }}>Swipe to inspect current research modules.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '40px', scrollbarWidth: 'none' }}>
                        {['NEURAL LINK', 'KINETIC', 'SWARM AI', 'VISION'].map((title, i) => (
                            <div key={title} className="glass" style={{
                                minWidth: '350px',
                                height: '450px',
                                padding: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderTop: `2px solid ${i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)'}`,
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' // Cyberpunk cut corner
                            }}>
                                <div>
                                    <h4 style={{ color: '#666', marginBottom: '10px' }}>MODULE 0{i + 1}</h4>
                                    <h3 style={{ fontSize: '2.5rem', lineHeight: 1 }}>{title}</h3>
                                </div>
                                <button style={{
                                    marginTop: '20px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '15px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    ACCESS DATA <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* TEAM / CONTACT */}
            <Section style={{ alignItems: 'center' }}>
                <div className="glass" style={{ padding: '80px', width: '100%', maxWidth: '900px', textAlign: 'center', pointerEvents: 'auto', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}></div>

                    <h2 style={{ fontSize: '4rem', marginBottom: '10px' }}>JOIN THE REVOLUTION</h2>
                    <p style={{ marginBottom: '50px', fontSize: '1.2rem', color: '#aaa' }}>The future is being built today. Are you ready to deploy?</p>

                    <button style={{
                        background: 'var(--color-primary)',
                        color: '#000',
                        padding: '20px 60px',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        border: 'none',
                        clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' // Button shape
                    }}>
                        INITIATE PROTOCOL
                    </button>
                </div>
            </Section>
        </div>
    );
};

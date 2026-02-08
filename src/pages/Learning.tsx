import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export const Learning = () => {
    const [, setLocation] = useLocation();

    const modules = [
        { title: 'Arduino', duration: '1h', level: 'Beginner', color: '#3b82f6', slug: 'arduino' },
        { title: 'Computer Vision', duration: '1h 20m', level: 'Intermediate', color: '#10b981' },
        { title: 'Kinematics & Control', duration: '2h', level: 'Advanced', color: '#f59e0b' },
        { title: 'Sensor Fusion', duration: '55m', level: 'Intermediate', color: '#8b5cf6' },
        { title: 'Reinforcement Learning', duration: '1h 30m', level: 'Advanced', color: '#ef4444' },
        { title: 'Ethics in AI', duration: '30m', level: 'Beginner', color: '#ec4899' },
    ];

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: '#050505',
            color: '#fff',
            padding: '100px 5vw',
            boxSizing: 'border-box'
        }}>
            {/* Header */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '4rem' }}>
                <button
                    onClick={() => setLocation('/')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}
                >
                    ← Back to Operations
                </button>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Training Modules</h1>
                <p style={{ color: '#94a3b8', maxWidth: '600px', lineHeight: 1.6 }}>
                    Access our classified training modules to upgrade your neural pathways.
                    Master the systems that power the next generation of autonomy.
                </p>
            </div>

            {/* Grid */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {modules.map((module, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel"
                        onClick={() => {
                            if (module.slug) setLocation(`/learning/${module.slug}`);
                        }}
                        style={{
                            padding: '2rem',
                            cursor: 'pointer',
                            borderTop: `4px solid ${module.color}`,
                            transition: 'transform 0.2s',
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <span style={{
                                fontSize: '0.7rem',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                color: '#ccc'
                            }}>
                                {module.level.toUpperCase()}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{module.duration}</span>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{module.title}</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: module.color, fontSize: '0.9rem', fontWeight: 600 }}>
                            <span>INITIALIZE</span>
                            <span>→</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div style={{ maxWidth: '1200px', margin: '6rem auto 0', textAlign: 'center', padding: '4rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Certification Program</h2>
                <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Complete all modules to earn your RoboLab Systems Operator Badge.</p>
                <button style={{
                    padding: '1rem 2rem',
                    background: '#fff',
                    color: '#000',
                    border: 'none',
                    borderRadius: '2rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                }}>
                    Submit Application
                </button>
            </div>
        </div>
    );
};

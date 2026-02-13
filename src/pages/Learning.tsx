import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export const Learning = () => {
    const [, setLocation] = useLocation();

    interface Module {
        title: string;
        duration: string;
        level: string;
        color: string;
        slug?: string;
    }

    const modules: Module[] = [
        { title: 'Arduino', duration: '', level: '', color: '#3b82f6', slug: 'arduino' },
        { title: 'ESP32', duration: '', level: '', color: '#10b981', slug: 'esp32' },
        { title: 'Raspberry Pi 5', duration: '', level: '', color: '#f59e0b', slug: 'raspberry-pi-5' },
        { title: 'ServoMotor', duration: '', level: '', color: '#8b5cf6', slug: 'servo-motor' },
        { title: 'IR Sensor', duration: '', level: '', color: '#ef4444', slug: 'ir-sensor' },

    ];

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
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

        </div>
    );
};

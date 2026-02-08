import { useLocation } from 'wouter';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning', href: '/learning' },
];

export const Navbar = () => {
    // 1. Get the `setLocation` function from wouter
    const [, setLocation] = useLocation();

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000, // Reduced from 100 because App.tsx might set 100 for Canvas
                padding: '1.5rem 0',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
        >
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pointerEvents: 'auto',
            }}>
                {/* Logo */}
                <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: '#fff' }}>
                    ROBO<span className="text-accent">LAB</span>
                </a>

                {/* Nav Links - Glass Pill */}
                <div className="glass-panel" style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '2rem',
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                }}>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: '#e2e8f0',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
                            onClick={(e) => {
                                if (item.href.startsWith('/')) {
                                    e.preventDefault();
                                    setLocation(item.href);
                                }
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right Action */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setLocation('/login')}
                        style={{
                            padding: '0.6rem 1.2rem',
                            background: 'transparent',
                            color: '#fff',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setLocation('/signup')}
                        style={{
                            padding: '0.6rem 1.2rem',
                            background: '#fff',
                            color: '#000',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

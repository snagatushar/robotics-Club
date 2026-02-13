
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning', href: '/learning' },
];

export const Navbar = () => {
    const [, setLocation] = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith('/')) {
            setLocation(href);
        } else {
            window.location.hash = href;
        }
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
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
                <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: '#fff', zIndex: 1001 }}>
                    ROBOTICS<span className="text-accent">CLUB</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="glass-panel desktop-nav" style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '2rem',
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
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Right Action */}
                <div className="desktop-nav" style={{ gap: '1rem' }}>
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

                {/* Mobile Toggle Button */}
                <button
                    className="mobile-nav-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#fff',
                        zIndex: 1001,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '100%',
                                height: '100vh',
                                background: 'rgba(5,5,5,0.95)',
                                backdropFilter: 'blur(20px)',
                                zIndex: 1000,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '2rem'
                            }}
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                                <button
                                    onClick={() => handleNavClick('/login')}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRadius: '2rem',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => handleNavClick('/signup')}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: '#fff',
                                        color: '#000',
                                        borderRadius: '2rem',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    'Home',
    'About',
    'Mission & Vision',
    'Projects',
    'Learning',
    'Events',
    'Contact',
];

export const Navbar = () => {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
    const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)']);
    const borderColor = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.1)']);

    return (
        <motion.nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                backgroundColor: useTransform(bgOpacity, (o) => `rgba(5, 5, 5, ${o})`),
                backdropFilter: backdropBlur,
                borderBottom: useTransform(borderColor, (c) => `1px solid ${c}`),
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em' }}>
                <span style={{ color: 'var(--color-primary)' }}>ROBO</span>LAB
            </div>

            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
                {navItems.map((item) => (
                    <NavItem key={item} text={item} />
                ))}
            </ul>
        </motion.nav>
    );
};

const NavItem = ({ text }: { text: string }) => {
    const [hover, setHover] = useState(false);

    return (
        <motion.li
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            style={{ position: 'relative', cursor: 'pointer', opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
        >
            {text}
            {hover && (
                <motion.div
                    layoutId="underline"
                    style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--color-primary)',
                        boxShadow: '0 0 10px var(--color-primary)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            )}
        </motion.li>
    );
};

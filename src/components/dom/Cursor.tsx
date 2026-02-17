import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = () => {
    // Use motion values instead of state to avoid re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics-based movement
    // Smooth physics-based movement - Tighter response
    const springConfig = { damping: 60, stiffness: 1500, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            // Update motion values directly
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const computedCursor = window.getComputedStyle(target).cursor;

            setIsPointer(
                computedCursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') !== null ||
                target.closest('a') !== null
            );
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, [mouseX, mouseY]);

    // Variants for scale/opacity changes (state-based)
    const variants = {
        default: {
            scale: 1,
            opacity: 1,
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.5)'
        },
        pointer: {
            scale: 1.5,
            opacity: 0.8,
            backgroundColor: 'rgba(59, 130, 246, 0.4)',
            border: '1px solid rgba(59, 130, 246, 0.8)'
        }
    };

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="cursor-ring"
                variants={variants}
                animate={isPointer ? 'pointer' : 'default'}
                transition={{
                    type: "spring",
                    mass: 0.1,
                    stiffness: 150,
                    damping: 15
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    pointerEvents: 'none',

                    zIndex: 9999,
                    // removed mixBlendMode: 'difference' to fix WebGL lag
                    // Apply motion values directly to style x/y
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="cursor-dot"
                animate={{
                    scale: isPointer ? 0 : 1,
                    opacity: isPointer ? 0 : 1
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#00f3ff', // Cyan for better visibility without mix-blend
                    boxShadow: '0 0 10px #00f3ff', // Glow effect
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
        </>
    );
};

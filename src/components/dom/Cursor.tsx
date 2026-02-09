import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
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
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 1,
        },
        pointer: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            opacity: 0.8,
            backgroundColor: 'rgba(59, 130, 246, 0.4)',
            border: '1px solid rgba(59, 130, 246, 0.8)'
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1,
        },
        pointer: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0,
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
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={isPointer ? 'pointer' : 'default'}
                transition={{
                    type: "spring",
                    mass: 0.1,
                    stiffness: 800,
                    damping: 30
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

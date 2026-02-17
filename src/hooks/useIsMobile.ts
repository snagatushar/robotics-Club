import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        let timeoutId: number;

        const handleResize = () => {
            // Debounce resize to prevent excessive re-renders
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                setIsMobile(window.innerWidth < 768);
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return isMobile;
};

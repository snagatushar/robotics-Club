import { useRef } from 'react';
import { useLocation } from 'wouter';

export const Login = () => {
    const [location, setLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock success, navigate home
        setLocation('/');
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#050505',
            zIndex: 1000
        }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>LOG<span className="text-accent">IN</span></h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>ID / EMAIL</label>
                        <input type="email" placeholder="agent@robolab.systems" style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff',
                            borderRadius: '4px',
                            fontFamily: 'inherit'
                        }} required />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>ACCESS CODE</label>
                        <input type="password" placeholder="••••••••" style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff',
                            borderRadius: '4px',
                            fontFamily: 'inherit'
                        }} required />
                    </div>

                    <button type="submit" style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        background: '#3b82f6',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        AUTHENTICATE
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                        No clearance? <a href="/signup" onClick={(e) => { e.preventDefault(); setLocation('/signup'); }} style={{ color: '#3b82f6', textDecoration: 'none' }}>Apply for Access</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

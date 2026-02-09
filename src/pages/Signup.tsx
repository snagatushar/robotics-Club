
import { useLocation } from 'wouter';

export const Signup = () => {
    const [, setLocation] = useLocation();

    const handleSubmit = (e: React.FormEvent) => {
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
                <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>SIGN <span className="text-accent">UP</span></h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>INITIATOR NAME</label>
                        <input type="text" placeholder="John Doe" style={{
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
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>COMM LINK (EMAIL)</label>
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
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>SET PASSPHRASE</label>
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

                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                        By proceeding, you agree to our terms of service and acknowledge that your bio-prints will be used for authentication.
                    </p>

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
                        INITIATE SEQUENCE
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                        Already have clearance? <a href="/login" onClick={(e) => { e.preventDefault(); setLocation('/login'); }} style={{ color: '#3b82f6', textDecoration: 'none' }}>Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

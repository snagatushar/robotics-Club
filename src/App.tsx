import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Navbar } from './components/layout/Navbar';
import { Experience } from './components/canvas/Experience';
import './App.css'; // Just resets

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* 3D Scene Background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>

      <Loader
        containerStyles={{ background: '#050505' }}
        innerStyles={{ width: '40vw', height: '4px', background: '#333' }}
        barStyles={{ background: '#00f3ff', height: '100%' }}
        dataInterpolation={(p) => `Loading System... ${p.toFixed(0)}%`}
      />
    </div>
  )
}

export default App;

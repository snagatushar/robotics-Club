import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Navbar } from './components/layout/Navbar';
import { Experience } from './components/canvas/Experience';
import { Switch, Route } from 'wouter';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Learning } from './pages/Learning';
import { ArduinoLesson } from './pages/ArduinoLesson';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/learning" component={Learning} />
        <Route path="/learning/arduino" component={ArduinoLesson} />
        <Route path="/">
          {/* Home / Experience Route */}
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
        </Route>
      </Switch>
    </div>
  )
}

export default App;

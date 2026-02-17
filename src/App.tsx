import { Suspense, lazy } from 'react';
import { Loader } from '@react-three/drei';
import { Navbar } from './components/layout/Navbar';
import { Experience } from './components/canvas/Experience';
import { Switch, Route } from 'wouter';
import { Cursor } from './components/dom/Cursor';
import './App.css';

// Lazy load pages
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Signup = lazy(() => import('./pages/Signup').then(module => ({ default: module.Signup })));
const Learning = lazy(() => import('./pages/Learning').then(module => ({ default: module.Learning })));
const ArduinoLesson = lazy(() => import('./pages/ArduinoLesson').then(module => ({ default: module.ArduinoLesson })));
const ESPLesson = lazy(() => import('./pages/ESPLesson').then(module => ({ default: module.ESPLesson })));
const RaspberryPiLesson = lazy(() => import('./pages/RaspberryPiLesson').then(module => ({ default: module.RaspberryPiLesson })));
const ServoMotorLesson = lazy(() => import('./pages/ServoMotorLesson').then(module => ({ default: module.ServoMotorLesson })));
const IrSensorLesson = lazy(() => import('./pages/IrSensorLesson').then(module => ({ default: module.IrSensorLesson })));

function App() {
  return (
    <div className="app-container">
      <Cursor />
      <Suspense fallback={
        <Loader
          containerStyles={{ background: '#050505' }}
          innerStyles={{ width: '40vw', height: '4px', background: '#333' }}
          barStyles={{ background: '#00f3ff', height: '100%' }}
          dataInterpolation={(p) => `Loading... ${p.toFixed(0)}%`}
        />
      }>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/learning" component={Learning} />
          <Route path="/learning/arduino" component={ArduinoLesson} />
          <Route path="/learning/esp32" component={ESPLesson} />
          <Route path="/learning/raspberry-pi-5" component={RaspberryPiLesson} />
          <Route path="/learning/servo-motor" component={ServoMotorLesson} />
          <Route path="/learning/ir-sensor" component={IrSensorLesson} />
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
      </Suspense>
    </div>
  )
}

export default App;

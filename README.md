# Robotic Lab Experience

A next-generation, immersive 3D robotics website built with React Three Fiber.

## 🚀 Vision
A cinematic journey into a futuristic robotics laboratory. The experience is designed to be continuous, with every scroll triggering mechanical and visual changes.

## 🛠 Tech Stack
- **Framework**: React (Vite)
- **3D Engine**: Three.js + React Three Fiber
- **Animations**: Framer Motion + Maath
- **Styling**: CSS Variables + Modules (Dark Futuristic Theme)
- **State**: Zustand (extensible)

## 🎨 Key Features
- **Procedural 3D Robot**: Custom built using geometric primitives with idle and active states.
- **Scroll-Synchronized Camera**: The camera moves cinematically through the 3D space as you scroll.
- **Glassmorphism UI**: Floating navigation and overlays with blur effects.
- **Interactive Elements**: Robot tracks cursor, buttons have physical feel.
- **Performance**: Optimized geometry and lighting.

## 📦 Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `src/components/canvas`: 3D components (Robot, Experience, Scene)
- `src/components/dom`: HTML overlays and UI (Hero, Navbar)
- `src/components/layout`: Layout wrappers
- `src/styles`: Global styles (index.css)

## 🎮 Controls
- **Scroll**: Move through the experience (Hero -> About -> Mission -> Projects -> Team)
- **Cursor**: Robot head tracks your movement.
- **Hover**: UI elements react with glow and motion.

## 📝 Design Decisions
- **Typography**: 'Outfit' (Futuristic Sans) and 'Space Grotesk' (Technical Mono).
- **Colors**: Neon Cyan (#00f3ff) and Deep Purple (#7000ff) on Void Black (#050505).
- **Lighting**: Cinematic 3-point lighting + Environment map.

---
*Built by Antigravity*

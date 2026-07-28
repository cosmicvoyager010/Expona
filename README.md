# Expona — Journey Through Exponential Scales

**Expona** is an interactive, progressive web application (PWA) designed to explore the vast range of physical scales in our universe—from subatomic particles ($10^{-18}\text{ m}$) to galactic structures ($10^{21}\text{ m}$). It combines glassmorphic UI elements, procedural WebGL graphics using Three.js, a custom Web Audio API synthesizer, and web workers for non-blocking calculations.

---

## Features

* **3D WebGL Visualization:** Interactive procedural models powered by Three.js.
* **Custom Lighting & Shader Controls:** Real-time lighting intensity, color, and wireframe/normal material switching.
* **Web Worker Offloading:** Smooth 60 FPS gesture rendering with off-thread scale calculations (`scale-worker.js`).
* **Web Audio Soundscape:** Synthesized dynamic feedback for navigation, launches, and theme shifts.
* **Progressive Web App (PWA):** Full offline support using Service Worker caching (`sw.js`) and mobile home screen installation.
* **Dynamic Theme Switcher:** Instant toggling between Neon Cyberpunk, Deep Space Void, and Emerald Matrix themes.

---

## Directory Structure

```text
├── index.html        # Main app entry point, WebGL scene, UI, and event handling
├── manifest.json     # PWA configuration and web app metadata
├── sw.js             # Service Worker for precaching, runtime caching, and offline fallback
├── scale-worker.js   # Background Web Worker for logarithmic coordinate computations
└── icon.svg          # Vector icon for app manifest and browser favicon

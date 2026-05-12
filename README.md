<div align="center">
  <h1>Santhiya S | Software Developer Portfolio</h1>
  <p>A high-performance, interactive portfolio showcasing full-stack development expertise.</p>

  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-ten-liart-60.vercel.app/)
  [![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

  <h3><a href="https://portfolio-ten-liart-60.vercel.app/">🔴 View Live Demo</a></h3>
</div>

<br />

## 📌 Overview

This repository contains the source code for my professional developer portfolio. It is engineered with a focus on performance, accessibility, and modern UI/UX principles. The application features a custom state-driven theming engine, hardware-accelerated animations, and a cohesive glassmorphism design language.

## ✨ Core Features

- **Dynamic Dual Theming:** Advanced context-aware light and dark modes with persistent local storage. Transitions between themes trigger comprehensive UI repaints, including shifting SVG animated environments (Starry Night vs. Cloudscapes).
- **Glassmorphism Design System:** Custom Tailwind utility classes built to handle responsive, translucent, and blurred UI components that maintain WCAG-compliant contrast ratios across both themes.
- **Bespoke Interaction Physics:** Powered by Framer Motion, featuring a multi-layered custom cursor with `mix-blend-difference` adaptation, buttery-smooth scroll reveals, and micro-interactions on all interactive nodes.
- **Optimized Rendering:** Built on Vite for lightning-fast HMR and minimal production bundle sizes.

## 🛠️ Technology Stack

| Architecture | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, JavaScript (ES6+) |
| **Build & Tooling** | Vite, ESLint, PostCSS |
| **Styling & UI** | Tailwind CSS v3, CSS Variables |
| **Motion & Physics** | Framer Motion |
| **Icons & Assets** | Lucide React |

## 👨‍💻 Developer Profile

I am a results-driven developer and analyst focused on building applications that matter. My approach combines technical precision with a product-centric mindset. Whether it's optimizing backend systems or building real-time interactive interfaces, I thrive on solving complex problems where code meets real-world impact.

- **Programming:** C, Java, JavaScript
- **Frontend Architecture:** HTML5, CSS3, React
- **Backend Infrastructure:** PHP, Node.js, Express
- **Database Management:** MySQL, MongoDB

## 🚀 Local Environment Setup

To run this application locally for development or auditing purposes:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/santhiya-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   The application will be served at `http://localhost:5173` (or the port specified in your console output).

## 🌍 Infrastructure & Deployment

This application is currently deployed via **Vercel** with continuous integration. 

For developers looking to fork or deploy this repository, ensure the following configuration is applied within your deployment pipeline (specifically Vercel/Netlify):

- **Framework Preset:** `Vite`
- **Root Directory:** `santhiya-portfolio` *(Critical: The build will fail if executed at the repository root)*
- **Output Directory:** `dist`
- **Build Command:** `npm run build`

---

<div align="center">
  <p>Built with intent by Santhiya S.</p>
</div>

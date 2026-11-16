# Faraz Khan — Portfolio & Swarm Rebuild Experience

A high-performance personal portfolio website for **Faraz Khan**, Web Developer & Creative Builder. Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, **Framer Motion**, and a custom **Native Swarm Rebuild Engine** that automatically reconstructs the website section-by-section with multiplayer animated cursors.

---

## ⚡ Highlights & Features

- **Autonomous Swarm Rebuild Engine**: 
  - 30–42 autonomous agents fly in and reconstruct the website element-by-element from a blank blueprint canvas on load.
  - Section-locked synchronization: agents exclusively build the visible section on screen before initiating a smooth, equal-duration ease-in-out scroll transition to the next section.
  - 100% native Web APIs — runs in all modern browsers without requiring any Chrome extension.
  - Live HUD displaying real-time agent count, layer progress, tour toggle, speed multiplier (1×/1.5×/2×), sound toggle, replay, and instant "Go Live".
- **Refined Claymorphism Aesthetic**:
  - Warm cream primary background (`#F3F0E8`) with clay surfaces (`#F8F6EF`), accent lime (`#B9F36A`), and dark clay contrast (`#202020`).
  - Tactile soft shadows, pill-shaped tags, and subtle architectural grids.
- **Scroll & Entrance Choreography**:
  - Seamless Framer Motion entrance animations that trigger as sections come into view.
  - Magnetic interactive buttons and custom cursor dynamics.
- **Responsive & Accessible**:
  - Full support across Desktop (Chrome, Edge, Firefox, Safari) and mobile devices.
  - Respects `prefers-reduced-motion` for accessibility.
- **Production-Ready & Vercel Optimized**:
  - Static Site Generation (SSG) with Next.js 15 App Router.
  - Zero-config deployment on Vercel.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack ready)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Custom Claymorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Web Audio API Synthesizer (Zero external audio file latency)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── public/                 # Static assets (portraits, project screenshots, icons)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.jsx      # Root HTML shell & fonts
│   │   ├── page.jsx        # Single-page portfolio with dynamic animation reset
│   │   ├── about/          # Dedicated About page
│   │   ├── projects/       # Dedicated Projects showcase page
│   │   ├── contact/        # Dedicated Contact page
│   │   └── globals.css     # Tailwind CSS base and claymorphism tokens
│   ├── components/         # Modular portfolio sections
│   │   ├── Navbar.jsx      # Floating claymorphic navbar with active pill
│   │   ├── Hero.jsx        # Hero section with headline and stylized portrait
│   │   ├── InfiniteTechMarquee.jsx # Infinite looping technology marquee
│   │   ├── About.jsx       # About Me section
│   │   ├── TechStack.jsx   # Interactive categorized tech skills
│   │   ├── Services.jsx    # Engineering and design service offerings
│   │   ├── Projects.jsx    # Selected featured works with live links
│   │   ├── Process.jsx     # 4-step execution workflow
│   │   ├── FAQ.jsx         # Frequently Asked Questions accordion
│   │   ├── Contact.jsx     # Contact form and direct communication channels
│   │   ├── Footer.jsx      # Architectural footer with quick links
│   │   ├── Preloader.jsx   # Architectural curtain opening into the Swarm canvas
│   │   └── swarm/          # Native Swarm Multiplayer Cursor Engine
│   │       ├── SwarmMainCursor.jsx        # Automatic visitor trigger & audio unlock
│   │       ├── SwarmCursorLayer.jsx       # Viewport layer wrapper
│   │       ├── SwarmAnimationController.jsx # Replay pill & controls
│   │       ├── SwarmEffects.jsx           # Sound effects & motion preferences
│   │       ├── swarmEngine.js             # Core swarm engine, DOM scanner & tour
│   │       └── swarm.css                  # Canvas styles & cursor keyframes
│   ├── data/
│   │   └── portfolioData.js # Centralized project & experience content
│   └── utils/
│       └── animations.js   # Reusable easing curves and animation variants
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and build scripts
└── .gitignore              # Clean ignore rules (builds, caches, local scratch)
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone your repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To build and test the production bundle locally:
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your repository to **GitHub** (see instructions below).
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your portfolio repository from the list.
5. Vercel automatically detects **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build` (or `npm run build`)
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click **"Deploy"**. Your site will be live on a `*.vercel.app` domain in less than 2 minutes!

### Option 2: Deploy using Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 👤 Author

**Faraz Khan**
- Web Developer & Creative Builder
- Email: [faraz.upscale@gmail.com](mailto:faraz.upscale@gmail.com)
- Portfolio: [http://localhost:3000](http://localhost:3000)

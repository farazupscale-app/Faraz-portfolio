# Faraz Khan — Personal Portfolio

A modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Features interactive swarm cursor physics, tactile neomorphic/claymorphism design language, Google Search Console SEO optimization, and a serverless Google Sheets contact form integration.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS & Custom Tactile Claymorphism Design System
- **Animations**: Framer Motion & Canvas Confetti
- **Icons**: Lucide React
- **Backend / Database**: Next.js Route Handlers + Google Apps Script + Google Sheets API
- **Deployment**: Vercel

---

## ✨ Features

- **Tactile Claymorphism & Neo-brutalism UI**: Unique aesthetic with custom shadows and micro-interactions.
- **Interactive Swarm Cursor Physics**: Dynamic canvas-based swarm simulation responding to user engagement.
- **Google Sheets Inquiries Integration**: Contact form submissions are directly captured into Google Sheets via a secure Next.js API route (`/api/contact`).
- **SEO & Search Console Ready**: Includes pre-configured `robots.txt`, dynamic OpenGraph tags, JSON-LD Schema.org metadata, Google site verification, and `sitemap.xml`.
- **Responsive & Accessible**: Optimized for all viewports from mobile devices to ultrawide desktop monitors.

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (refer to `.env.example`):

```env
# Google Sheets Webhook URL from your deployed Apps Script Web App
GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Public Site URL
NEXT_PUBLIC_SITE_URL=https://farazkhan.dev
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📊 Google Sheets Contact Form Setup

1. Create a Google Sheet at [sheets.new](https://sheets.new).
2. Go to **Extensions** → **Apps Script**.
3. Copy the script from `scripts/google-apps-script.js` and paste it into the editor.
4. Click **Deploy** → **New deployment** → Type: **Web app**.
5. Set **Execute as**: `Me` and **Who has access**: `Anyone`.
6. Copy the resulting Web app URL and paste it into `.env.local` as `GOOGLE_SHEETS_SCRIPT_URL`.

---

## 🚀 Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. In **Settings** → **Environment Variables**, add:
   - `GOOGLE_SHEETS_SCRIPT_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. Click **Deploy**.

# 🎓 Hamna | Modern University Student Portfolio Website

A modern, visually impressive, and fully responsive personal portfolio website engineered for a University Student in Computer Science & Software Engineering.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 🌟 Key Features & Architecture

### 1. Design & Visual Identity
- **Sophisticated Dark & Light Theme System**: Integrated with React Context and `localStorage` persistence, featuring automatic system theme detection and smooth transitions.
- **Modern Typography & Glassmorphism**: Styled with *Plus Jakarta Sans* and *JetBrains Mono*, delicate glass-card borders, animated mesh gradients, and glowing accents.
- **Fluid Micro-Interactions**: Smooth scrollspy navigation, interactive category filtering, card elevations, and confetti feedback.
- **Mobile-First & Fully Responsive**: Tailored for desktops, tablets, and smartphones with a collapsible mobile drawer.

### 2. Complete Website Sections
1. **Home / Hero**:
   - Student's full name, university designation, status badge ("Available for Summer Internships").
   - Short tagline, profile photograph card with status indicators.
   - Interactive **Download CV** button and **Contact Me** CTA.
   - Quick statistics counter pills (GPA, Projects, etc.).
2. **About Me**:
   - Personal introduction story and academic mindset.
   - Educational background and university credentials.
   - Career goals (Web architecture, distributed systems, developer tools).
   - Academic interests and personal strengths breakdown.
3. **Education**:
   - University name, department, current standing (6th Semester Junior), graduation year.
   - CGPA display (3.84 / 4.0).
   - Academic honors & scholarships (Dean's Honor List, Merit Scholarship).
   - Relevant curriculum coursework checklist.
4. **Skills**:
   - Organized into 6 distinct categories: *Programming Languages*, *Web Development*, *Database Management*, *Software & Dev Tools*, *Communication & Teamwork*, and *Problem Solving*.
   - Interactive category filtering tabs and animated proficiency progress bars.
5. **Projects**:
   - High-fidelity project showcase (*EduSphere*, *DevPulse*, *CampusBite*, *AlgoVision*, *HealthSync*, *EcoTrack*).
   - Category filtering (Full-Stack, Frontend & API, Educational Tools, IoT).
   - Direct GitHub and Live Demo links.
   - **Interactive Project Architecture Modal** for inspecting deep case studies.
6. **Experience**:
   - Categorized cards for *Internships*, *Freelance Experience*, *Volunteer Work*, and *University Activities*.
   - Detailed accomplishments and technical tools utilized.
7. **Certifications & Achievements**:
   - Verified credentials from *Meta*, *AWS*, *NUST*, *HackerRank*, *Google*, and *National Collegiate Hackathon*.
   - Credential ID display, verification hyperlinks, and verified shields.
8. **Contact**:
   - Direct email with one-click **Copy to Clipboard** and mailto action.
   - LinkedIn and GitHub quick links.
   - Interactive message form with real-time validation, animated submission state, and celebration confetti explosion.
9. **Interactive Curriculum Vitae (CV) Modal**:
   - Accessible via the "Resume / CV" button on both header and hero.
   - Includes browser **Print to PDF** functionality and automated **Text Resume Downloader**.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the project directory
cd "hamna portfolio"

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Student Information

All portfolio content is centralized in a clean, modular configuration file:
👉 **[`src/data/portfolioData.js`](file:///c:/Users/DELL/Desktop/hamna%20portfolio/src/data/portfolioData.js)**

To personalize the portfolio for your own details:
1. Open `src/data/portfolioData.js`.
2. Update `personal.name`, `personal.university`, `personal.email`, `personal.github`, and `personal.linkedin`.
3. Add or replace your projects in `projects` array.
4. Update your education details, CGPA, and coursework in `education`.
5. Add your work experience and achievements in `experience` and `certifications`.
6. To update your profile photo, replace the `personal.profileImage` URL with your own photo link or place an image in the `public/` directory (e.g. `/profile.jpg`).

---

## ☁️ Deployment Guide (Vercel)

This repository includes a pre-configured `vercel.json` optimized for Single-Page Applications (SPA routing and asset caching).

### Method 1: Deploy with Vercel CLI
```bash
npx vercel
```
Follow the interactive CLI prompts:
- Set up and deploy: **Yes**
- Which scope: Select your Vercel account
- Link to existing project: **No**
- What's your project name: `hamna-portfolio`
- In which directory: `./`
- Auto-detected settings: Accept defaults (Vite)

To deploy directly to production:
```bash
npx vercel --prod
```

### Method 2: Deploy with Git & Vercel Dashboard
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of modern university student portfolio"
   ```
2. Push to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/hamna-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new).
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** and build command `npm run build`. Click **Deploy**.

---

## 🛠️ Tech Stack & Libraries
- **React 18** – Modern functional components & hooks
- **Vite 5** – Fast build tooling and Hot Module Replacement
- **Tailwind CSS 3** – Utility-first responsive styling
- **Framer Motion 11** – Smooth animations and spring transitions
- **Lucide React** – Clean, modern developer and UI icons
- **Canvas Confetti** – Delightful interactive celebrations

---

## 📄 License
MIT License. Free to use and customize for university students and developers worldwide.

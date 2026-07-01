# Shashank C A — Portfolio

A premium, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Content is sourced from `src/data/resumeData.js`.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- React Router
- EmailJS (contact form)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Configure the contact form (EmailJS)

1. Create a free account at https://www.emailjs.com
2. Create an Email Service and an Email Template (with `from_name`, `from_email`, `message` variables).
3. Open `src/sections/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## Update content

All resume content (name, skills, experience, projects, education) lives in `src/data/resumeData.js`. Edit it directly — no component changes needed for text updates.

The downloadable resume PDF is at `public/Shashank_CA_Resume.pdf`. Replace this file to update the "Download Resume" button's output, or edit `profile.resumeFile` in the data file if you rename it.

Add a real headshot/photo by placing it in `src/assets/` and swapping it into `src/sections/Hero.jsx` in place of the initials avatar.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```
Or connect the GitHub repo at https://vercel.com/new — Vercel auto-detects the Vite framework. Build command: `npm run build`, output directory: `dist`.

## Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```
Or connect the repo at https://app.netlify.com — set build command to `npm run build` and publish directory to `dist`.

## Folder structure

```
src/
├── assets/        # images, icons
├── components/     # reusable UI (Navbar, Button, ProjectCard, etc.)
├── sections/       # page sections (Hero, About, Skills, Experience, Projects, Education, Contact)
├── pages/          # route-level pages (Home)
├── hooks/          # custom hooks (typing effect, scroll progress, active section)
├── utils/          # reserved for shared helpers
├── data/           # resumeData.js — single source of truth for content
├── styles/         # global Tailwind/CSS entry
├── App.jsx
└── main.jsx
```

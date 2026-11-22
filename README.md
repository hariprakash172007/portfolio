# Hari Prakash C — Portfolio

React + Vite + Framer Motion + Lucide React, with hand-written CSS (no UI frameworks).

## Run it

```bash
npm install
cp .env.example .env     # then fill in your real contact details
npm run dev              # http://localhost:5173
```

Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Fill in the blanks

Nothing in the site is invented. Until you set these in `.env`, the matching contact links show as
"Not set yet" and the enquiry form tells visitors it can't send:

| Variable | Example |
| --- | --- |
| `VITE_CONTACT_EMAIL` | `you@yourdomain.com` |
| `VITE_LINKEDIN_URL` | `https://www.linkedin.com/in/your-handle` |
| `VITE_GITHUB_URL` | `https://github.com/your-handle` |
| `VITE_WHATSAPP_NUMBER` | `919876543210` (digits only, with country code) |

On Netlify/Vercel, add the same variables in the project's environment settings before building.

## Projects

Edit `src/data/projects.js`.

- Add a real `url` or `source` and the matching button appears (View Source only shows when `source` is set).
- Put a real screenshot in `public/projects/` and set `image: '/projects/your-file.png'` to replace the generated artwork.
- Projects without a `url` open a details panel instead of linking anywhere.
- `tech` was only filled where a stack was given (TouroGuardian, AdmitWise). Add stacks for the other two.

## Experience

Edit `src/data/experience.js`. No dates were invented — add `period` values where you want them shown.

## Structure

```
src/
  components/  Navbar, Footer, Button, Reveal, Monogram, HeroArt, ProjectVisual
  sections/    Hero, About, Projects, Skills, Experience, Services, Contact
  data/        siteConfig, projects, experience
  hooks/       useActiveSection
  App.jsx  App.css  index.css  main.jsx
```

## Deploy

Netlify: build command `npm run build`, publish directory `dist`. Vercel auto-detects Vite.

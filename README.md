<div align="center">

# ✦ jcmunozo — Portfolio

**Personal portfolio built with React + Vite**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat)](LICENSE)

**[jcmunozo.pro](https://jcmunozo.pro/)**

</div>

---

## Overview

Single-page portfolio that showcases my experience, projects and skills. It features smooth scroll animations, an interactive typewriter intro, a repel-on-hover title effect, and animated blob decorations — all with a dark glassmorphism aesthetic.

---

## Stack

| Layer | Technology |
|-------|-----------|
| UI | React 18 |
| Build | Vite 5 |
| Styling | CSS Modules + CSS custom properties |
| Icons | react-icons |
| Typewriter | react-simple-typewriter |
| Fonts | Google Fonts (Outfit, Roboto) |

---

## Features

- **Typewriter intro** — animated greeting on load, then switches to an interactive repel-on-hover title
- **Blob animations** — organic floating shapes behind the hero image
- **Scroll hint** — context-aware navigation pill (bottom-center at page edges, side pill while scrolling)
- **Depth scroll effect** — sections scale in/out as they enter/exit the viewport via `animation-timeline: view()`
- **Glassmorphism UI** — inset highlight + colored glow on skill icons, experience logos, and CTA button
- **Data-driven content** — all text and project info lives in `src/data/*.json`, no component changes needed to update content

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

---

## Project Structure

```
├── assets/               # Images served at runtime
│   ├── hero/
│   ├── skills/
│   └── projects/
├── src/
│   ├── components/       # One folder per section
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── ScrollHint/
│   ├── data/             # ← Edit content here
│   │   ├── hero.json
│   │   ├── about.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   └── projects.json
│   ├── utils.js          # getImageUrl helper
│   └── vars.css          # Design tokens (colors, fonts, spacing)
└── index.html
```

---

## Updating Content

All displayed content is data-driven. To update the portfolio without touching components:

| What to change | File |
|----------------|------|
| Hero text | `src/data/hero.json` |
| About section | `src/data/about.json` |
| Skills list | `src/data/skills.json` |
| Work experience | `src/data/experience.json` |
| Projects | `src/data/projects.json` |

Images are resolved via `getImageUrl("folder/file.png")` → `assets/folder/file.png`.

---

## Assets

Icons and images sourced from:

- [icon-icons.com](https://icon-icons.com/)
- [pngwing.com](https://www.pngwing.com/)
- [flaticon.com](https://www.flaticon.com/)

---

<div align="center">

Built by [jcmunozo](https://github.com/jcmunozo)

</div>

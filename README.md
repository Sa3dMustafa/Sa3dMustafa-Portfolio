# Saad Mustafa — Portfolio

A premium, production-ready portfolio website built with **React + Vite**, featuring dark/light mode, smooth animations, interactive project modals, and a fully responsive design.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 24+ and npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The app will run at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
saad-mustafa-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css        # Sticky nav with active highlight
│   │   ├── Hero.jsx / .css          # Animated hero with parallax + typing
│   │   ├── About.jsx / .css         # About with code card
│   │   ├── Projects.jsx / .css      # Filterable project grid
│   │   ├── ProjectModal.jsx / .css  # Expandable project detail modal
│   │   ├── Skills.jsx / .css        # Tabbed skill grid with marquee
│   │   ├── Leadership.jsx / .css    # Timeline cards
│   │   ├── Experience.jsx / .css    # Experience + Education
│   │   ├── Contact.jsx / .css       # Contact form + social links
│   │   ├── Footer.jsx / .css        # Footer
│   │   ├── LoadingScreen.jsx        # Loading animation
│   │   └── UIControls.jsx           # ScrollToTop + ThemeToggle
│   ├── data/
│   │   └── index.js                 # All site content (projects, skills, etc.)
│   ├── hooks/
│   │   ├── useReveal.js             # Scroll-triggered reveal animations
│   │   └── useTheme.js              # Dark/light mode with localStorage
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles + design tokens
├── index.html                       # HTML shell with meta tags + fonts
├── vite.config.js
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Design | Dark/light mode with teal accent `#1ABC9C` |
| 🏠 Hero | Typing animation, parallax, floating code snippets |
| 🗂 Projects | Filterable grid + detailed modal with blur backdrop |
| 🛠 Skills | Tabbed grid with hover tooltips + infinite marquee |
| 📅 Leadership | Animated timeline with IEEE & GDSC roles |
| 💼 Experience | NTI internship + education cards |
| 📧 Contact | Form with validation + social links |
| 🌙 Theme | localStorage persistence, smooth transition |
| ⬆️ UX | Scroll-to-top button, loading screen, reveal animations |
| 📱 Responsive | Mobile-first, hamburger menu, fully fluid |

---

## 🎨 Customization

All content lives in **`src/data/index.js`**. Edit projects, skills, leadership, and experience there — no hunting through component files.

To swap the profile image, replace the SVG illustration inside `Hero.jsx`'s `.hero-avatar` div with an `<img>` tag pointing to your photo.

---

## 🔧 Tech Stack

- **React 24** — UI library
- **Vite 5** — Build tool
- **Framer Motion** — Animation library (available, extend as needed)
- **react-type-animation** — Typing effect in hero
- **CSS Variables** — Design tokens for theming
- **IntersectionObserver** — Scroll reveal (no heavy library)

---

## 📄 License

MIT — free to use and adapt.

import { image } from "framer-motion/client";

export const projects = [
  {
    id: "saad-mustafa-portfolio",
    title: "Saad Mustafa Portfolio",
    tagline: "Premium React Developer Portfolio",
    shortDesc:
      "A modern, high-performance developer portfolio showcasing projects, skills, and experience with smooth animations and responsive UI.",
    problem:
      "Most developer portfolios are either outdated, slow, or lack interactive storytelling, making it hard to properly showcase skills and projects in a compelling way.",
    solution:
      "Built a production-ready portfolio using React + Vite with a modular architecture, smooth animations, dark/light mode, interactive project modals, and reusable data-driven components.",
    impact:
      "Provides a fast, responsive, and visually engaging experience that improves personal branding, increases recruiter engagement, and clearly communicates technical expertise.",
    primaryTech: "React",
    tech: [
      "React",
      "Vite",
      "CSS3",
      "JavaScript (ES6+)",
      "Framer Motion",
      "Intersection Observer API",
      "react-type-animation",
      "LocalStorage API",
    ],
    achievements: [
      "Dark / Light mode with persistent theme switching",
      "Animated hero section with typing and parallax effects",
      "Filterable projects grid with modal previews",
      "Reusable data-driven architecture (single source of truth)",
      "Fully responsive mobile-first design",
      "Scroll-based reveal animations",
      "Loading screen + smooth UX transitions",
    ],
    github: "https://github.com/Sa3dMustafa/Sa3dMustafa-Portfolio",
    demo: "https://sa3d-mustafa-portfolio.vercel.app/",
    color: "#1ABC9C",
    emoji: "💼",
    images: [
      "/assets/Portfolio/portfolio-1.png",
      "/assets/Portfolio/portfolio-2.png",
      "/assets/Portfolio/portfolio-3.png",
      "/assets/Portfolio/portfolio-4.png",
    ],
  },
  {
    id: "hospitify",
    title: "Hospitify",
    tagline: "AI-Powered Healthcare System",
    shortDesc:
      "Revolutionizing patient management with intelligent automation and real-time data insights.",
    problem:
      "Healthcare facilities struggle with fragmented patient records, slow triage, and inefficient resource management - costing time and lives.",
    solution:
      "Built a full-stack AI-powered healthcare platform with intelligent patient triage, real-time dashboards, and automated workflows to streamline clinical operations.",
    impact:
      "Reduced administrative overhead by 40%, improved patient processing speed, and delivered a HIPAA-compliant system trusted by medical staff.",
    primaryTech: "React",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Axios",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Python",
      "TensorFlow",
      "Flask",
    ],
    achievements: [
      "AI-driven patient triage and risk assessment",
      "Real-time hospital resource dashboard",
      "Secure medical records with role-based access",
      "Automated appointment and billing workflows",
    ],
    color: "#1ABC9C",
    emoji: "🏥",
    images: [
      "/assets/Graduation-project/graduationP-1.jpg",
      "/assets/Graduation-project/graduationP-2.jpg",
      "/assets/Graduation-project/graduationP-3.jpg",
      "/assets/Graduation-project/graduationP-4.jpg",
      "/assets/Graduation-project/graduationP-5.jpg",
      "/assets/Graduation-project/graduationP-6.jpg",
      "/assets/Graduation-project/graduationP-7.jpg",
      "/assets/Graduation-project/graduationP-8.jpg",
      "/assets/Graduation-project/graduationP-9.png",
      "/assets/Graduation-project/graduationP-10.png",
    ],
  },
  {
    id: "quran-ayah",
    title: "Quran Ayah App",
    tagline: "Next.js Optimized Quran Reader",
    shortDesc:
      "A beautifully crafted, lightning-fast Quran application with multilingual support and audio recitation.",
    problem:
      "Most Quran apps are bloated, slow, or inaccessible - failing to deliver a smooth, respectful reading experience across devices.",
    solution:
      "Engineered a performance-first Quran app with SSG/ISR via Next.js, full Arabic text support, audio recitation, and multilingual translations.",
    impact:
      "Achieved 98+ Lighthouse scores, sub-second load times, and delivered a respectful, accessible spiritual experience to thousands of users.",
    primaryTech: "Next.js",
    tech: ["Next.js", "Alquran Cloud API", "Tailwind CSS"],
    achievements: [
      "98+ Lighthouse performance score",
      "Server-side rendering with ISR for instant loads",
      "Audio recitation by multiple Qaris",
    ],
    github: "https://github.com/Sa3dMustafa/random-ayah-from-quran",
    demo: "https://random-ayah-from-quran.vercel.app/",
    color: "#16a085",
    emoji: "📖",
    images: ["/assets/AyahFromQuran/ayahApp.png"],
  },
  {
    id: "satellite-tracking-system",
    title: "Satellite Tracking & Geospatial Explorer",
    tagline: "Real-Time Satellite Distance & Overpass Analysis",

    shortDesc:
      "A geospatial web application that allows users to interact with maps, select coordinates, and calculate real-time satellite distance and overpass timing using live orbital data.",

    problem:
      "Accessing real-time satellite data and calculating spatial relationships (distance, overpass) requires complex tools and is not easily accessible through intuitive web interfaces.",

    solution:
      "Built a full-stack geospatial system using React and Flask that integrates interactive maps with real-time satellite TLE data, enabling users to select locations and compute satellite distance and overpass timing dynamically.",

    impact:
      "Simplified complex satellite computations into an intuitive UI, enabling real-time geospatial analysis and improving accessibility to orbital data for non-technical users.",
    primaryTech: "React",
    tech: [
      "React",
      "Leaflet.js",
      "Custom Hooks",
      "Context API",
      "React Query",
      "Flask",
      "Python",
      "Skyfield",
      "REST API",
      "MapTiler API",
    ],

    achievements: [
      "Interactive map with dynamic coordinate selection",
      "Custom hook for map lifecycle and event handling",
      "Real-time satellite distance calculation using Skyfield",
      "Satellite overpass prediction within 24 hours",
      "Live TLE data integration from Celestrak",
      "Full-stack integration (React + Flask API)",
      "Popup-based UI for metadata input",
      "Context-based global state management",
      "Clean modular architecture with reusable hooks and services",
    ],

    github: "https://github.com/Sa3dMustafa/spectra-mappers-Project",
    demo: "https://spectra-mappers-project.vercel.app/",

    color: "#27AE60",
    emoji: "🛰️",
    images: [
      "/assets/SatelliteTracking/satellite-1.png",
      "/assets/SatelliteTracking/satellite-2.png",
      "/assets/SatelliteTracking/satellite-3.png",
    ],
  },
  {
    id: "CRUD",
    title: "CRUD Products Management System",
    tagline: "Vanilla JS Product Management with LocalStorage",

    shortDesc:
      "A fully functional product management system built with pure JavaScript, featuring CRUD operations, search, multi-language support, and dark mode.",

    problem:
      "Managing product data efficiently without a backend can be challenging, especially when handling dynamic updates, search, and user preferences like themes and languages.",

    solution:
      "Developed a complete CRUD system using Vanilla JavaScript with LocalStorage for persistence, enabling users to create, update, delete, and search products dynamically with a responsive and interactive UI.",

    impact:
      "Delivered a lightweight and fast product management solution with persistent storage, improved UX through theme switching and multilingual support, and demonstrated strong fundamentals in DOM manipulation and state handling.",
    primaryTech: "JavaScript",
    tech: ["React", "JavaScript", "HTML", "CSS", "LocalStorage"],

    achievements: [
      "Full CRUD functionality (Create, Read, Update, Delete)",
      "Persistent data storage using LocalStorage",
      "Dynamic search by title and category",
      "Multi-language support (English & Arabic)",
      "Dark & Light mode with saved preferences",
      "Real-time total price calculation",
      "Bulk product creation using count feature",
      "Clean DOM manipulation and state handling",
    ],
    github: "https://github.com/Sa3dMustafa/E-commerce1",
    demo: "https://sa3dmustafa.github.io/CRUD-System/",
    color: "#1ABC9C",
    emoji: "🛒",
    images: [
      "/assets/CRUD/crud1.png",
      "/assets/CRUD/crud2.png",
      "/assets/CRUD/crud3.png",
    ],
  },

  {
    id: "admin-dashboard",
    title: "Admin Dashboard UI",
    tagline: "Modern Multi-Page Dashboard Interface",
    shortDesc:
      "A responsive admin dashboard UI featuring analytics, user management, and file organization in a clean modern layout.",

    problem:
      "Many beginner dashboards lack scalability, proper layout structure, and reusable components, making them unrealistic for production use.",

    solution:
      "Designed and developed a fully responsive multi-page admin dashboard using reusable components, structured layout system, and modern UI patterns.",

    impact:
      "Strengthened real-world UI architecture skills, improved responsive design handling, and delivered a scalable dashboard suitable for production-level expansion.",
    primaryTech: "HTML",
    tech: [
      "HTML",
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Normalize.css",
    ],

    achievements: [
      "Fully responsive sidebar navigation",
      "Multi-page dashboard structure",
      "Analytics and statistics UI sections",
      "User profile and settings layout",
      "Projects, courses, and file management pages",
      "Pricing plans and billing UI",
      "Search and notification system UI",
      "Consistent and reusable design system",
    ],

    github: "https://github.com/Sa3dMustafa/Template-4/tree/main",
    demo: "https://sa3dmustafa.github.io/Template-4/",
    color: "#3498DB",
    emoji: "📊",
    images: ["/assets/AdminDashboardUI/dashboard.png"],
  },

  {
    id: "multi-section-template",
    title: "Multi-Section Responsive Website",
    tagline: "Modern HTML & CSS Mega UI Template",

    shortDesc:
      "A fully responsive multi-section website template featuring advanced UI components like mega menu, dashboards, pricing plans, and interactive layouts.",

    problem:
      "Most beginner templates are limited to simple layouts and lack real-world UI components like mega menus, complex sections, and scalable design systems.",

    solution:
      "Developed a complete multi-section responsive website using pure HTML and CSS, implementing advanced UI patterns such as mega menus, dynamic sections, responsive grids, and modern layout techniques.",

    impact:
      "Significantly improved UI structuring and CSS architecture skills, and created a production-level template that simulates real-world website complexity.",
    primaryTech: "HTML",
    tech: [
      "HTML",
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Google Fonts",
      "Normalize.css",
    ],

    achievements: [
      "Advanced mega menu navigation system",
      "Fully responsive multi-section layout",
      "Interactive landing section with slider",
      "Articles, gallery, and features sections",
      "Testimonials and team members UI",
      "Services, skills, and work steps sections",
      "Pricing plans and subscription UI",
      "Events countdown and stats section",
      "Video preview system",
      "Clean and scalable CSS architecture",
    ],

    github: "https://github.com/Sa3dMustafa/Templete-3/tree/main",
    demo: "https://sa3dmustafa.github.io/Templete-3/",

    color: "#E67E22",
    emoji: "🧩",
    images: [
      "/assets/Multi-Section/multi-1.png",
      "/assets/Multi-Section/multi-2.png",
      "/assets/Multi-Section/multi-3.png",
      "/assets/Multi-Section/multi-4.png",
      "/assets/Multi-Section/multi-5.png",
      "/assets/Multi-Section/multi-6.png",
      "/assets/Multi-Section/multi-7.png",
      "/assets/Multi-Section/multi-8.png",
      "/assets/Multi-Section/multi-9.png",
      "/assets/Multi-Section/multi-10.png",
      "/assets/Multi-Section/multi-11.png",
      "/assets/Multi-Section/multi-12.png",
      "/assets/Multi-Section/multi-13.png",
    ],
  },

  {
    id: "kaspar-template",
    title: "Kaspar Template Website",
    tagline: "Modern Responsive Landing Page",
    shortDesc:
      "A fully responsive multi-section landing page built with modern UI/UX principles and smooth navigation experience.",

    problem:
      "Most static templates fail to provide a smooth user experience, modern layout structure, and full responsiveness across devices.",

    solution:
      "Built a clean and responsive landing page with structured sections, smooth scrolling, and modern layout using Flexbox and CSS Grid.",

    impact:
      "Improved responsive design skills, enhanced layout structuring ability, and delivered a portfolio-ready modern landing page.",
    primaryTech: "HTML",
    tech: [
      "HTML",
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Google Fonts",
    ],

    achievements: [
      "Fully responsive multi-section layout",
      "Animated landing slider",
      "Smooth scrolling navigation",
      "Portfolio gallery grid system",
      "Testimonials and skills section UI",
      "Pricing and contact sections",
      "Clean and modern UI design",
    ],

    github: "https://github.com/Sa3dMustafa/Kaspar-Templete/tree/main",
    demo: "https://sa3dmustafa.github.io/Kaspar-Templete/",
    color: "#9B59B6",
    emoji: "🌐",
    images: [
      "/assets/KasparTemplateWebsite/kasper-1.png",
      "/assets/KasparTemplateWebsite/kasper-2.png",
      "/assets/KasparTemplateWebsite/kasper-3.png",
    ],
  },
  {
    id: "guess-my-number",
    title: "Guess My Number",
    tagline: "Interactive JavaScript Guessing Game",
    shortDesc:
      "A fun browser-based number guessing game that challenges players to find a hidden number with smart hints and scoring system.",
    problem:
      "Beginners often struggle to understand how JavaScript logic, DOM manipulation, and state management work together in real interactive applications.",
    solution:
      "Built an interactive guessing game using vanilla JavaScript that demonstrates DOM updates, event handling, conditional logic, and game state management in a simple UI.",
    impact:
      "Improved understanding of core JavaScript concepts such as events, randomization, and dynamic UI updates through an engaging hands-on project.",
    primaryTech: "JavaScript",
    tech: ["JavaScript", "HTML", "CSS"],
    achievements: [
      "Random number generation between custom range",
      "Dynamic UI feedback based on user input",
      "Score and high score tracking system",
      "Game reset functionality with improved UX",
      "Real-time DOM manipulation and event handling",
    ],
    github: "https://github.com/Sa3dMustafa/Guess-game",
    demo: "https://sa3dmustafa.github.io/Guess-game/",
    color: "#60b347",
    emoji: "🎯",
    images: [
      "/assets/Gusse-game/gusse-game.png",
      "/assets/Gusse-game/gusse2.png",
    ],
  },
];

export const skills = {
  Frontend: [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
    { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery" },
  ],

  Tools: [
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
    },
    { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  ],

  Languages: [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
  ],
};

export const leadership = [
  {
    role: "Vice Head - Frontend Circle",
    org: "IEEE ManCSC - Mansoura University",
    period: "Nov 2023 - Jul 2024",
    icon: "⚡",
    color: "#1ABC9C",
    points: [
      "Led frontend technical roadmap planning for the circle",
      "Mentored junior members on React, CSS, and modern tooling",
      "Organized technical workshops and code review sessions",
      "Coordinated cross-team collaboration on student projects",
    ],
  },
  {
    role: "Head of Public Relations",
    org: "Google Developer Student Club - MET Academy",
    period: "Sep 2023 - Jul 2024",
    icon: "🌐",
    color: "#16a085",
    points: [
      "Designed and executed PR strategies for major tech events",
      "Built partnerships with companies and student organizations",
      "Increased club visibility and social media engagement by 60%",
      "Coordinated media coverage for Google DevFest and workshops",
    ],
  },
];

export const experience = [
  {
    title: "Front End Intern",
    company: "NTI - National Telecommunication Institute, Mansoura, Egypt",
    period: "Feb. 2023 – Mar. 2023",
    type: "Internship",
    icon: "🏢",
    points: [
      "Proficient in web development using HTML, CSS, Bootstrap, and JavaScript",
      "Designed and developed responsive and interactive web pages using CSS3 and JavaScript",
      "Worked on building and editing client-side interfaces and layouts",
      "Trained on client-side scripting principles and UI development fundamentals",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

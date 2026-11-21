import type { Project, Education, ContactLink, DialogSegment } from '@/types';

export const introDialogs: DialogSegment[] = [
  {
    speaker: 'Yudhi',
    text: 'Hello, adventurer! Welcome to my Personal Portfolio Website',
  },
  {
    speaker: 'Yudhi',
    text: "I'm Yudhi Adinata, a Full-Stack and Mobile Developer based in Bali, Indonesia.",
  },
  {
    speaker: 'Yudhi',
    text: 'I build web and Flutter apps, scalable APIs, and production deployments. I also study Information Technology at Udayana University.',
  },
  {
    speaker: 'Yudhi',
    text: 'Explore my work at Viskal, PLEY, and Jinom, my projects, and my research on RAG-based campus assistants.',
  },
];

export const projects: Project[] = [
  {
    id: 'notvas',
    title: 'Notvas',
    subtitle: 'Local Canvas, Notes & Checklists',
    description:
      'Made with Rust and egui, Notvas is a Windows desktop app for sketching ideas, writing notes, and managing checklists. Connect shapes on a canvas, organize notes on colored boards, and keep documents in a local workspace with autosave and backups.',
    icon: '',
    image: '/assets/projects/notvas.webp',
    technologies: ['Rust', 'egui'],
    category: 'Personal',
    status: 'In Progress',
    githubUrl: 'https://github.com/yudnata/notvas',
  },
  {
    id: 'yudrive',
    title: 'Yudrive',
    subtitle: 'Private Photo & Video Library',
    description:
      'A private media library for organizing photos and videos into folders, browsing memories by date, and saving favorites. The Vue frontend uploads files directly to Cloudflare R2 through presigned URLs, with an Express API and PostgreSQL for authentication and metadata.',
    icon: '',
    image: '/assets/projects/yudrive.webp',
    imageNote: 'The album cover photos in this preview are AI-generated demo images.',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloudflare R2'],
    category: 'Web App',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/yudrive-frontend',
    liveUrl: 'https://yudrive-frontend.vercel.app',
  },
  {
    id: 'smart-campus-assistant',
    title: 'Smart Campus Assistant',
    subtitle: 'Academic Document Chat & Voice Assistant',
    description:
      'A Flutter assistant for asking questions about uploaded campus documents, viewing source references, and interacting by voice. A FastAPI backend handles document ingestion and retrieval with PostgreSQL and pgvector.',
    icon: '',
    image: '/assets/projects/smart-campus-assistant.webp',
    technologies: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/smart-campus-assistant',
  },
  {
    id: 'gis-budaya-bali',
    title: 'GIS Budaya Bali',
    subtitle: 'Bali Cultural Heritage Map',
    description:
      'A cultural heritage platform with an interactive map and articles about places across Bali. Contributors can propose locations and submit documentation for administrators to review before publication. Built with Vue, Go, PostgreSQL, and PostGIS.',
    icon: '',
    image: '/assets/projects/gis-budaya-bali.webp',
    technologies: ['Vue.js', 'Go', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web App',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/geographical-system-project',
  },
  {
    id: 'custom-homepage',
    title: 'Custom Homepage',
    subtitle: 'Personal Browser Start Page',
    description:
      'A browser start page with a live clock, web search, and shortcut bookmarks over a cinematic background. Built with HTML, CSS, and JavaScript, with GSAP for interface animations.',
    icon: '',
    image: '/assets/projects/custom-homepage.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/custom-homepage',
  },
  {
    id: 'travelhub',
    title: 'TravelHub',
    subtitle: 'Accommodation Booking Marketplace',
    description:
      'An accommodation marketplace for finding stays, making reservations, and managing properties as a host. Includes guest and host dashboards, payments, real-time messaging, and an AI travel assistant, backed by a Vue frontend and an Express API.',
    icon: '',
    image: '/assets/projects/travelhub.webp',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker'],
    category: 'Web App',
    status: 'In Progress',
    liveUrl: 'https://travel-hub-frontend-amber.vercel.app/',
  },
  {
    id: 'leadgo',
    title: 'LeadGo',
    subtitle: 'Predictive Lead Scoring Portal',
    description:
      'A full-stack CRM microservices solution that predicts customer conversion probability using machine learning. Features Role-Based Access Control (RBAC) for Admin and Sales workflows, real-time analytics dashboard, and lead management.',
    icon: '',
    image: '/assets/projects/LeadGo.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'CRUD'],
    category: 'Enterprise',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/predictive-lead-scoring-portal',
  },
  {
    id: 'midtrans-sims',
    title: 'NATSTORE',
    subtitle: 'Midtrans Simulation Store',
    description:
      'A production-grade digital asset simulation platform with Midtrans payment integration, GSAP motion graphics, and a robust Node.js backend. Features hardened security and industrial UI.',
    icon: '',
    image: '/assets/projects/midtrans-sims.png',
    technologies: [
      'Next.js',
      'Node.js',
      'Midtrans',
      'GSAP',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    category: 'Web App',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/midtrans-sims',
  },
  {
    id: 'letmecook',
    title: 'LetMeCook',
    subtitle: 'Recipe App',
    description:
      'A native Android application built with Kotlin following Clean MVVM Architecture. Features beautiful Material Design UI with ViewPager2 for onboarding, Lottie animations, and offline-first data persistence.',
    icon: '',
    image: '/assets/projects/LetMeCook.png',
    technologies: ['Kotlin', 'Android', 'MVVM', 'Firebase', 'Cloudinary'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/LetMeCook',
  },
  {
    id: 'coreti',
    title: 'CoreTI',
    subtitle: 'E-Commerce Platform',
    description:
      'Complete fullstack e-commerce solution with a powerful Admin Dashboard (CMS) for real-time inventory tracking, order processing, and customer inquiry management. Built with PHP and MySQL.',
    icon: '',
    image: '/assets/projects/CoreTI.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'CRUD'],
    category: 'Web App',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/CoreTI',
  },
  {
    id: 'cogika',
    title: 'Cogika',
    subtitle: 'Real-time Chat Application',
    description:
      'A modern, responsive messaging platform utilizing WebSocket for instant communication. Features include real-time private and group chats, friend request system, and a seamless adaptive layout for both desktop and mobile devices.',
    icon: '',
    image: '/assets/projects/cogika.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web App',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/cogika',
  },
  {
    id: 'earth3d',
    title: 'Earth3D',
    subtitle: 'Interactive 3D Earth Visualization',
    description:
      'An immersive technology course project featuring interactive 3D visualization of planet Earth. Built with React, Three.js, and React Three Fiber for smooth WebGL rendering and intuitive user interactions.',
    icon: '',
    image: '/assets/projects/Earth3d.png',
    technologies: ['React', 'Three.js', 'React Three Fiber', 'WebGL', '3D', 'JavaScript'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/imersif-globe-3d',
  },
  {
    id: 'asir-system',
    title: 'Advanced Information Retrieval',
    subtitle: 'Mathematical Text Search System',
    description:
      'A text search application utilizing advanced algorithms like Fuzzy IR, GVSM, and Latent Semantic Indexing (LSI) with detailed mathematical computations and GUI interface.',
    icon: '',
    image: '/assets/projects/ir-advance.png',
    technologies: ['Python', 'NumPy', 'Sastrawi', 'Tkinter'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/advanced-ir-system',
  },
];

export const educationList: Education[] = [
  {
    id: 'udayana',
    institution: 'Udayana University, Bali',
    degree: 'Bachelor of Information Technology',
    period: 'Sep 2023 – Present',
    location: 'Bali, Indonesia',
    description:
      'Information Technology student with a GPA of 3.82/4.00. Coursework includes Data Structures & Algorithms, Database Systems, Machine Learning, Software Engineering, and Web & Mobile Programming.',
    icon: '/icons/unud.png',
    achievements: [
      'Thesis: Design and Development of an Integrated Capstone Project Service System with a RAG-Based Chatbot (Case Study: Information Technology, Udayana University)',
    ],
  },
  {
    id: 'coding-camp-2026',
    institution: 'Coding Camp 2026 Powered by DBS Foundation',
    degree: 'AI Engineer Cohort',
    period: 'Jan 2026 – Jun 2026',
    location: 'Remote',
    description:
      'AI Engineer cohort focused on Python, data cleaning, exploratory data analysis, and supervised and unsupervised learning with Scikit-Learn, Pandas, and NumPy.',
    icon: '/icons/coding-camp.webp',
    achievements: [
      'Predictive modeling with regression, classification, and clustering',
    ],
  },
  {
    id: 'asah-program',
    institution: 'Asah Program led by Dicoding and Accenture',
    degree: 'React – Backend Cohort',
    period: 'Aug 2025 – Feb 2026',
    location: 'Remote',
    description:
      'Fullstack web development cohort focused on React.js, Node.js, Agile SDLC, UI/UX improvements, and backend API integration.',
    icon: '/icons/asah.png',
    achievements: [
      'Developed full-stack web applications with React.js and Node.js',
      'Applied Agile SDLC and iterative mentor feedback to improve UI/UX',
      'Supported API integration and frontend/backend data flow',
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    platform: 'Email',
    value: 'yudhinata04@gmail.com',
    url: 'mailto:yudhinata04@gmail.com',
    icon: '',
    color: '',
  },
  {
    id: 'github',
    platform: 'GitHub',
    value: 'github.com/yudnata',
    url: 'https://github.com/yudnata',
    icon: '',
    color: '',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    value: 'linkedin.com/in/yudnata',
    url: 'https://linkedin.com/in/yudnata',
    icon: '',
    color: '',
  },
  {
    id: 'website',
    platform: 'Website',
    value: 'yudnata.tech',
    url: 'https://yudnata.tech',
    icon: '',
    color: '',
  },
];

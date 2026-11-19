import type { Project, Education, ContactLink, DialogSegment } from '@/types';

export const introDialogs: DialogSegment[] = [
  {
    speaker: 'Yudhi',
    text: 'Hello, adventurer! Welcome to my Personal Portfolio Website',
  },
  {
    speaker: 'Yudhi',
    text: "I'm Yudhi Adinata, a passionate Web Developer based in Bali, Indonesia",
  },
  {
    speaker: 'Yudhi',
    text: 'focused on creating modern web applications that simplify complexity.',
  },
  {
    speaker: 'Yudhi',
    text: 'My work turns challenging technical problems into clean, intuitive, and delightful digital experiences for users.',
  },
];

export const projects: Project[] = [
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
    description:
      'Information Technology student with a GPA of 3.82/4.00.',
    icon: '/icons/unud.png',
    achievements: [
      'GPA 3.82/4.00',
      'Head of Publication Documentation, Design KWU — Jul–Sep 2025',
      'Staff of Student Association, Bulletin Division — Jan–Dec 2025',
      'Staff of Publication Documentation, Design ITCC — Jun–Nov 2024',
      'Staff of Publication Documentation, Design Sporti — Feb–May 2024',
    ],
  },
  {
    id: 'coding-camp-2026',
    institution: 'Coding Camp 2026 Powered by DBS Foundation',
    degree: 'AI Engineer Cohort',
    period: 'Jan 2026 – Jun 2026',
    description:
      'AI Engineer cohort focused on Python, data cleaning, exploratory data analysis, and supervised and unsupervised learning with Scikit-Learn, Pandas, and NumPy.',
    icon: '',
    achievements: [
      'Predictive modeling with regression, classification, and clustering',
    ],
  },
  {
    id: 'asah-program',
    institution: 'Asah Program led by Dicoding and Accenture',
    degree: 'React – Backend Cohort',
    period: 'Aug 2025 – Feb 2026',
    description:
      'Fullstack web development cohort focused on React.js, Node.js, Agile SDLC, UI/UX improvements, and backend API integration.',
    icon: '/icons/asah.png',
    achievements: [
      'Awarded Best Capstone Project',
      'Developed full-stack web applications with React.js and Node.js',
      'Supported API integration and frontend/backend data flow',
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    platform: 'Email',
    value: 'hello@yudnata.dev',
    url: 'mailto:hello@yudnata.dev',
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
    id: 'twitter',
    platform: 'Twitter',
    value: '@yudnata',
    url: 'https://twitter.com/yudnata',
    icon: '',
    color: '',
  },
];

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
    id: 'sentimentapp',
    title: 'SentimentAPP',
    subtitle: 'Sentiment Analysis Website',
    description:
      'A web-based sentiment analysis implementation using React and Flask with Naive Bayes method from scikit-learn. Classifies Indonesian public opinions about products into positive or negative sentiments.',
    icon: '',
    image: '/assets/projects/Sentiment.png',
    technologies: ['React', 'Flask', 'Python', 'scikit-learn', 'NLP', 'Machine Learning'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/sentiment-analysis-app',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Yudnata',
    subtitle: 'Personal Portfolio Website',
    description:
      'A web-based portfolio implementation using React and Next.js with TypeScript and Tailwind CSS.',
    icon: '',
    image: '/assets/projects/portfolio.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Personal',
    status: 'Completed',
    githubUrl: 'https://github.com/yudnata/portfolio-website',
  },
];

export const educationList: Education[] = [
  {
    id: 'udayana',
    institution: 'Udayana University, Bali',
    degree: 'Bachelor of Information Technology',
    period: 'Sep 2023 – Present',
    description:
      'Information Technology Student with GPA 3.77/4.00. Actively engaged in student organizations focusing on design and publication.',
    icon: '/icons/unud.png',
    achievements: [
      'GPA 3.77 / 4.00',
      'Head of Publication Documentation and Design KWU 2025',
      'Staff of Student Association – Bulletin Division 2025',
      'Staff of Publication Documentation and Design ITCC & Sporti 2024',
    ],
  },
  {
    id: 'asah-program',
    institution: 'Dicoding & Accenture',
    degree: 'React – Backend Cohort (Asah Program)',
    period: 'Aug 2025 – Feb 2026',
    description:
      'Intensive Fullstack Development program. Collaborating on web applications using React.js, Node.js, and Agile SDLC methodologies.',
    icon: '/icons/asah.png',
    achievements: [
      'Awarded as Best Capstone Project',
      'Full Stack Web Development (React & Node.js)',
      'Agile SDLC Implementation',
      'API Integration & Backend Development',
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

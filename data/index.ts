import type { 
  Project, 
  SkillCategory, 
  Education, 
  ContactLink, 
  DialogSegment 
} from '@/types';

export const introDialogs: DialogSegment[] = [
  {
    speaker: 'Welcome',
    text: 'Hello, adventurer! Welcome to my digital realm...',
  },
  {
    speaker: 'Yudnata',
    text: "I'm Yudnata, a passionate Web Developer on a quest to build amazing digital experiences!",
  },
  {
    speaker: 'Yudnata',
    text: 'This portfolio is my treasure chest of projects, skills, and adventures in the world of code.',
  },
  {
    speaker: 'Guide',
    text: 'Use the navigation above to explore different areas. Each section reveals more about this developer!',
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Pixel Portfolio',
    description: 'A pixel art themed portfolio website built with Next.js and TypeScript. Features visual novel-style navigation and retro gaming aesthetics.',
    icon: '',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Personal',
    status: 'In Progress',
    githubUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and payment processing.',
    icon: '',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    status: 'Completed',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'crm',
    title: 'LeadGo CRM',
    description: 'Customer Relationship Management system with lead scoring, tracking, and AI-powered sales assistance.',
    icon: '',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Enterprise',
    status: 'Completed',
    liveUrl: '#',
  },
  {
    id: 'taskmanager',
    title: 'Quest Tracker',
    description: 'A gamified task management app that turns your daily tasks into quests with XP and achievements.',
    icon: '',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    category: 'Personal',
    status: 'Planned',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '',
    skills: [
      { name: 'HTML/CSS', level: 90, icon: '' },
      { name: 'JavaScript', level: 85, icon: '' },
      { name: 'TypeScript', level: 80, icon: '' },
      { name: 'React', level: 85, icon: '' },
      { name: 'Next.js', level: 80, icon: '' },
      { name: 'Tailwind CSS', level: 85, icon: '' },
    ],
  },
  {
    title: 'Backend',
    icon: '',
    skills: [
      { name: 'Node.js', level: 75, icon: '' },
      { name: 'PHP/Laravel', level: 70, icon: '' },
      { name: 'Python', level: 65, icon: '' },
      { name: 'REST APIs', level: 80, icon: '' },
    ],
  },
  {
    title: 'Database',
    icon: '',
    skills: [
      { name: 'MySQL', level: 75, icon: '' },
      { name: 'PostgreSQL', level: 70, icon: '' },
      { name: 'MongoDB', level: 65, icon: '' },
    ],
  },
  {
    title: 'Tools',
    icon: '',
    skills: [
      { name: 'Git', level: 85, icon: '' },
      { name: 'VS Code', level: 90, icon: '' },
      { name: 'Figma', level: 70, icon: '' },
    ],
  },
];

export const educationList: Education[] = [
  {
    id: 'university',
    institution: 'Your University Name',
    degree: 'Bachelor of Computer Science',
    period: '2020 - 2024',
    description: 'Focused on software engineering and web development.',
    icon: '',
    achievements: ['Dean\'s List', 'Programming Club Leader', 'Best Project Award'],
  },
  {
    id: 'bootcamp',
    institution: 'Web Dev Bootcamp',
    degree: 'Full Stack Web Development',
    period: '2023',
    description: 'Intensive program covering modern web technologies.',
    icon: '',
    achievements: ['Top Graduate', 'Completed 10+ Projects'],
  },
  {
    id: 'highschool',
    institution: 'Your High School',
    degree: 'Science Major',
    period: '2017 - 2020',
    description: 'Foundation in science and technology.',
    icon: '',
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

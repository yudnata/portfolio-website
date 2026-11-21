export const profile = {
  name: 'Gede Yudhi Adinata Putra Kurniawan',
  title: 'Full-Stack & Mobile Developer',
  location: 'Denpasar, Bali',
  email: 'yudhinata04@gmail.com',
  phone: '+62 8966 9760 121',
  website: 'https://yudnata.tech',
  summary:
    'Full-Stack and Mobile Developer based in Bali, building user-centered web and cross-platform applications, scalable backend systems, and production deployments. Information Technology student at Udayana University with a GPA of 3.82/4.00.',
};

export interface ResumeSkill {
  name: string;
  iconSrc?: string;
}

export const skillGroups: { title: string; accent: string; skills: ResumeSkill[] }[] = [
  { title: 'Programming Languages', accent: 'border-blue-400', skills: [
    { name: 'Dart', iconSrc: '/icons/technology/dart.svg' }, { name: 'Go', iconSrc: '/icons/Go.png' },
    { name: 'JavaScript', iconSrc: '/icons/JavaScript.png' },
    { name: 'Python', iconSrc: '/icons/Python.png' },
    { name: 'PHP', iconSrc: '/icons/technology/php.svg' },
  ] },
  { title: 'Design', accent: 'border-purple-400', skills: [
    { name: 'Figma', iconSrc: '/icons/Figma.png' },
    { name: 'Photoshop', iconSrc: '/icons/AdobePhotoshop.png' },
    { name: 'Adobe Illustrator', iconSrc: '/icons/AdobeIllustrator.png' },
    { name: 'Premiere Pro', iconSrc: '/icons/AdobePremierePro.png' },
    { name: 'Canva', iconSrc: '/icons/Canva.png' },
  ] },
  { title: 'DevOps & Tools', accent: 'border-orange-400', skills: [
    { name: 'Docker', iconSrc: '/icons/docker.png' }, { name: 'Git', iconSrc: '/icons/Git.png' },
    { name: 'GitHub', iconSrc: '/icons/GitHub.png' },
    { name: 'GitLab', iconSrc: '/icons/GitLab.png' },
    { name: 'Postman', iconSrc: '/icons/postman.png' },
    { name: 'Azure', iconSrc: '/icons/Azure.png' },
    { name: 'VPS', iconSrc: '/icons/technology/vps.svg' },
    { name: 'Linux', iconSrc: '/icons/technology/linux.png' },
  ] },
  { title: 'Backend', accent: 'border-green-400', skills: [
    { name: 'Express.js', iconSrc: '/icons/technology/express.svg' },
    { name: 'Go Fiber', iconSrc: '/icons/Go.png' },
    { name: 'FastAPI', iconSrc: '/icons/technology/fastapi.svg' },
    { name: 'Rust', iconSrc: '/icons/technology/rust.svg' },
  ] },
  { title: 'Databases', accent: 'border-indigo-400', skills: [
    { name: 'PostgreSQL', iconSrc: '/icons/PostgresSQL.png' },
    { name: 'MySQL', iconSrc: '/icons/MySQL.png' },
    { name: 'MongoDB', iconSrc: '/icons/MongoDB.png' },
  ] },
  { title: 'Frontend', accent: 'border-cyan-400', skills: [
    { name: 'Vue.js', iconSrc: '/icons/Vue.png' }, { name: 'Nuxt.js', iconSrc: '/icons/technology/nuxtjs.svg' },
    { name: 'Astro', iconSrc: '/icons/technology/astro.svg' }, { name: 'Next.js', iconSrc: '/icons/next.svg' },
    { name: 'React.js', iconSrc: '/icons/React.png' },
  ] },
  { title: 'Machine Learning', accent: 'border-lime-400', skills: [
    { name: 'Scikit-Learn', iconSrc: '/icons/technology/scikitlearn.svg' },
    { name: 'Pandas', iconSrc: '/icons/technology/pandas.svg' },
    { name: 'NumPy', iconSrc: '/icons/technology/numpy.svg' },
  ] },
  { title: 'Mobile', accent: 'border-sky-400', skills: [
    { name: 'Flutter', iconSrc: '/icons/Flutter.png' },
  ] },
];

export const skillNames = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));

export const workExperience = [
  {
    id: 'viskal', company: 'PT Viskal Karunia Saputra', location: 'Bali',
    period: 'Jun 2026 – Present', startDate: '2026-06', current: true,
    website: 'https://viskal.id', logo: '/images/companies/viskal.png',
    technologies: ['Vue.js', 'Astro', 'Express.js', 'Docker', 'VPS'],
    roles: [
      { title: 'Full-Stack Web Developer', type: 'Part-time', highlights: [
        'Scale, maintain, and extend 10x (task tracker), CRM, Ledger, and HRIS, an internal suite used by 63 staff.',
        'Manage production deployments, server configuration, and monitoring on VPS infrastructure using Docker.',
      ] },
      { title: 'Full-Stack Web Developer', type: 'Internship', highlights: [
        'Initiated and built four internal web applications with Vue.js, Astro, and Express.js, replacing spreadsheet-based processes.',
        'Integrated RESTful APIs and handled the initial VPS deployments.',
      ] },
    ],
  },
  {
    id: 'pley', company: 'PT Pley Nusantara Kreatif', location: 'Bali',
    period: 'May 2026 – Present', startDate: '2026-05', current: true,
    website: 'https://letspley.id', logo: '/images/companies/pley.png',
    technologies: ['Flutter', 'Vue.js', 'Astro', 'Go', 'REST API', 'VPS'],
    roles: [
      { title: 'Mobile and Full-Stack Developer', type: 'Freelance', highlights: [
        'Develop HOMI for daycare management and PLEY for children’s class booking in Flutter, including booking, scheduling, payments, and notifications.',
        'Build admin dashboards and companion web platforms with Vue.js and Astro.',
        'Develop RESTful backends in Go and manage VPS deployments.',
      ] },
    ],
  },
  {
    id: 'jinom', company: 'PT Jinom Network Indonesia', location: 'Bali',
    period: 'Feb – May 2026', startDate: '2026-02', endDate: '2026-05', current: false,
    website: 'https://jinom.net', logo: '/images/companies/jinom.png',
    technologies: ['Laravel', 'Flutter', 'Go Fiber'],
    roles: [
      { title: 'Fullstack Web Developer', type: 'Internship', highlights: [
        'Maintained and optimized the Configuration modules of USDM, an internal Laravel system.',
        'Implemented frontend and backend input validation using regular expressions, case-insensitive checks, and unique constraints to prevent duplicate data and reduce injection risks.',
        'Contributed to Jinom Cake, a network latency mobile app built with Flutter and Go Fiber.',
      ] },
    ],
  },
];

export const publication = {
  title: 'Smart Campus Assistant: A Retrieval-Augmented Generation (RAG) Based Chatbot System with Hybrid Search for Campus Academic Guideline Information Retrieval',
  venue: '2026 International Conference on Data Science and Its Applications (ICoDSA) · IEEE',
  period: 'Nov 2026', role: 'Co-Author', doi: '10.1109/ICoDSA71861.2026.11754760',
  url: 'https://doi.org/10.1109/ICoDSA71861.2026.11754760',
  highlights: [
    'Built an end-to-end RAG system with FastAPI, PostgreSQL (pgvector), and a Flutter mobile app with speech-to-text and text-to-speech.',
    'Combined dense retrieval with multilingual-e5-large and cosine similarity, sparse full-text search, Reciprocal Rank Fusion, and Llama 3.3.',
  ],
};

export const organizationExperience = [
  { organization: 'KWU 2025', role: 'Head of Publication, Documentation & Design', period: 'Jul – Sep 2025' },
  { organization: 'Student Association', role: 'Bulletin Division Staff', period: 'Jan – Dec 2025' },
  { organization: 'ITCC 2024', role: 'Publication, Documentation & Design Staff', period: 'Jun – Nov 2024' },
  { organization: 'Sporti 2024', role: 'Publication, Documentation & Design Staff', period: 'Feb – May 2024' },
];

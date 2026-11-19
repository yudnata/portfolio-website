import type { Metadata } from 'next';
import SkillsContent from '@/app/skills/SkillsContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Technical Skills & Tech Stack',
  description:
    'Yudhi Adinata’s resume highlights Vue.js, Express.js, Next.js, Go Fiber, Astro, Laravel, Flutter, Docker and VPS deployments, AI/ML, databases, and design tools.',
  keywords: [
    'Yudhi Adinata skills',
    'Yudnata tech stack',
    'Vue.js developer',
    'Express.js developer',
    'Go Fiber developer',
    'Astro developer',
    'Flutter developer',
    'Docker VPS deployment',
    'AI Engineer skills',
    'mobile app developer Bali',
    'UI/UX design tools',
  ],
  alternates: {
    canonical: `${BASE_URL}/skills`,
  },
  openGraph: {
    title: 'Technical Skills & Tech Stack | Yudhi Adinata',
    description:
      'Web: Vue.js, Express.js, Next.js, Go Fiber, Astro, and Laravel. Mobile: Flutter. DevOps: Docker, Git, and VPS deployments.',
    url: `${BASE_URL}/skills`,
    images: [
      {
        url: '/images/skills.webp',
        width: 1200,
        height: 630,
        alt: 'Technical skills of Yudhi Adinata - Fullstack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Skills & Tech Stack | Yudhi Adinata',
    description:
      'Vue.js, Express.js, Go Fiber, Astro, Flutter, Docker, AI/ML, databases, design tools, and GitHub.',
    images: ['/images/skills.webp'],
    creator: '@yudnata',
  },
};

const skillsJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Skills - Yudhi Adinata',
    url: `${BASE_URL}/skills`,
    mainEntity: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
      knowsAbout: [
        'Vue.js',
        'Express.js',
        'Next.js',
        'Go Fiber',
        'Astro',
        'Laravel',
        'React.js',
        'Node.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Flutter',
        'Python',
        'Scikit-Learn',
        'Pandas',
        'NumPy',
        'Data cleaning',
        'Exploratory data analysis',
        'Supervised learning',
        'Unsupervised learning',
        'Regression',
        'Classification',
        'Clustering',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Git',
        'VPS deployment',
        'Figma',
        'Adobe Photoshop',
        'Adobe Premiere Pro',
        'Canva',
        'CapCut',
        'GitHub',
      ],
      knowsLanguage: [
        { '@type': 'Language', name: 'Indonesian', alternateName: 'id' },
        { '@type': 'Language', name: 'English', alternateName: 'en' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Skills', item: `${BASE_URL}/skills` },
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      {skillsJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SkillsContent />
    </>
  );
}

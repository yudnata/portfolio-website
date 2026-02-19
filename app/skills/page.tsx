import type { Metadata } from 'next';
import SkillsContent from '@/app/skills/SkillsContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Technical Skills & Tech Stack',
  description:
    'Technical skills of Yudhi Adinata — React, Next.js, TypeScript, Node.js, Express, Laravel, PostgreSQL, MongoDB, Docker, Git, Figma, and more. Frontend, Backend, DevOps, and Design expertise.',
  keywords: [
    'Yudhi Adinata skills',
    'Yudnata tech stack',
    'React developer skills',
    'Node.js developer',
    'TypeScript developer',
    'fullstack tech stack',
    'web developer skills Indonesia',
    'Laravel developer Bali',
    'Next.js developer',
  ],
  alternates: {
    canonical: `${BASE_URL}/skills`,
  },
  openGraph: {
    title: 'Technical Skills & Tech Stack | Yudhi Adinata',
    description:
      'Frontend: React, Next.js, TypeScript, Vue, Tailwind. Backend: Node.js, Express, Laravel, Python. DevOps: Docker, Git. Design: Figma, Photoshop.',
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
      'React, Next.js, TypeScript, Node.js, Laravel, PostgreSQL, Docker, Figma, and more.',
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
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Vue.js',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'WordPress',
        'Node.js',
        'Express.js',
        'Laravel',
        'Python',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Git',
        'Figma',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere Pro',
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

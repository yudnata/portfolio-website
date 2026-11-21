import { skillNames } from '@/data/resume';
import type { Metadata } from 'next';
import SkillsContent from '@/app/skills/SkillsContent';

import { BASE_URL, SOCIAL_IMAGE_SIZE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Technical Skills & Tech Stack',
  description:
    'Explore Yudhi Adinata’s skills in web and mobile development, Rust, databases, DevOps, machine learning, and design, with tools from his latest resume.',
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
      'Vue.js, Nuxt.js, Astro, Next.js, React, Express.js, Go Fiber, FastAPI, Rust, Flutter, Docker, Linux, and machine learning.',
    url: `${BASE_URL}/skills`,
    images: [
      {
        url: '/images/skills.webp',
        ...SOCIAL_IMAGE_SIZE,
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
      knowsAbout: skillNames,
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

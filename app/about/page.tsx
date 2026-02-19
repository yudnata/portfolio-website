import type { Metadata } from 'next';
import AboutContent from '@/app/about/AboutContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'About Me — Fullstack Developer from Bali',
  description:
    'About Gede Yudhi Adinata Putra Kurniawan (Yudnata) — Fullstack Developer & IT student at Udayana University, Bali. Specialized in React, Node.js, TypeScript, and modern web development. GPA 3.77.',
  keywords: [
    'Yudhi Adinata about',
    'Yudnata developer',
    'Fullstack Developer Bali',
    'web developer Indonesia',
    'Gede Yudhi Adinata Putra Kurniawan',
    'Udayana University developer',
    'React developer Bali',
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Yudhi Adinata — Fullstack Developer from Bali',
    description:
      'Gede Yudhi Adinata Putra Kurniawan — IT student at Udayana University building modern web applications with React, Node.js, and TypeScript.',
    url: `${BASE_URL}/about`,
    images: [
      {
        url: '/images/about-me.webp',
        width: 1200,
        height: 630,
        alt: 'About Yudhi Adinata - Fullstack Developer',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Yudhi Adinata — Fullstack Developer from Bali',
    description:
      'Fullstack Developer & IT student at Udayana University. Expert in React, Node.js, and modern web tech.',
    images: ['/images/about-me.webp'],
    creator: '@yudnata',
  },
};

const aboutJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Yudhi Adinata',
    url: `${BASE_URL}/about`,
    description:
      'About Gede Yudhi Adinata Putra Kurniawan — Fullstack Developer from Denpasar, Bali.',
    mainEntity: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
      alternateName: ['Yudhi Adinata', 'Yudnata'],
      jobTitle: 'Fullstack Developer',
      description:
        'Information Technology student at Udayana University with GPA 3.77. Passionate about building modern, user-centered web applications.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denpasar',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Udayana University',
      },
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Docker',
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {aboutJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AboutContent />
    </>
  );
}

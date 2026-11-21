import { skillNames } from '@/data/resume';
import type { Metadata } from 'next';
import AboutContent from '@/app/about/AboutContent';

import { BASE_URL, SOCIAL_IMAGE_SIZE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Me — Full-Stack & Mobile Developer from Bali',
  description:
    'Meet Yudhi Adinata, a full-stack and mobile developer in Bali, working with Viskal and PLEY while studying Information Technology at Udayana University.',
  keywords: [
    'Yudhi Adinata about',
    'Yudnata developer',
    'Fullstack Developer Bali',
    'Mobile Developer Bali',
    'web developer Indonesia',
    'Gede Yudhi Adinata Putra Kurniawan',
    'Udayana University developer',
    'PT Viskal Karunia Saputra',
    'PT Pley Nusantara Kreatif',
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Yudhi Adinata — Full-Stack & Mobile Developer',
    description:
      'Full-Stack Web Developer at PT Viskal Karunia Saputra, freelance Mobile and Full-Stack Developer at PT Pley Nusantara Kreatif, and Udayana University IT student.',
    url: `${BASE_URL}/about`,
    images: [
      {
        url: '/images/about-me.webp',
        ...SOCIAL_IMAGE_SIZE,
        alt: 'About Yudhi Adinata - Full-Stack and Mobile Developer',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Yudhi Adinata — Full-Stack & Mobile Developer',
    description:
      'Full-Stack Web Developer and Mobile Developer based in Bali; Information Technology student at Udayana University.',
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
      jobTitle: 'Full-Stack Web Developer and Mobile Developer',
      description:
        'Full-Stack Web Developer at PT Viskal Karunia Saputra and freelance Mobile and Full-Stack Developer at PT Pley Nusantara Kreatif; Information Technology student at Udayana University with GPA 3.82/4.00.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denpasar',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
      memberOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Udayana University',
      },
      knowsAbout: skillNames,
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

import type { Metadata } from 'next';
import HomeContent from '@/app/HomeContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: {
    absolute: 'Gede Yudhi Adinata Putra Kurniawan | Fullstack Developer Portfolio',
  },
  description:
    'Portfolio of Gede Yudhi Adinata Putra Kurniawan (Yudnata) — Fullstack Developer & IT student at Udayana University, Bali. Building modern web apps with React, Next.js, Node.js, and TypeScript.',
  keywords: [
    'Gede Yudhi Adinata Putra Kurniawan',
    'Yudhi Adinata',
    'Yudnata',
    'Yudnata portfolio',
    'Fullstack Developer',
    'Web Developer Bali',
    'React Developer Indonesia',
    'Node.js Developer',
    'Pixel Art Portfolio',
    'Udayana University IT student',
    'frontend developer Indonesia',
    'web developer Denpasar',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Gede Yudhi Adinata Putra Kurniawan | Fullstack Developer Portfolio',
    description:
      'Explore the portfolio of Yudhi Adinata — Fullstack Developer from Bali, Indonesia. High-performance web applications with React, Next.js, and Node.js.',
    url: BASE_URL,
    type: 'profile',
    images: [
      {
        url: '/images/home.webp',
        width: 1200,
        height: 630,
        alt: 'Gede Yudhi Adinata Putra Kurniawan - Fullstack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Fullstack Developer',
    description:
      'Fullstack Developer Portfolio — React, Next.js, Node.js, TypeScript. Based in Bali, Indonesia.',
    images: ['/images/home.webp'],
    creator: '@yudnata',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeContent />
    </>
  );
}

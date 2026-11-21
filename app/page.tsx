import type { Metadata } from 'next';
import HomeContent from '@/app/HomeContent';
import { profile } from '@/data/resume';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: {
    absolute: 'Gede Yudhi Adinata Putra Kurniawan | Full-Stack & Mobile Developer Portfolio',
  },
  description: `${profile.name}. ${profile.summary}`,
  keywords: [
    'Gede Yudhi Adinata Putra Kurniawan',
    'Yudhi Adinata',
    'Yudnata',
    'Yudnata portfolio',
    'Full-Stack & Mobile Developer',
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
    title: 'Gede Yudhi Adinata Putra Kurniawan | Full-Stack & Mobile Developer Portfolio',
    description:
      'Explore Yudhi Adinata’s web and mobile apps, work at Viskal, PLEY, and Jinom, and RAG research published at IEEE ICoDSA 2026.',
    url: BASE_URL,
    type: 'profile',
    images: [
      {
        url: '/images/home.webp',
        width: 1200,
        height: 630,
        alt: 'Gede Yudhi Adinata Putra Kurniawan - Full-Stack & Mobile Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Full-Stack & Mobile Developer',
    description:
      'Full-Stack & Mobile Developer — Flutter, Vue.js, Astro, Go, backend systems, and production deployments. Based in Bali, Indonesia.',
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

import type { Metadata } from 'next';
import EducationContent from '@/app/education/EducationContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Education & Academic Background',
  description:
    'Gede Yudhi Adinata Putra Kurniawan studies Information Technology at Udayana University with a GPA of 3.82/4.00 and completed the Coding Camp 2026 AI Engineer cohort and Asah React–Backend cohort.',
  keywords: [
    'Yudhi Adinata education',
    'Udayana University IT student',
    'Information Technology Bali',
    'Coding Camp 2026 DBS Foundation',
    'AI Engineer cohort',
    'Dicoding Accenture Asah Program',
    'Fullstack Developer education',
    'web developer background',
    'Gede Yudhi Adinata Putra Kurniawan',
  ],
  alternates: {
    canonical: `${BASE_URL}/education`,
  },
  openGraph: {
    title: 'Education & Academic Background | Yudhi Adinata',
    description:
      'Information Technology student at Udayana University (GPA 3.82/4.00), with AI Engineer and React–Backend cohort experience in 2025–2026.',
    url: `${BASE_URL}/education`,
    images: [
      {
        url: '/images/education.webp',
        width: 1200,
        height: 630,
        alt: 'Education background of Yudhi Adinata - Udayana University',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education & Academic Background | Yudhi Adinata',
    description:
      'Udayana University IT student with a 3.82/4.00 GPA, Coding Camp 2026 AI Engineer cohort, and Asah React–Backend cohort.',
    images: ['/images/education.webp'],
    creator: '@yudnata',
  },
};

// JSON-LD Structured Data — ini yang bikin Google tampilkan rich result
const educationJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Education - Yudhi Adinata',
    url: `${BASE_URL}/education`,
    mainEntity: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
      description:
        'Information Technology student at Udayana University with a GPA of 3.82/4.00.',
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Udayana University',
          url: 'https://www.unud.ac.id',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Denpasar',
            addressRegion: 'Bali',
            addressCountry: 'ID',
          },
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Coding Camp 2026 Powered by DBS Foundation',
          description: 'AI Engineer Cohort, Jan 2026 – Jun 2026',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Asah Program led by Dicoding and Accenture',
          description: 'React – Backend Cohort, Aug 2025 – Feb 2026',
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Education',
        item: `${BASE_URL}/education`,
      },
    ],
  },
];

export default function EducationPage() {
  return (
    <>
      {educationJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <EducationContent />
    </>
  );
}

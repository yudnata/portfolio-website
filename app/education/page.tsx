import type { Metadata } from 'next';
import { profile, publication } from '@/data/resume';
import EducationContent from '@/app/education/EducationContent';

import { BASE_URL, SOCIAL_IMAGE_SIZE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Education, Publications & Organizations',
  description:
    'Yudhi Adinata’s education at Udayana University (GPA 3.82/4.00), Coding Camp and Asah cohorts, IEEE ICoDSA publication, and organization experience.',
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
    title: 'Education, Publications & Organizations | Yudhi Adinata',
    description:
      'Udayana University IT student (GPA 3.82/4.00), AI Engineer and React–Backend cohorts, IEEE ICoDSA publication, and organization experience.',
    url: `${BASE_URL}/education`,
    images: [
      {
        url: '/images/education.webp',
        ...SOCIAL_IMAGE_SIZE,
        alt: 'Education background of Yudhi Adinata - Udayana University',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education, Publications & Organizations | Yudhi Adinata',
    description:
      'Education, IEEE ICoDSA research publication, and organization experience of Yudhi Adinata, an Information Technology student at Udayana University.',
    images: ['/images/education.webp'],
    creator: '@yudnata',
  },
};

const educationJsonLd = [
  {
    '@context': 'https://schema.org', '@type': 'ScholarlyArticle',
    name: publication.title, url: publication.url, sameAs: publication.url,
    identifier: publication.doi, datePublished: '2026-11',
    author: { '@type': 'Person', name: profile.name },
    publisher: { '@type': 'Organization', name: 'IEEE' },
    isPartOf: { '@type': 'PublicationVolume', name: publication.venue },
  },

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
      memberOf: {
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
      alumniOf: [
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

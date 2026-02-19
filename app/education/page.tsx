import type { Metadata } from 'next';
import EducationContent from '@/app/education/EducationContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Education & Academic Background',
  description:
    'Education background of Gede Yudhi Adinata Putra Kurniawan — Information Technology student at Udayana University, Bali with 3.77 GPA. Fullstack Developer training at Dicoding & Accenture Asah Program.',
  keywords: [
    'Yudhi Adinata education',
    'Udayana University IT student',
    'Information Technology Bali',
    'Dicoding Asah Program',
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
      'IT student at Udayana University, Bali (GPA 3.82). Fullstack Developer training through Dicoding & Accenture Asah Program. View academic achievements and certifications.',
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
      'IT student at Udayana University (GPA 3.77). Fullstack Developer at Dicoding & Accenture.',
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
          name: 'Dicoding & Accenture - Asah Program',
          description: 'Intensive Fullstack Development Program (React & Node.js)',
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Bachelor of Information Technology',
          credentialCategory: 'degree',
          educationalLevel: 'Bachelor',
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: 'Udayana University',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'React & Backend Cohort - Asah Program',
          credentialCategory: 'certificate',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Dicoding & Accenture',
          },
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

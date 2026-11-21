import type { Metadata } from 'next';
import ExperienceContent from './ExperienceContent';
import { profile, workExperience } from '@/data/resume';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';
const description = 'Yudhi Adinata’s full-stack and mobile development experience at Viskal, PLEY, and Jinom.';

export const metadata: Metadata = {
  title: 'Work Experience',
  description,
  alternates: { canonical: `${BASE_URL}/experience` },
  openGraph: {
    title: 'Work Experience | Yudhi Adinata', description,
    url: `${BASE_URL}/experience`, type: 'website',
    images: [{ url: '/images/education.webp', width: 1200, height: 630, alt: 'Yudhi Adinata’s work experience' }],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'ProfilePage',
    name: 'Experience - Yudhi Adinata', url: `${BASE_URL}/experience`,
    mainEntity: {
      '@type': 'Person', name: profile.name, jobTitle: profile.title,
      worksFor: workExperience.filter((experience) => experience.current).map((experience) => ({
        '@type': 'Organization', name: experience.company, url: experience.website,
      })),
    },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Experience', item: `${BASE_URL}/experience` },
    ],
  },
];

export default function ExperiencePage() {
  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <ExperienceContent />
  </>;
}

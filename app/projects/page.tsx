import type { Metadata } from 'next';
import ProjectsContent from '@/app/projects/ProjectsContent';
import { projects } from '@/data';

import { BASE_URL, SOCIAL_IMAGE_SIZE } from '@/lib/site';
const projectDescription = `Explore ${projects.length} web, mobile, and desktop projects by Yudhi Adinata, including Notvas, Yudrive, Smart Campus Assistant, GIS Budaya Bali, and TravelHub.`;

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description: projectDescription,
  keywords: [
    'Yudhi Adinata projects',
    'Yudnata portfolio',
    'web development projects',
    'React projects Indonesia',
    'fullstack projects',
    'LeadGo CRM',
    'Cogika chat app',
    'CoreTI e-commerce',
    'Next.js portfolio',
    'NATSTORE Midtrans',
    'Advanced Information Retrieval system',
    'Python IR system',
    'Notvas desktop app',
    'Yudrive photo library',
    'Smart Campus Assistant RAG',
    'GIS Budaya Bali',
    'TravelHub accommodation marketplace',
  ],
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: 'Projects & Portfolio | Yudhi Adinata',
    description: projectDescription,
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: '/images/projects.webp',
        ...SOCIAL_IMAGE_SIZE,
        alt: 'Web, mobile, and desktop projects by Yudhi Adinata',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Portfolio | Yudhi Adinata',
    description: projectDescription,
    images: ['/images/projects.webp'],
    creator: '@yudnata',
  },
};

const projectsJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects - Yudhi Adinata',
    url: `${BASE_URL}/projects`,
    description: projectDescription,
    author: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.subtitle ? `${project.title} - ${project.subtitle}` : project.title,
        description: project.description,
        url: project.githubUrl ?? project.liveUrl ?? `${BASE_URL}/projects`,
        image: project.image ? `${BASE_URL}${project.image}` : undefined,
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {projectsJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProjectsContent />
    </>
  );
}

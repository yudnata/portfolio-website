import type { Metadata } from 'next';
import ProjectsContent from '@/app/projects/ProjectsContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description:
    'Web development projects by Yudhi Adinata — LeadGo (CRM with ML), Cogika (real-time chat), CoreTI (e-commerce), LetMeCook (Android), Earth3D (Three.js), and more. Built with React, Node.js, TypeScript.',
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
  ],
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: 'Projects & Portfolio | Yudhi Adinata',
    description:
      'Explore 7+ web development projects: CRM with ML, real-time chat, e-commerce, 3D visualization, and more. Built with React, Node.js, TypeScript.',
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: '/images/projects.webp',
        width: 1200,
        height: 630,
        alt: 'Web development projects by Yudhi Adinata',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Portfolio | Yudhi Adinata',
    description:
      '7+ projects: CRM, real-time chat, e-commerce, 3D visualization. React, Node.js, TypeScript.',
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
    description: 'Portfolio of web development projects by Gede Yudhi Adinata Putra Kurniawan.',
    author: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'LeadGo — Predictive Lead Scoring Portal',
          description: 'Full-stack CRM microservices with ML-based lead scoring, RBAC, and analytics dashboard.',
          url: 'https://github.com/yudnata/predictive-lead-scoring-portal',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Cogika — Real-time Chat Application',
          description: 'Modern messaging platform with WebSocket, private/group chats, and friend system.',
          url: 'https://github.com/yudnata/cogika',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CoreTI — E-Commerce Platform',
          description: 'Fullstack e-commerce with Admin Dashboard, inventory tracking, and order management.',
          url: 'https://github.com/yudnata/CoreTI',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'LetMeCook — Recipe Android App',
          description: 'Native Android app with Kotlin, Clean MVVM, Lottie animations, and offline persistence.',
          url: 'https://github.com/yudnata/LetMeCook',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Earth3D — Interactive 3D Earth Visualization',
          description: 'Immersive 3D visualization with React, Three.js, and React Three Fiber.',
          url: 'https://github.com/yudnata/imersif-globe-3d',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'SentimentAPP — Sentiment Analysis',
          description: 'Sentiment analysis with React, Flask, and Naive Bayes for Indonesian product reviews.',
          url: 'https://github.com/yudnata/sentiment-analysis-app',
        },
      ],
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

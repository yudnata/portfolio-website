import type { Metadata } from 'next';
import ProjectsContent from '@/app/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects. From React applications to full-stack solutions, discover the digital experiences I\'ve crafted.',
  openGraph: {
    title: 'Projects | Yudnata Portfolio',
    description: 'Explore my portfolio of web development projects and digital experiences.',
    images: ['/images/projects.webp'],
  },
  twitter: {
    title: 'Projects | Yudnata Portfolio',
    description: 'Explore my portfolio of web development projects',
    images: ['/images/projects.webp'],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

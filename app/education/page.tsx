import type { Metadata } from 'next';
import EducationContent from '@/app/education/EducationContent';

export const metadata: Metadata = {
  title: 'Education',
  description: 'My educational background and learning journey in web development.',
  openGraph: {
    title: 'Education | Yudnata Portfolio',
    description: 'My educational background and learning journey.',
    images: ['/images/education.webp'],
  },
};

export default function EducationPage() {
  return <EducationContent />;
}

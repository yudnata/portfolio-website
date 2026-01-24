import type { Metadata } from 'next';
import SkillsContent from '@/app/skills/SkillsContent';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Discover my technical skills and expertise in web development.',
  openGraph: {
    title: 'Skills | Yudnata Portfolio',
    description: 'Discover my technical skills and expertise in web development.',
    images: ['/images/skills.webp'],
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}

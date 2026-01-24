import type { Metadata } from 'next';
import AboutContent from '@/app/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Yudnata - A passionate web developer with expertise in modern web technologies. Discover my journey, background, and what drives me to create amazing digital experiences.',
  openGraph: {
    title: 'About Me | Yudnata Portfolio',
    description:
      'Learn more about Yudnata - A passionate web developer with expertise in modern web technologies.',
    images: ['/images/about-me.webp'],
  },
  twitter: {
    title: 'About Me | Yudnata Portfolio',
    description: 'Learn more about Yudnata - A passionate web developer',
    images: ['/images/about-me.webp'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

import type { Metadata, Viewport } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://yudnata-portfolio.vercel.app'),
  title: {
    default: 'Gede Yudhi Adinata Putra Kurniawan | Fullstack Developer Portfolio',
    template: '%s | Yudhi Adinata',
  },
  description:
    'Portfolio of Gede Yudhi Adinata Putra Kurniawan (Yudhi Adinata), a passionate Fullstack Developer and Information Technology student at Udayana University. Expert in React, Node.js, and Modern Web Development.',
  keywords: [
    'Gede Yudhi Adinata Putra Kurniawan',
    'Yudhi Adinata',
    'Yudnata',
    'Fullstack Developer',
    'Web Developer Bali',
    'Udayana University Student',
    'React Developer Indonesia',
    'Node.js Developer',
    'Frontend Developer',
    'Pixel Art Portfolio',
  ],
  authors: [
    { name: 'Gede Yudhi Adinata Putra Kurniawan', url: 'https://yudnata-portfolio.vercel.app' },
  ],
  creator: 'Gede Yudhi Adinata Putra Kurniawan',
  publisher: 'Gede Yudhi Adinata Putra Kurniawan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    alternateLocale: 'id_ID',
    url: 'https://yudnata-portfolio.vercel.app',
    siteName: 'Yudhi Adinata Portfolio',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Fullstack Developer',
    description:
      'Explore the portfolio of Gede Yudhi Adinata Putra Kurniawan. High-performance web applications, creative pixel art design, and technical expertise.',
    firstName: 'Gede Yudhi',
    lastName: 'Adinata Putra Kurniawan',
    gender: 'male',
    images: [
      {
        url: '/images/home.webp',
        width: 1200,
        height: 630,
        alt: 'Gede Yudhi Adinata Putra Kurniawan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Web Developer',
    description: 'Fullstack Developer Portfolio of Yudhi Adinata based in Bali.',
    images: ['/images/home.webp'],
    creator: '@yudnata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'portfolio',
  verification: {
    google: 'NBZn7-warBf4Q-g7yygdasfbP_V0wqkEYw2c2zocr20',
  },
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#5c6bc0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gede Yudhi Adinata Putra Kurniawan',
  alternateName: ['Yudhi Adinata', 'Yudnata'],
  url: 'https://yudnata-portfolio.vercel.app',
  image: 'https://yudnata-portfolio.vercel.app/images/home.webp',
  sameAs: [
    'https://github.com/yudnata',
    'https://linkedin.com/in/yudnata',
    'https://instagram.com/yudnata',
  ],
  jobTitle: 'Fullstack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Udayana University',
  },
  description:
    'Passionate Fullstack Developer building modern web applications with React and Node.js.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denpasar',
    addressRegion: 'Bali',
    addressCountry: 'Indonesia',
  },
  knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design'],
};

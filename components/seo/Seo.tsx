import type { Metadata, Viewport } from 'next';
import { profile, skillNames, workExperience } from '@/data/resume';
import { navItems } from '@/data/navigation';
import { BASE_URL, SITE_DESCRIPTION, SOCIAL_IMAGE_SIZE } from '@/lib/site';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Gede Yudhi Adinata Putra Kurniawan | Full-Stack & Mobile Developer Portfolio',
    template: '%s | Yudhi Adinata',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Gede Yudhi Adinata Putra Kurniawan',
    'Yudhi Adinata',
    'Yudnata',
    'Full-Stack & Mobile Developer',
    'Web Developer Bali',
    'Udayana University Student',
    'React Developer Indonesia',
    'Node.js Developer',
    'Frontend Developer',
    'Pixel Art Portfolio',
  ],
  authors: [
    { name: profile.name, url: BASE_URL },
  ],
  creator: 'Gede Yudhi Adinata Putra Kurniawan',
  publisher: 'Gede Yudhi Adinata Putra Kurniawan',
  alternates: {
    canonical: BASE_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    alternateLocale: 'id_ID',
    url: BASE_URL,
    siteName: 'Yudhi Adinata Portfolio',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Full-Stack & Mobile Developer',
    description:
      'Web and mobile applications, backend systems, production deployments, and RAG research by Yudhi Adinata, an Information Technology student at Udayana University.',
    firstName: 'Gede Yudhi',
    lastName: 'Adinata Putra Kurniawan',
    gender: 'male',
    images: [
      {
        url: '/images/home.webp',
        ...SOCIAL_IMAGE_SIZE,
        alt: 'Gede Yudhi Adinata Putra Kurniawan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gede Yudhi Adinata Putra Kurniawan | Web Developer',
    description: 'Full-Stack & Mobile Developer Portfolio of Yudhi Adinata based in Bali.',
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
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon/pixel-head-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/pixel-head-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/pixel-head-48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
  url: profile.website,
  image: `${BASE_URL}/assets/me.png`,
  email: profile.email,
  telephone: profile.phone,
  sameAs: [
    'https://github.com/yudnata',
    'https://linkedin.com/in/yudnata',
    'https://instagram.com/yudnata',
  ],
  jobTitle: 'Full-Stack & Mobile Developer',
  worksFor: workExperience.filter((experience) => experience.current).map((experience) => ({
    '@type': 'Organization', name: experience.company, url: experience.website,
  })),
  memberOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Udayana University',
  },
  description: profile.summary,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denpasar',
    addressRegion: 'Bali',
    addressCountry: 'Indonesia',
  },
  knowsAbout: skillNames,
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yudhi Adinata Portfolio',
  alternateName: 'Yudnata Portfolio',
  url: BASE_URL,
  description:
    'Portfolio website of Gede Yudhi Adinata Putra Kurniawan — Full-Stack & Mobile Developer from Bali, Indonesia.',
  author: {
    '@type': 'Person',
    name: 'Gede Yudhi Adinata Putra Kurniawan',
  },
};

export const navigationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: navItems.map((item) => item.label),
  url: navItems.map((item) => new URL(item.href, BASE_URL).href),
};

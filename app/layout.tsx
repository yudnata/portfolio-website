import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

// SEO Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://yudnata.dev'),
  title: {
    default: 'Yudnata | Pixel Art Portfolio - Web Developer',
    template: '%s | Yudnata Portfolio'
  },
  description: 'Welcome to Yudnata\'s pixel art portfolio. A passionate web developer specializing in modern web technologies, creating beautiful and functional digital experiences.',
  keywords: [
    'web developer',
    'frontend developer',
    'pixel art portfolio',
    'React developer',
    'Next.js developer',
    'TypeScript',
    'JavaScript',
    'portfolio',
    'Yudnata',
    'Indonesia developer'
  ],
  authors: [{ name: 'Yudnata', url: 'https://yudnata.dev' }],
  creator: 'Yudnata',
  publisher: 'Yudnata',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'id_ID',
    url: 'https://yudnata.dev',
    siteName: 'Yudnata Portfolio',
    title: 'Yudnata | Pixel Art Portfolio - Web Developer',
    description: 'Explore my pixel art themed portfolio showcasing web development projects, skills, and experiences.',
    images: [
      {
        url: '/images/home.webp',
        width: 1200,
        height: 630,
        alt: 'Yudnata Portfolio Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yudnata | Pixel Art Portfolio',
    description: 'A pixel art themed portfolio by a passionate web developer',
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#5c6bc0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yudnata',
  url: 'https://yudnata.dev',
  image: 'https://yudnata.dev/images/home.webp',
  sameAs: [
    'https://github.com/yudnata',
    'https://linkedin.com/in/yudnata',
    'https://twitter.com/yudnata',
  ],
  jobTitle: 'Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description: 'A passionate web developer specializing in modern web technologies',
  knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'UI/UX Design'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-4 py-2 bg-primary text-white font-pixel"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

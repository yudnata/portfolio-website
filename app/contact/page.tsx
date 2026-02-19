import type { Metadata } from 'next';
import ContactContent from '@/app/contact/ContactContent';

const BASE_URL = 'https://yudnata-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Contact & Hire Me',
  description:
    'Contact Gede Yudhi Adinata Putra Kurniawan (Yudnata) — Fullstack Developer available for freelance projects, collaborations, and job opportunities. Based in Denpasar, Bali, Indonesia.',
  keywords: [
    'contact Yudhi Adinata',
    'hire Yudnata',
    'freelance web developer Bali',
    'hire fullstack developer Indonesia',
    'web developer for hire',
    'Gede Yudhi Adinata Putra Kurniawan contact',
    'React developer hire',
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact & Hire Me | Yudhi Adinata',
    description:
      'Get in touch with Yudhi Adinata for freelance projects, collaborations, and opportunities. Fullstack Developer based in Bali, Indonesia.',
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: '/images/contact.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Yudhi Adinata - Fullstack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Hire Me | Yudhi Adinata',
    description:
      'Freelance Fullstack Developer available for projects. Based in Bali, Indonesia.',
    images: ['/images/contact.webp'],
    creator: '@yudnata',
  },
};

const contactJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Yudhi Adinata',
    url: `${BASE_URL}/contact`,
    description: 'Contact page of Gede Yudhi Adinata Putra Kurniawan — Fullstack Developer.',
    mainEntity: {
      '@type': 'Person',
      name: 'Gede Yudhi Adinata Putra Kurniawan',
      email: 'yudhinata04@gmail.com',
      telephone: '+62-896-6976-0121',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denpasar',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
      sameAs: [
        'https://github.com/yudnata',
        'https://linkedin.com/in/yudnata',
        'https://instagram.com/yudnata',
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {contactJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ContactContent />
    </>
  );
}

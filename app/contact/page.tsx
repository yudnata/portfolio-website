import type { Metadata } from 'next';
import ContactContent from '@/app/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Yudnata. Let\'s discuss projects and opportunities.',
  openGraph: {
    title: 'Contact | Yudnata Portfolio',
    description: 'Get in touch with Yudnata for projects and collaborations.',
    images: ['/images/contact.webp'],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

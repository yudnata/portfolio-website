import PageBackground from '@/components/ui/PageBackground';
import Image from 'next/image';
import { profile } from '@/data/resume';
import background from '@/public/images/contact.webp';

const socialLinks = [
  {
    name: 'GitHub',
    username: '@yudnata',
    link: 'https://github.com/yudnata',
    logo: '/icons/GitHub.png',
  },
  {
    name: 'LinkedIn',
    username: 'yudnata',
    link: 'https://linkedin.com/in/yudnata',
    logo: null,
  },
  {
    name: 'Instagram',
    username: '@yudnata',
    link: 'https://instagram.com/yudnata',
    logo: '/icons/instagram.png',
  },
];

const contactInfo = [
  {
    label: 'Email',
    value: profile.email,
    link: `mailto:${profile.email}`,
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: profile.phone,
    link: 'tel:+6289669760121',
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: profile.location,
    link: null,
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function ContactContent() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc={background}
        alt="Contact page background"
        overlayOpacity={0.6}
      />

      <main id="main-content" className="pt-25 pb-20 px-4 md:px-12 min-h-screen flex items-center justify-center">
        <section className="w-full max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start animate-card-fade">
            <div>
              <h1 className="font-pixel text-2xl md:text-3xl font-bold mb-4 text-white text-shadow-pixel mt-10">
                Get In Touch
              </h1>
              <p className="font-retro text-gray-300 text-lg mb-8 leading-relaxed">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>

              <ul
                className="flex gap-4"
                aria-label="Social media links"
              >
                {socialLinks.map((social) => (
                  <li
                    key={social.name}
                    className="list-none"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-black/40 border border-white/5 group-hover:bg-black/60 group-hover:border-white/10 transition-colors shadow-lg">
                        {social.logo ? (
                          <div className="relative w-8 h-8">
                            <Image
                              src={social.logo}
                              alt=""
                              fill
                              sizes="32px"
                              className={`object-contain drop-shadow-md ${social.name === 'GitHub' ? 'brightness-0 invert' : ''}`}
                            />
                          </div>
                        ) : (
                          <span className="font-bold text-white text-xl">in</span>
                        )}
                      </div>
                      <div className="text-center group-hover:-translate-y-1 transition-transform">
                        <p className="font-pixel text-[0.6rem] text-white tracking-wide">
                          {social.name}
                        </p>
                        <p className="font-retro text-xs text-gray-500">{social.username}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic space-y-2">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl p-6 flex items-start gap-5 bg-black/40 border border-white/5 hover:bg-black/60 hover:border-white/10 transition-colors shadow-lg"
                >
                  <div className="mt-1 p-2 bg-white/10 rounded-lg">{info.icon}</div>
                  <div>
                    <p className="font-pixel text-[0.6rem] text-gray-500 mb-1 uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-retro text-lg text-white font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-retro text-lg text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </div>
        </section>
      </main>
    </div>
  );
}

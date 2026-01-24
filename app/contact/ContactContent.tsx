'use client';

import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/layout';
import { PageBackground, PixelButton } from '@/components/ui';
import { contactLinks } from '@/data';

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Safety ref
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (isMounted.current) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      if (isMounted.current) {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen">
      <PageBackground
        imageSrc="/images/contact.webp"
        alt="Contact page background"
        overlayOpacity={0.45}
      />

      <Header />

      <main className="pt-[100px] pb-20 px-4 md:px-12 min-h-screen">
        <article className="max-w-5xl mx-auto">
          <header className="text-center mb-10 animate-[translate-y-from-n20_0.6s_ease-out]">
            <h1 className="font-pixel text-2xl md:text-3xl text-accent-alt text-shadow-pixel">
              ✉️ Contact Me
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Let&apos;s start an adventure together!
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Links */}
            <section className="animate-pixel-fade">
              <h2 className="font-pixel text-xs text-accent mb-6 uppercase tracking-wider">
                🔗 Find Me Online
              </h2>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-[#16213ef2] border-3 border-gray-600 shadow-pixel group no-underline transition-all hover:-translate-y-1 hover:border-accent hover:shadow-pixel-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <div>
                      <span className="block font-pixel text-[0.5rem] text-pixel-text-muted mb-1 opacity-70">
                        {link.platform}
                      </span>
                      <span className={`font-retro text-xl ${link.color}`}>{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Form */}
            <section className="animate-pixel-fade delay-200">
              <h2 className="font-pixel text-xs text-accent mb-6 uppercase tracking-wider">
                💬 Send a Message
              </h2>

              {submitted ? (
                <div className="bg-[#16213ef2] border-4 border-green-500 p-8 text-center shadow-pixel animate-pixel-fade">
                  <span className="text-6xl block mb-4">✅</span>
                  <h3 className="font-pixel text-sm text-green-400 mb-4 uppercase">
                    Message Sent!
                  </h3>
                  <p className="font-retro text-xl text-pixel-text-secondary mb-6">
                    Thank you for reaching out! I&apos;ll respond soon.
                  </p>
                  <PixelButton
                    onClick={() => setSubmitted(false)}
                    variant="primary"
                    size="sm"
                  >
                    Send Another
                  </PixelButton>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#16213ef2] border-4 border-primary p-6 shadow-pixel"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-pixel text-[0.5rem] text-pixel-text-muted mb-2 uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-gray-600 p-3 font-retro text-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-pixel text-[0.5rem] text-pixel-text-muted mb-2 uppercase"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-gray-600 p-3 font-retro text-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-700"
                      placeholder="youremail@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block font-pixel text-[0.5rem] text-pixel-text-muted mb-2 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-gray-600 p-3 font-retro text-lg text-white outline-none focus:border-accent transition-colors placeholder:text-gray-700 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <PixelButton
                    type="submit"
                    variant="accent"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    icon="📤"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </PixelButton>
                </form>
              )}
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}

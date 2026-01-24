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
              Contact Me
            </h1>
            <p className="font-retro text-xl md:text-2xl text-pixel-text-muted mt-2">
              Let&apos;s start an adventure together!
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Links */}
            <section className="animate-pixel-fade">
              <h2 className="font-pixel text-xs text-primary mb-6 uppercase tracking-wider">
                Find Me Online
              </h2>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl group no-underline transition-all hover:-translate-y-1 hover:bg-black/80 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform filter drop-shadow-md">
                      {link.icon}
                    </span>
                    <div>
                      <span className="block font-pixel text-[0.5rem] text-gray-400 mb-1 opacity-70 group-hover:text-primary transition-colors">
                        {link.platform}
                      </span>
                      <span className="font-retro text-xl text-white group-hover:text-accent-light transition-colors">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Form */}
            <section className="animate-pixel-fade delay-200">
              <h2 className="font-pixel text-xs text-accent mb-6 uppercase tracking-wider">
                Send a Message
              </h2>

              {submitted ? (
                <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center shadow-lg animate-pixel-fade">
                  <span className="text-6xl block mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                  <h3 className="font-pixel text-sm text-white mb-4 uppercase tracking-widest">
                    Message Sent!
                  </h3>
                  <p className="font-retro text-xl text-gray-300 mb-6">
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
                  className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-pixel text-[0.5rem] text-gray-400 mb-2 uppercase tracking-wider"
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 font-retro text-lg text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-gray-600"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-pixel text-[0.5rem] text-gray-400 mb-2 uppercase tracking-wider"
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 font-retro text-lg text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-gray-600"
                      placeholder="youremail@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block font-pixel text-[0.5rem] text-gray-400 mb-2 uppercase tracking-wider"
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 font-retro text-lg text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-gray-600 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <PixelButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    icon=""
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

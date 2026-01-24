export class SEOUtils {
  static getMetadata(
    title: string, 
    description: string, 
    image: string = '/images/home.webp'
  ) {
    const siteName = 'Yudnata Portfolio';
    const cleanTitle = `${title} | ${siteName}`;
    
    return {
      title: cleanTitle,
      description,
      openGraph: {
        title: cleanTitle,
        description,
        images: [image],
        type: 'website',
        siteName,
      },
      twitter: {
        card: 'summary_large_image',
        title: cleanTitle,
        description,
        images: [image],
      },
    };
  }

  static getJsonLd() {
    return {
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
      description: 'A passionate web developer specializing in modern web technologies',
    };
  }
}

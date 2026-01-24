'use client';

import Image from 'next/image';

interface PageBackgroundProps {
  imageSrc: string;
  alt: string;
  overlayOpacity?: number;
  priority?: boolean;
}

export default function PageBackground({
  imageSrc,
  alt,
  overlayOpacity = 0.3,
  priority = true,
}: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-pixel-bg-dark pointer-events-none">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />
      <div
        className="absolute inset-0 w-full h-full bg-black transition-opacity duration-500"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}

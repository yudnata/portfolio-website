'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-pixel-bg-dark animate-in fade-in duration-200">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin" />
        <p className="font-pixel text-primary text-sm animate-pulse tracking-widest">LOADING...</p>
      </div>
    </div>
  );
}

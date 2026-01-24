'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { DialogSegment } from '@/types';
import { useEffect } from 'react';

interface DialogBoxProps {
  data: DialogSegment;
  onComplete?: () => void;
  showContinueIndicator?: boolean;
}

export default function DialogBox({
  data,
  onComplete,
  showContinueIndicator = true,
}: DialogBoxProps) {
  const { displayedText, isTyping, isComplete, skipTyping } = useTypewriter({
    text: data.text,
    onComplete,
  });

  // Re-trigger typing when text changes
  useEffect(() => {
    // Hook already handles text changes dependency
  }, [data.text]);

  return (
    <section
      className="fixed bottom-0 left-0 right-0 p-4 md:p-8 z-50 min-h-[140px] flex flex-col justify-center cursor-pointer border-t-4 border-primary shadow-[inset_0_4px_0_var(--color-primary-light)] bg-linear-to-b from-pixel-bg-light/95 to-pixel-bg-medium/95"
      onClick={skipTyping}
      role="dialog"
      aria-live="polite"
    >
      {/* Decorative corner */}
      <div className="absolute -top-2 left-5 w-[120px] h-2 bg-primary [clip-path:polygon(0_100%,10px_0,calc(100%-10px)_0,100%_100%)]" />
      
      {/* Speaker Name Tag */}
      {data.speaker && (
        <div className="absolute -top-6 left-10 py-1.5 px-5 bg-linear-to-b from-accent-alt to-[#e6c200] border-3 border-pixel-bg-dark shadow-pixel-sm">
          <span className="font-pixel text-xs text-pixel-bg-dark uppercase block">
            {data.speaker}
          </span>
        </div>
      )}

      {/* Dialog Text */}
      <p className="font-retro text-lg md:text-2xl leading-relaxed text-pixel-text-primary min-h-12 mt-2">
        {displayedText}
        {isTyping && (
          <span className="inline-block w-2.5 h-[1.2em] bg-accent ml-0.5 animate-pulse" />
        )}
      </p>

      {/* Continue Indicator */}
      {showContinueIndicator && isComplete && (
        <div className="absolute bottom-4 right-6 font-pixel text-[0.6rem] text-accent animate-bounce flex items-center gap-2">
          <span>▼</span>
        </div>
      )}

      {/* Click hint */}
      {isTyping && (
        <div className="absolute bottom-4 right-6 font-retro text-sm text-pixel-text-muted opacity-70">
          Click to skip...
        </div>
      )}
    </section>
  );
}

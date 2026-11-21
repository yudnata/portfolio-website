'use client';

import { useEffect, useState } from 'react';
import { introDialogs } from '@/data';

export default function IntroDialogue() {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const dialog = introDialogs[dialogIndex];
  const isTyping = displayedText.length < dialog.text.length;

  useEffect(() => {
    if (!isTyping) return;
    const timeout = setTimeout(() => {
      setDisplayedText(dialog.text.slice(0, displayedText.length + 1));
    }, 30);
    return () => clearTimeout(timeout);
  }, [dialog.text, displayedText.length, isTyping]);

  function nextDialog() {
    if (isTyping) setDisplayedText(dialog.text);
    else {
      setDialogIndex((index) => (index + 1) % introDialogs.length);
      setDisplayedText('');
    }
  }

  return (
    <button type="button" onClick={nextDialog}
      className="relative w-full bg-black/85 backdrop-blur-md rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-black/95 transition-all shadow-2xl border border-white/10 z-20 text-left"
      aria-label={`${dialog.speaker}: ${dialog.text}. ${isTyping ? 'Show full message' : 'Next message'}`}>
      <span className="block font-pixel text-[0.65rem] text-primary mb-3 uppercase tracking-widest opacity-90" aria-hidden="true">{dialog.speaker}</span>
      <span className="block font-retro text-lg md:text-xl text-white leading-relaxed min-h-24" aria-hidden="true">
        {displayedText}
        {isTyping && <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse align-middle" />}
      </span>
      <span aria-hidden="true" className={`absolute bottom-5 right-8 font-pixel text-[0.5rem] text-gray-500 opacity-50 ${!isTyping ? 'animate-bounce text-primary opacity-100' : ''}`}>▼</span>
    </button>
  );
}

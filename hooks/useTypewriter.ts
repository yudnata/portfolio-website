import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  startDelay?: number;
}

export const useTypewriter = ({
  text,
  speed = 30,
  onComplete,
  startDelay = 0,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const isMounted = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setDisplayedText('');
    setIsComplete(false);

    if (!text) return;

    const startTyping = () => {
      if (!isMounted.current) return;
      setIsTyping(true);
      let currentIndex = 0;

      const typeNextChar = () => {
        if (!isMounted.current) return;

        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          if (onCompleteRef.current) {
            setTimeout(() => onCompleteRef.current?.(), 0);
          }
        }
      };

      typeNextChar();
    };

    if (startDelay > 0) {
      timeoutRef.current = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, startDelay]);

  const skipTyping = useCallback(() => {
    if (!isMounted.current) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setDisplayedText(text);
    setIsTyping(false);
    setIsComplete(true);
    if (onCompleteRef.current) {
      setTimeout(() => onCompleteRef.current?.(), 0);
    }
  }, [text]);

  return { displayedText, isTyping, isComplete, skipTyping };
};

'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'accent' | 'gold' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      isLoading = false,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    // Tailwind classes mapping
    const baseClasses = "inline-flex items-center justify-center gap-2 font-pixel tracking-widest uppercase transition-all duration-150 border-3 border-pixel-bg-dark shadow-pixel hover:-translate-y-0.5 hover:shadow-pixel-lg active:translate-y-0.5 active:shadow-pixel-sm disabled:opacity-60 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "bg-white text-black border-2 border-white hover:bg-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.4)]",
      accent: "bg-black/80 text-white border-2 border-white hover:bg-black shadow-[0_0_10px_rgba(255,255,255,0.2)]",
      gold: "bg-gray-300 text-black border-2 border-white hover:bg-white",
      outline: "bg-transparent text-white border-2 border-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]",
    };

    const sizeClasses = {
      sm: "text-[0.5rem] px-3 py-1",
      md: "text-[0.65rem] px-5 py-2",
      lg: "text-[0.8rem] px-8 py-3",
    };

    const widthClass = fullWidth ? "w-full" : "w-auto";
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

    const content = (
      <>
        {isLoading ? (
          <span className="animate-spin">⏳</span>
        ) : icon ? (
          <span aria-hidden="true">{icon}</span>
        ) : null}
        {children}
      </>
    );

    if (href && !props.disabled) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={props.disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

PixelButton.displayName = 'PixelButton';

export default PixelButton;

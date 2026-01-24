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
      primary: "bg-gradient-to-b from-primary-light via-primary to-primary-dark text-white shadow-pixel-inset",
      accent: "bg-gradient-to-b from-accent-light via-accent to-accent-dark text-white shadow-pixel-inset",
      gold: "bg-gradient-to-b from-[#ffe066] via-accent-alt to-[#e6c200] text-pixel-bg-dark shadow-pixel-inset",
      outline: "bg-transparent text-primary-light border-primary hover:bg-primary/10",
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

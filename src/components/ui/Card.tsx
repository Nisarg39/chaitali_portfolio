import React from 'react';

interface CardProps {
  variant?: 'light' | 'dark' | 'accent' | 'gray';
  children: React.ReactNode;
  className?: string;
}

export function Card({ variant = 'light', children, className = '' }: CardProps) {
  const baseStyles = "p-8 md:p-12 rounded-[40px] flex flex-col justify-between";
  
  const variants = {
    light: "bg-white border border-dark text-dark shadow-[0_5px_0_0_#191A23]", 
    dark: "bg-dark text-white",
    accent: "bg-brand text-dark border border-dark shadow-[0_5px_0_0_#191A23]",
    gray: "bg-light text-dark rounded-[40px]" // Gray sections usually don't have borders in this design system
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

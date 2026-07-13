import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2";
  
  const variants = {
    primary: "bg-dark text-white hover:bg-dark/90",
    outline: "bg-transparent border border-dark text-dark hover:bg-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

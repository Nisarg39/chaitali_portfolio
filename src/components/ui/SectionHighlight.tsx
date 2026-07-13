import React from 'react';

interface SectionHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHighlight({ children, className = '' }: SectionHighlightProps) {
  return (
    <span className={`bg-brand text-dark px-2 rounded-md font-medium inline-block ${className}`}>
      {children}
    </span>
  );
}

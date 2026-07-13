import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 max-w-7xl mx-auto px-4 md:px-8">
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image 
            src="/logo-transparent.png" 
            alt="Logo" 
            fill 
            sizes="40px"
            className="object-contain"
          />
        </div>
        <span className="text-2xl font-bold tracking-tight">Dr. Chaitali Shaha</span>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10 font-medium text-lg">
        <Link href="#about" className="hover:text-brand transition-colors">About</Link>
        <Link href="#experience" className="hover:text-brand transition-colors">Experience</Link>
        <Link href="#publications" className="hover:text-brand transition-colors">Publications</Link>
        <Link href="#mentorship" className="hover:text-brand transition-colors">Mentorship</Link>
      </div>

      {/* Action Button */}
      <div className="hidden md:block">
        <Button variant="outline" className="px-6 py-3">Contact</Button>
      </div>
    </nav>
  );
}

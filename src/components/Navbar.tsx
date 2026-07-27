"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-8 max-w-7xl mx-auto px-4 md:px-8">
      {/* Logo Area */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="relative w-10 h-10">
          <Image 
            src="/logo-transparent.png" 
            alt="Logo" 
            fill 
            sizes="40px"
            className="object-contain"
          />
        </div>
        <span className="text-xl lg:text-2xl font-bold tracking-tight">Dr. Chaitali Shaha</span>
      </div>
      
      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium text-sm lg:text-base ml-auto">
        <Link href="#about" className="hover:text-brand transition-colors">About</Link>
        <Link href="#experience" className="hover:text-brand transition-colors">Experience</Link>
        <Link href="#mentorship" className="hover:text-brand transition-colors">Mentorship</Link>
        <Link href="#publications" className="hover:text-brand transition-colors">Publications</Link>
        <Link href="#conferences" className="hover:text-brand transition-colors">Conferences</Link>
        <Link href="#training" className="hover:text-brand transition-colors">Training</Link>
        <Link href="#outreach" className="hover:text-brand transition-colors">Outreach</Link>
      </div>

      {/* Hamburger Icon - Mobile/Tablet */}
      <div className="md:hidden flex items-center ml-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-dark focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 bg-white border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] z-50 md:hidden flex flex-col items-center py-6 gap-4 font-bold text-lg mt-2">
          <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">About</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Experience</Link>
          <Link href="#mentorship" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Mentorship</Link>
          <Link href="#publications" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Publications</Link>
          <Link href="#conferences" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Conferences</Link>
          <Link href="#training" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Training</Link>
          <Link href="#outreach" onClick={() => setIsOpen(false)} className="hover:text-brand transition-colors w-full text-center py-2">Outreach</Link>
        </div>
      )}
    </nav>
  );
}

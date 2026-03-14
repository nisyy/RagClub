'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MENU', href: '/menu' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'EVENT', href: '/event' },
  { label: 'SPACE RENTAL', href: '/space-rental' },
  { label: 'ACCESS', href: '/access' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream">
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          >
            <span
              className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Slide-down nav menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <nav className="bg-cream border-t border-charcoal/10 px-6 lg:px-10 py-6 flex flex-col">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium tracking-widest text-charcoal hover:text-accent transition-colors duration-200 uppercase py-3 ${
                i < navLinks.length - 1 ? 'border-b border-charcoal/10' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MENU', href: '/menu' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'SPACE RENTAL', href: '/space-rental' },
  { label: 'ACCESS', href: '/access' },
  { label: 'NEWS', href: '/news' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // メニュー開閉時のbodyスクロール制御
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* ─── Fixed header bar ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="メニューを開く"
              aria-expanded={isOpen}
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            >
              <span className="block w-6 h-[2px] bg-charcoal" />
              <span className="block w-6 h-[2px] bg-charcoal" />
              <span className="block w-6 h-[2px] bg-charcoal" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Fullscreen overlay menu ─── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="ナビゲーションメニュー"
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center
          transition-opacity duration-500 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(26, 31, 46, 0.75)' }}
      >
        {/* × 閉じるボタン（ハンバーガーと同位置） */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="メニューを閉じる"
          className="absolute top-4 right-6 lg:right-10 w-10 h-10 flex items-center justify-center
            text-white text-4xl font-thin leading-none
            hover:text-[#C41E3A] transition-colors duration-200 z-10"
        >
          ×
        </button>

        {/* ─── Nav + SNS ─── */}
        <div className="relative z-10 flex flex-col items-center">

          {/* ナビゲーションリンク */}
          <nav className="flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-xl sm:text-2xl md:text-[1.75rem]
                  font-bold tracking-[0.25em] uppercase
                  py-3 sm:py-3.5
                  hover:text-[#C41E3A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SNS */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-white/50 text-[10px] font-semibold tracking-[0.45em] uppercase">
              Follow Us
            </p>
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-[#C41E3A] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white hover:text-[#C41E3A] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

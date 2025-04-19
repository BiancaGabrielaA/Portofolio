'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-4 focus:outline-none z-50 fixed top-4 right-4 text-[var(--light-brown)]"
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      {/* Slide-down Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full text-white transition-transform duration-300 z-40 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: 'var(--light-brown)' }}
      >
        <ul className="flex flex-col items-center justify-center gap-6 py-10 text-lg">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/menu" onClick={() => setIsOpen(false)}>Sample Menu</Link></li>
          <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Fixed Social Icons Column on Right */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 text-[var(--light-brown)]">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={36} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={36} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={36} />
        </a>
      </div>
    </>
  );
};

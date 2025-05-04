// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
  { href: '#reviews', label: 'Reviews' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

   const closeMobileMenu = () => {
     setIsMobileMenuOpen(false);
   };

  return (
    // Use specific gray colors, add padding, ensure sticky/z-index
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50 rounded-b-md">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo flex items-center">
          {/* Apply logo gradient and font styles */}
          {/* Ensure 'font-heading' is defined in tailwind.config or load Quincy via CSS */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider uppercase font-heading bg-logo-gradient bg-clip-text text-transparent">
            <Link href="/" onClick={closeMobileMenu}>RB AUTOMOTIVE</Link> {/* Shortened for mobile */}
          </h1>
        </div>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  // Apply original nav link styles
                  className="nav-link hover:text-red-400 transition duration-300 font-semibold text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Style the mobile dropdown
            className="md:hidden absolute top-full left-0 w-full bg-gray-800 bg-opacity-95 backdrop-blur-sm shadow-lg overflow-hidden"
          >
            <nav className="px-4 pt-4 pb-6">
              <ul className="flex flex-col space-y-4 items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="nav-link block w-full text-center py-2 hover:text-red-400 transition duration-300 font-semibold text-base"
                      onClick={closeMobileMenu} // Close menu on link click
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

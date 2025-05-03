// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-md shadow-md z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/">
        <a className="text-xl font-bold text-white">RB Automotive</a>
      </Link>
      <div className="space-x-4">
        <Link href="#services"><a className="text-white">Services</a></Link>
        <Link href="#contact"><a className="text-white">Contact</a></Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

// components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Apply original styles: background, text color, padding, margin, radius
    <footer className="bg-gray-800 text-gray-300 py-6 text-center rounded-t-md mt-4 mx-2 md:mx-4">
      <div className="container mx-auto px-4">
        {/* Apply original text style */}
        <p className="text-sm">
          &copy; {currentYear} RB Automotive Mobile Mechanics. All rights reserved.
        </p>
        {/* Optional: Add other footer links */}
        {/* <div className="mt-2">
          <Link href="/privacy" className="text-xs hover:text-white">Privacy Policy</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

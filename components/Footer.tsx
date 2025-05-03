// components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center rounded-t-md">
      {/* Container for potential margin/padding if needed within the footer */}
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} RB Automotive Mobile Mechanics. All rights reserved.
        </p>
        {/* You could add other links here if needed, like Privacy Policy etc. */}
        {/* <div className="mt-2">
          <Link href="/privacy" className="text-xs hover:text-white">Privacy Policy</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
// components/Hero.tsx
'use client'; // Required for Framer Motion animations

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarPlus, MessageSquareText } from 'lucide-react'; // Import icons

// Animation variants (optional, but cleaner)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 md:py-24 px-4 rounded-md relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-md z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center container mx-auto">
        {/* Header Image/Logo */}
        {/* Make sure to place your logo in the /public folder */}
        <motion.div
          className="header-image-container flex justify-center items-center mb-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="header-image-preview w-full max-w-lg md:max-w-2xl h-[150px] md:h-[250px] rounded-lg overflow-hidden relative">
             {/* Ensure you have your actual logo in /public/rb-logo.png (or similar path) */}
             {/* Adjust width/height based on your actual logo's aspect ratio */}
             {/* Added 'priority' as this is likely the Largest Contentful Paint (LCP) element */}
            <Image
              src="/rb-logo.png" // <<<--- CHANGE TO YOUR ACTUAL LOGO PATH IN /public
              alt="RB Automotive Mobile Mechanics Logo"
              fill // Use fill to cover the container, adjust objectFit as needed
              style={{ objectFit: 'contain' }} // 'contain' preserves aspect ratio within bounds
              priority // Prioritize loading for LCP
              // You might need to add sizes for further optimization if using 'fill'
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white text-shadow-md tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Trusted Mobile Mechanic
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="text-lg md:text-xl mb-10 md:mb-12 text-gray-300 text-shadow-sm max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We bring the expertise to you. Convenient, reliable, and affordable auto repair services, right at your location from Perth to Mandurah.
        </motion.p>

        {/* Buttons */}
        {/* Ensure btn-primary and btn-secondary styles are defined in globals.css or Tailwind config */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 hero-buttons"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Book Appointment Button */}
          <Link href="#contact" className="btn-secondary">
            <CalendarPlus size={20} className="mr-2" /> Book an Appointment
          </Link>

          {/* Text Now Button */}
          <a href="sms:0492992211" className="btn-primary">
            <MessageSquareText size={20} className="mr-2" /> Text Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Define text-shadow utilities in globals.css or tailwind.config.ts if not already done
/* Example for globals.css:
.text-shadow-md {
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
*/

/* Define button styles (btn-primary, btn-secondary) in globals.css or as Tailwind components */
/* Example for globals.css based on your original CSS: */
/*
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-md;
  @apply bg-gradient-to-r from-gray-600 to-gray-800; // Adjusted from original for example
}
.btn-primary:hover {
  @apply from-gray-700 to-gray-900 shadow-lg -translate-y-0.5;
}

.btn-secondary {
   @apply inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-md;
   @apply bg-gradient-to-r from-red-600 to-red-800; // Adjusted from original for example
}
.btn-secondary:hover {
   @apply from-red-700 to-red-900 shadow-lg -translate-y-0.5;
}
*/

export default Hero;
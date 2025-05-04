// components/Hero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarPlus, MessageSquareText } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    // Apply original hero gradient, padding, relative positioning
    <section className="hero bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 md:py-24 px-4 rounded-md relative overflow-hidden mt-4">
      {/* Background Overlay - Kept from original */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-md z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center container mx-auto">
        {/* Header Image/Logo Container - Apply original styles */}
        <motion.div
          className="flex justify-center items-center mb-8 md:mb-12" // Adjusted mb from original
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {/* Image Preview Container - Apply original styles */}
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[150px] md:h-[200px] lg:h-[250px] rounded-lg overflow-hidden relative bg-transparent">
            {/* Ensure logo path is correct, object-fit: contain matches original */}
            <Image
              src="/rb-logo.png" // <<<--- CHANGE TO YOUR ACTUAL LOGO PATH IN /public
              alt="RB Automotive Mobile Mechanics Logo"
              fill
              style={{ objectFit: 'contain' }} // Use contain as per original CSS
              priority
            />
          </div>
        </motion.div>

        {/* Headline - Apply original text size, weight, shadow */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white text-shadow-md tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Trusted Mobile Mechanic
        </motion.h2>

        {/* Sub-headline - Apply original text size, color, shadow */}
        <motion.p
          className="text-lg md:text-xl mb-10 md:mb-12 text-gray-300 text-shadow-sm max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We bring the expertise to you. Convenient, reliable, and affordable auto repair services, right at your location from Perth to Mandurah.
        </motion.p>

        {/* Buttons - Apply original layout and use styled buttons from globals.css */}
        <motion.div
          // Apply original responsive flex layout for buttons
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Use btn-secondary class defined in globals.css */}
          <Link href="#contact" className="btn-secondary w-full md:w-auto">
            <CalendarPlus size={20} className="mr-2" /> Book an Appointment
          </Link>

          {/* Use btn-primary class defined in globals.css */}
          <a href="sms:0492992211" className="btn-primary w-full md:w-auto">
            <MessageSquareText size={20} className="mr-2" /> Text Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

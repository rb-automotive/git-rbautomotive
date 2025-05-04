// components/Hero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarPlus, MessageSquareText } from 'lucide-react';
import React from 'react'; // Keep React import if needed elsewhere

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  // Define the logo path (still verify this one)
  const logoPath = '/images/RB-AUTO-LOGO-1.png'; // <<<--- VERIFY THIS PATH IS CORRECT

  // No heroBackgroundImage variable needed here anymore

  return (
    <section className="hero relative flex items-center justify-center text-white py-20 md:py-28 px-4 -mt-1 min-h-[calc(80vh-80px)] md:min-h-[calc(70vh-80px)]"> {/* Adjust height calculation based on header */}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          // *** FIX: Hardcode the correct background image path directly here ***
          // Replace '/images/steel.jpg' with your actual hero background path if different
          src="/images/.jpg" // <<<--- HARDCODED PATH
          alt="Metallic texture background" // <<<--- UPDATE ALT TEXT if needed
          fill
          style={{ objectFit: 'cover' }}
          quality={85}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAnkBewKPWHQAAAAASUVORK5CYII="
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 text-center container mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Header Image/Logo Container */}
        <motion.div
          className="flex justify-center items-center mb-6 md:mb-8"
          variants={fadeIn}
        >
          <div className="w-full max-w-md md:max-w-lg h-[100px] md:h-[150px] relative">
            {/* Logo Image */}
            <Image
              src={logoPath} // Uses the logoPath variable
              alt="RB Automotive Mobile Mechanics Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 768px) 80vw, 500px"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 text-white text-shadow-md tracking-tight"
          variants={fadeIn}
        >
          Your Trusted Mobile Mechanic
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-gray-200 text-shadow-sm leading-relaxed"
          variants={fadeIn}
        >
          We bring the expertise to you. Convenient, reliable, and affordable auto repair services, right at your location from Perth to Mandurah.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          variants={fadeIn}
        >
          <Link href="#contact" className="btn-secondary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
            <CalendarPlus size={22} className="mr-2.5" /> Book an Appointment
          </Link>
          <a href="sms:0492992211" className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
            <MessageSquareText size={22} className="mr-2.5" /> Text Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


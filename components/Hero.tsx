// components/Hero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarPlus, MessageSquareText } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  // --- Placeholder for background image ---
  // Replace with your actual image path in /public
  const heroBackgroundImage = '/images/hero-background.jpg'; // <<<--- ADD YOUR HERO IMAGE PATH HERE

  return (
    // Add negative margin-top to pull it slightly under the potentially rounded header corners if desired
    // Added min-h-[calc(100vh-YOUR_HEADER_HEIGHT)] to make it closer to full viewport height initially
    // Added padding for content spacing
    <section className="hero relative flex items-center justify-center text-white py-20 md:py-28 px-4 -mt-1 min-h-[calc(80vh-80px)] md:min-h-[calc(70vh-80px)]"> {/* Adjust height calculation based on header */}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          src={heroBackgroundImage}
          alt="Mechanic working on a car engine" // Descriptive alt text
          fill
          style={{ objectFit: 'cover' }} // Cover the entire section
          quality={85} // Adjust quality as needed
          priority // Load this image early
          // Add placeholder for loading/error
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAnkBewKPWHQAAAAASUVORK5CYII=" // Tiny gray blur
          // onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080/333333/555555?text=Hero+Image'; }} // Fallback placeholder
        />
        {/* Gradient Overlay - Darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 text-center container mx-auto max-w-4xl" // Increased max-width
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Stagger children animations
      >
        {/* Header Image/Logo Container - Slightly smaller max-width maybe? */}
        <motion.div
          className="flex justify-center items-center mb-6 md:mb-8"
          variants={fadeIn}
        >
          <div className="w-full max-w-md md:max-w-lg h-[100px] md:h-[150px] relative">
            {/* Ensure logo path is correct, object-fit: contain matches original */}
            <Image
              src="/rb-logo.png" // <<<--- YOUR LOGO PATH
              alt="RB Automotive Mobile Mechanics Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 768px) 80vw, 500px" // Optimize sizes
            />
          </div>
        </motion.div>

        {/* Headline - Apply original text size, weight, shadow */}
        <motion.h2
          // Increased font size, added bold, text shadow
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 text-white text-shadow-md tracking-tight"
          variants={fadeIn}
        >
          Your Trusted Mobile Mechanic
        </motion.h2>

        {/* Sub-headline - Apply original text size, color, shadow */}
        <motion.p
          // Adjusted text size, line height, shadow
          className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-gray-200 text-shadow-sm leading-relaxed"
          variants={fadeIn}
        >
          We bring the expertise to you. Convenient, reliable, and affordable auto repair services, right at your location from Perth to Mandurah.
        </motion.p>

        {/* Buttons - Using styled buttons from globals.css */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          variants={fadeIn}
        >
          {/* Use btn-secondary class */}
          <Link href="#contact" className="btn-secondary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
            <CalendarPlus size={22} className="mr-2.5" /> Book an Appointment
          </Link>

          {/* Use btn-primary class */}
          <a href="sms:0492992211" className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
            <MessageSquareText size={22} className="mr-2.5" /> Text Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


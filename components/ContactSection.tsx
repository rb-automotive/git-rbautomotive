// components/ContactSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Banknote, Zap, CreditCard, PhoneCall, MessageSquareText } from 'lucide-react'; // Changed Map to MapPin for consistency
import Image from 'next/image';
import BookingCalendar from './BookingCalendar';
import ContactForm from './ContactForm'; // Ensure ContactForm uses styled button/inputs

const ContactSection = () => {
  // Define animation variants for consistency
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const logoPath = '/images/RB-AUTO-LOGO-1.png'; // Verify this path

  return (
    // Apply the base .section style
    <motion.section
      id="contact"
      className="section text-left py-16 px-4" // Use .section base style, ensure text-left for content
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
    >
      <div className="container mx-auto">
        {/* Section Title - Centered */}
        <h2 className="text-3xl font-bold mb-12 text-gray-800 tracking-tight text-center">
            Contact Us
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

          {/* Left Column: Details, Buttons, Payment, Form, Logo */}
          <motion.div
             variants={itemVariants} // Apply animation variant
          >
            {/* Get in Touch Sub-section */}
            <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-5 tracking-tight">Get in Touch</h4>
                <p className="text-base text-gray-700 mb-5 leading-relaxed">
                  Call or text us today to schedule your appointment or get a quote!
                </p>
                {/* Contact Details List */}
                <div className="space-y-3 mb-6">
                    <p className="text-base text-red-600 font-semibold flex items-center group">
                        <Phone size={18} className="mr-3 flex-shrink-0 text-gray-500 group-hover:text-red-600 transition-colors"/>
                        <a href="tel:0492992211" className="hover:text-red-700 transition-colors break-all">0492 992 211</a>
                    </p>
                    <p className="text-base text-gray-700 flex items-center group">
                        <Mail size={18} className="mr-3 flex-shrink-0 text-gray-500 group-hover:text-red-600 transition-colors"/>
                        <a href="mailto:Rb_automotive@hotmail.com" className="hover:text-red-600 transition-colors break-all">Rb_automotive@hotmail.com</a>
                    </p>
                     <p className="text-base text-gray-700 flex items-center">
                        <MapPin size={18} className="mr-3 flex-shrink-0 text-gray-500"/>
                        <span>Service Areas: Perth metro areas to Mandurah</span>
                    </p>
                     <p className="text-base text-gray-700 flex items-center">
                        <Clock size={18} className="mr-3 flex-shrink-0 text-gray-500"/>
                        <span>Opening Hours: 24/7 Availability</span>
                    </p>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0492992211" className="btn-secondary w-full sm:w-auto justify-center text-sm px-5 py-2.5"> {/* Adjusted size */}
                    <PhoneCall size={18} className="mr-2" /> Call Us Now
                  </a>
                  <a href="sms:0492992211" className="btn-primary w-full sm:w-auto justify-center text-sm px-5 py-2.5"> {/* Adjusted size */}
                     <MessageSquareText size={18} className="mr-2" /> Text Us
                  </a>
                </div>
            </div>

             {/* Payment Methods Sub-section */}
            <div className="mb-10">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">Payment Methods</h4>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600">
                   <div className="flex items-center text-sm">
                       <Banknote size={18} className="mr-2 text-gray-500"/><span>Cash</span>
                   </div>
                   <div className="flex items-center text-sm">
                       <Zap size={18} className="mr-2 text-gray-500"/><span>Osko/PayID</span>
                   </div>
                   <div className="flex items-center text-sm">
                       <CreditCard size={18} className="mr-2 text-gray-500"/><span>Credit/Debit Card</span>
                   </div>
                </div>
            </div>

            {/* Contact Form Sub-section */}
            <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-5 tracking-tight">Send Us a Message</h4>
                <ContactForm /> {/* Ensure this component's inputs/button are styled */}
            </div>

            {/* Logo Image */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Image
                src={logoPath} // Verify this path
                alt="RB Automotive Logo"
                width={250} // Adjusted size
                height={125} // Adjusted size
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Booking Calendar */}
           <motion.div
             variants={itemVariantsRight} // Apply animation variant
           >
            <h4 className="text-2xl font-semibold text-gray-800 mb-5 tracking-tight">Book Online</h4>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">Use the calendar below to find a time that works for you.</p>
            {/* Ensure BookingCalendar styles container correctly */}
            <BookingCalendar />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

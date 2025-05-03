// components/ContactSection.tsx
'use client'; // Needed for potential animations or if ContactForm is included directly

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Map, Clock, Banknote, Zap, CreditCard, PhoneCall, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import BookingCalendar from './BookingCalendar'; // Import calendar component
import ContactForm from './ContactForm'; // Import form component

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-white to-gray-100 py-16 px-4 rounded-lg shadow-md border border-gray-200 mx-2 md:mx-4 my-6"
    >
      <div className="container mx-auto">
        <motion.h2
           className="text-3xl font-bold mb-12 text-gray-800 tracking-tight text-center"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
            Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Left Column: Details & Form */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-6 tracking-tight">Get in Touch</h4>
            <p className="text-lg text-gray-700 mb-4">
              Call or text us today to schedule your appointment or get a quote!
            </p>
             {/* Contact Details */}
            <div className="space-y-3 mb-8">
                <p className="text-lg text-red-600 font-semibold flex items-center">
                    <Phone size={18} className="mr-3 flex-shrink-0"/>
                    <a href="tel:0492992211" className="hover:text-red-700 break-all">0492 992 211</a>
                </p>
                <p className="text-lg text-gray-700 flex items-center">
                    <Mail size={18} className="mr-3 flex-shrink-0"/>
                    <a href="mailto:Rb_automotive@hotmail.com" className="hover:text-red-600 break-all">Rb_automotive@hotmail.com</a>
                </p>
                 <p className="text-lg text-gray-700 flex items-center">
                    <Map size={18} className="mr-3 flex-shrink-0"/>
                    <span>Service Areas: Perth metro areas to Mandurah</span>
                </p>
                 <p className="text-lg text-gray-700 flex items-center">
                    <Clock size={18} className="mr-3 flex-shrink-0"/>
                    <span>Opening Hours: 24/7 Availability</span>
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:0492992211" className="btn-secondary w-full sm:w-auto justify-center">
                <PhoneCall size={20} className="mr-2" /> Call Us Now
              </a>
              <a href="sms:0492992211" className="btn-primary w-full sm:w-auto justify-center">
                 <MessageSquareText size={20} className="mr-2" /> Text Us
              </a>
            </div>

             {/* --- Payment Methods --- */}
            <div className="mb-10">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">Payment Methods</h4>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 payment-methods">
                   <div className="flex items-center">
                       <Banknote size={20} className="mr-2 text-gray-500"/><span>Cash</span>
                   </div>
                   <div className="flex items-center">
                       <Zap size={20} className="mr-2 text-gray-500"/><span>Osko/PayID</span>
                   </div>
                   <div className="flex items-center">
                       <CreditCard size={20} className="mr-2 text-gray-500"/><span>Credit/Debit Card</span>
                   </div>
                </div>
            </div>

            {/* --- Contact Form (Optional) --- */}
            <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6 tracking-tight">Send Us a Message</h4>
                <ContactForm />
            </div>

            {/* --- Logo Image --- */}
            <div className="mt-8 flex justify-center md:justify-start">
              <Image
                src="/rb-logo.png" // <<<--- CHANGE TO YOUR ACTUAL LOGO PATH
                alt="RB Automotive Logo"
                width={300} // Adjust width as needed
                height={150} // Adjust height based on aspect ratio
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Booking Calendar */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-6 tracking-tight">Book Online</h4>
            <p className="text-gray-700 mb-4 text-sm">Use the calendar below to find a time that works for you.</p>
            <BookingCalendar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
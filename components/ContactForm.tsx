// components/ContactForm.tsx
import React from 'react';
import GlassCard from './GlassCard';

const ContactForm = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-md" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-md" />
          <textarea placeholder="Message" className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-md"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
        </form>
      </GlassCard>
    </div>
  </section>
);

export default ContactForm;

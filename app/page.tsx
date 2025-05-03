// app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <ContactForm />
    </main>
  </>
);

export default HomePage;

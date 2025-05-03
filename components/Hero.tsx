// components/Hero.tsx
import React from 'react';
import GlassCard from './GlassCard';

const Hero = () => (
  <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <GlassCard>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">RB Automotive Mobile Mechanics</h1>
        <p className="text-white text-lg">Reliable. Efficient. Mobile.</p>
      </GlassCard>
    </div>
  </section>
);

export default Hero;

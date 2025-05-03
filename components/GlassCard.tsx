// components/GlassCard.tsx
import React from 'react';

const GlassCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6 shadow-lg">
    {children}
  </div>
);

export default GlassCard;

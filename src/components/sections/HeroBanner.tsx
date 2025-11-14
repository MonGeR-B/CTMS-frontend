import React from 'react';

export default function HeroBanner({
  title = 'WELCOME',
  subtitle = 'Ready to plan your next adventure?',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center shadow-glass">
      <div className="p-10 bg-gradient-to-r from-black/25 to-transparent">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">{title}</h1>
        <p className="mt-3 text-white/90">{subtitle}</p>
      </div>
    </div>
  );
}

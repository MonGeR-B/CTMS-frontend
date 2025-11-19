import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function HeroBanner() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(14,24,40,0.06)]"
      style={{ aspectRatio: '5.17 / 1' }}
    >
      <img
        src={isDark ? "/images/Darkbanner.png" : "/images/DaytimeBanner.png"}
        alt="CTMS Cover"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

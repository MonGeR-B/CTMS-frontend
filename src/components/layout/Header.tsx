// src/components/layout/Header.tsx
import { Bell } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full p-4 transition-all duration-200 ${
        isScrolled
          ? `${
              theme === 'dark'
                ? 'bg-gray-900/20 backdrop-blur-md border-b border-gray-800/10'
                : 'bg-white/20 backdrop-blur-md border-b border-white/10'
            }`
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-mutedText'}`}>
            Welcome back,
          </div>
          <div className={`text-2xl font-medium ${theme === 'dark' ? 'text-white' : ''}`}>
            Baibhab Ghosh
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`relative p-3 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
            aria-label="Notifications"
          >
            <Bell className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : ''}`} />
            <span
              className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-3xl px-1"
              aria-label="2 notifications"
            >
              2
            </span>
          </button>
          <div
            className={`relative p-2 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 flex items-center gap-3 ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF4C39] to-[#FFB573] text-white flex items-center justify-center font-semibold text-xs">
              BG
            </div>
            <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
              Baibhab Ghosh
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

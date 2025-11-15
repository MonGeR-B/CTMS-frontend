// src/components/layout/Footer.tsx
import { Plane } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`mt-auto p-4 md:p-6 lg:p-8 border-t ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4C39] to-[#FFB573] flex items-center justify-center text-white">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'} text-base`}>
                TREBOUND
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-[#A0A0A6]'} font-medium`}>
                Corporate Travel
              </div>
              <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-[#A0A0A6]'}`}>
                © 2025 TREBOUND all rights reserved
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <button className={`text-sm hover:underline text-left ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#787880] hover:text-[#303036]'}`}>
              Privacy Policy
            </button>
            <button className={`text-sm hover:underline text-left ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#787880] hover:text-[#303036]'}`}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      
      {/* Tablet & Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4C39] to-[#FFB573] flex items-center justify-center text-white">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'} text-base`}>
                TREBOUND
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-[#A0A0A6]'} font-medium`}>
                Corporate Travel
              </div>
            </div>
          </div>
          
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-[#A0A0A6]'}`}>
            © 2025 TREBOUND all rights reserved
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className={`text-sm hover:underline ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#787880] hover:text-[#303036]'}`}>
            Privacy Policy
          </button>
          <button className={`text-sm hover:underline ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#787880] hover:text-[#303036]'}`}>
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}
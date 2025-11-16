import React from 'react';
import { Plane } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function HeroBanner({
  title = 'TREBOUND',
  subtitle = 'TRAVEL AND COMPANY MANAGEMENT',
}: {
  title?: string;
  subtitle?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(14,24,40,0.06)] border ${
        isDark
          ? 'border-gray-800 bg-gradient-to-r from-[#02101F] via-[#04335C] to-[#06568C]'
          : 'border-white/60 bg-gradient-to-r from-[#FF6A3D] via-[#FFB573] to-[#FFF3E7]'
      }`}
      style={{ aspectRatio: '5.17 / 1' }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          {/* Simple line art city skyline */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Trees and foliage at base */}
            <div className="absolute bottom-0 left-0 right-0 h-3 flex items-end justify-center">
              <div className="flex items-end gap-1 w-full px-4">
                {/* Tree shapes */}
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/40'}`} />
                <div
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/25' : 'bg-black/35'}`}
                />
                <div
                  className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/35' : 'bg-black/45'}`}
                />
                <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/30'}`} />
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/40'}`} />
                <div
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/25' : 'bg-black/35'}`}
                />
                <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white/40' : 'bg-black/50'}`} />
                <div
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/25' : 'bg-black/35'}`}
                />
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/40'}`} />
                <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/30'}`} />
                <div
                  className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/35' : 'bg-black/45'}`}
                />
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/40'}`} />
              </div>
            </div>

            {/* Building outlines positioned at bottom line */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center px-2">
              <svg className="w-full h-16 lg:h-20" viewBox="0 0 800 80" preserveAspectRatio="none">
                {/* Building silhouettes with window details */}
                <rect
                  x="20"
                  y="30"
                  width="25"
                  height="50"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="22"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '1.0'}
                />
                <rect
                  x="26"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.9'}
                />
                <rect
                  x="30"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.8'}
                />
                <rect
                  x="34"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.7'}
                />
                <rect
                  x="38"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.6'}
                />
                <rect
                  x="22"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.9'}
                />
                <rect
                  x="26"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.8'}
                />
                <rect
                  x="30"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.7'}
                />
                <rect
                  x="34"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.6'}
                />
                <rect
                  x="38"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.5'}
                />
                <rect
                  x="22"
                  y="40"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.8'}
                />
                <rect
                  x="26"
                  y="40"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.7'}
                />
                <rect
                  x="30"
                  y="40"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.6'}
                />
                <rect
                  x="34"
                  y="40"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.5'}
                />
                <rect
                  x="38"
                  y="40"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.4'}
                />
                <rect
                  x="22"
                  y="44"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.7'}
                />
                <rect
                  x="26"
                  y="44"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.6'}
                />
                <rect
                  x="30"
                  y="44"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.5'}
                />
                <rect
                  x="34"
                  y="44"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.4'}
                />
                <rect
                  x="38"
                  y="44"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.3'}
                />
                <rect
                  x="22"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.6'}
                />
                <rect
                  x="26"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.5'}
                />
                <rect
                  x="30"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.4'}
                />
                <rect
                  x="34"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.3'}
                />
                <rect
                  x="38"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.2'}
                />

                <rect
                  x="50"
                  y="20"
                  width="30"
                  height="60"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="52"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="56"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="60"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="64"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="68"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="72"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="76"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="52"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="56"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="60"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="64"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="68"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="72"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="76"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="52"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="56"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="60"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="64"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="68"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="72"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="76"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="52"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="56"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="60"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="64"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="68"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="72"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="76"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect
                  x="52"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="56"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="60"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="64"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="68"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="72"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect
                  x="52"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="56"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="60"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="64"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="68"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />

                <rect
                  x="85"
                  y="35"
                  width="20"
                  height="45"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="87"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="91"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="95"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="99"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="87"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="91"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="95"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="99"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="87"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="91"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="95"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="99"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="87"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="91"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="95"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="99"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />

                <rect
                  x="110"
                  y="25"
                  width="35"
                  height="55"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                {/* 15 rows of windows for building 4 */}
                <rect
                  x="113"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="117"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.95' : '0.95'}
                />
                <rect
                  x="121"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="125"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="129"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="133"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="137"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="141"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="113"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.95' : '0.95'}
                />
                <rect
                  x="117"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="121"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="125"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="129"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="133"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="137"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="141"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="113"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="117"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="121"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="125"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="129"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="133"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="137"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="141"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="113"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="117"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="121"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="125"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="129"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="133"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="137"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="141"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="113"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="117"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="121"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="125"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="129"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="133"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="137"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="141"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="113"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="117"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="121"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="125"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="129"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="133"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="137"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="141"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="113"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="117"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="121"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="125"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="129"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="133"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="137"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="141"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.35' : '0.35'}
                />
                <rect x="113" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.65' : '0.65'} />
                <rect x="117" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="121" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.55' : '0.55'} />
                <rect x="125" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="129" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.45' : '0.45'} />
                <rect x="133" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="137" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.35' : '0.35'} />
                <rect x="141" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="113" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="117" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.55' : '0.55'} />
                <rect x="121" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="125" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.45' : '0.45'} />
                <rect x="129" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="133" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.35' : '0.35'} />
                <rect x="137" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="141" y="42" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.25' : '0.25'} />
                <rect x="113" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.55' : '0.55'} />
                <rect x="117" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="121" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.45' : '0.45'} />
                <rect x="125" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="129" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.35' : '0.35'} />
                <rect x="133" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="137" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.25' : '0.25'} />
                <rect x="141" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="113" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="117" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.45' : '0.45'} />
                <rect x="121" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="125" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.35' : '0.35'} />
                <rect x="129" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="133" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.25' : '0.25'} />
                <rect x="137" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="141" y="46" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.15' : '0.15'} />
                <rect x="113" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.45' : '0.45'} />
                <rect x="117" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="121" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.35' : '0.35'} />
                <rect x="125" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="129" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.25' : '0.25'} />
                <rect x="133" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="137" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.15' : '0.15'} />
                <rect x="141" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect
                  x="113"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="117"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.95' : '0.95'}
                />
                <rect
                  x="121"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="125"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="129"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="133"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="137"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="141"
                  y="26"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="113"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.95' : '0.95'}
                />
                <rect
                  x="117"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="121"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="125"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="129"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="133"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="137"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="141"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="113"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="117"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="121"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="125"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="129"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="133"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="137"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="141"
                  y="30"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="113"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.85' : '0.85'}
                />
                <rect
                  x="117"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="121"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="125"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="129"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="133"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="137"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="141"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="113"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="117"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="121"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="125"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="129"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="133"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="137"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="141"
                  y="34"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="113"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.75' : '0.75'}
                />
                <rect
                  x="117"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="121"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="125"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="129"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="133"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="137"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="141"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="113"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="117"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.65' : '0.65'}
                />
                <rect
                  x="121"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="125"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.55' : '0.55'}
                />
                <rect
                  x="129"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="133"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.45' : '0.45'}
                />
                <rect
                  x="137"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="141"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.35' : '0.35'}
                />

                <rect
                  x="150"
                  y="40"
                  width="18"
                  height="40"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="152"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="156"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="160"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="164"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="152"
                  y="45"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="156"
                  y="45"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="160"
                  y="45"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="164"
                  y="45"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="152"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="156"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="160"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="164"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="152"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="156"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="160"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="164"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="152"
                  y="54"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="156"
                  y="54"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="160"
                  y="54"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="164"
                  y="54"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="152"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="156"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="160"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="164"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />

                <rect
                  x="175"
                  y="15"
                  width="40"
                  height="65"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                {/* 22 rows of windows for building 6 - tallest building */}
                <rect
                  x="178"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="182"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.98' : '0.98'}
                />
                <rect
                  x="186"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.96' : '0.96'}
                />
                <rect
                  x="190"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.94' : '0.94'}
                />
                <rect
                  x="194"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.92' : '0.92'}
                />
                <rect
                  x="198"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="202"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.88' : '0.88'}
                />
                <rect
                  x="206"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.86' : '0.86'}
                />
                <rect
                  x="210"
                  y="16"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.84' : '0.84'}
                />
                <rect
                  x="178"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.98' : '0.98'}
                />
                <rect
                  x="182"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.96' : '0.96'}
                />
                <rect
                  x="186"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.94' : '0.94'}
                />
                <rect
                  x="190"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.92' : '0.92'}
                />
                <rect
                  x="194"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="198"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.88' : '0.88'}
                />
                <rect
                  x="202"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.86' : '0.86'}
                />
                <rect
                  x="206"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.84' : '0.84'}
                />
                <rect
                  x="210"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.82' : '0.82'}
                />
                <rect
                  x="178"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.96' : '0.96'}
                />
                <rect
                  x="182"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.94' : '0.94'}
                />
                <rect
                  x="186"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.92' : '0.92'}
                />
                <rect
                  x="190"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="194"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.88' : '0.88'}
                />
                <rect
                  x="198"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.86' : '0.86'}
                />
                <rect
                  x="202"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.84' : '0.84'}
                />
                <rect
                  x="206"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.82' : '0.82'}
                />
                <rect
                  x="210"
                  y="20"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="178"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.94' : '0.94'}
                />
                <rect
                  x="182"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.92' : '0.92'}
                />
                <rect
                  x="186"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="190"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.88' : '0.88'}
                />
                <rect
                  x="194"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.86' : '0.86'}
                />
                <rect
                  x="198"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.84' : '0.84'}
                />
                <rect
                  x="202"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.82' : '0.82'}
                />
                <rect
                  x="206"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="210"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.78' : '0.78'}
                />
                <rect
                  x="178"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.92' : '0.92'}
                />
                <rect
                  x="182"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="186"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.88' : '0.88'}
                />
                <rect
                  x="190"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.86' : '0.86'}
                />
                <rect
                  x="194"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.84' : '0.84'}
                />
                <rect
                  x="198"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.82' : '0.82'}
                />
                <rect
                  x="202"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="206"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.78' : '0.78'}
                />
                <rect
                  x="210"
                  y="24"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.76' : '0.76'}
                />
                <rect x="178" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.9' : '0.9'} />
                <rect x="182" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.88' : '0.88'} />
                <rect x="186" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.86' : '0.86'} />
                <rect x="190" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.84' : '0.84'} />
                <rect x="194" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.82' : '0.82'} />
                <rect x="198" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.8' : '0.8'} />
                <rect x="202" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.78' : '0.78'} />
                <rect x="206" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.76' : '0.76'} />
                <rect x="210" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.74' : '0.74'} />
                <rect x="178" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.88' : '0.88'} />
                <rect x="182" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.86' : '0.86'} />
                <rect x="186" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.84' : '0.84'} />
                <rect x="190" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.82' : '0.82'} />
                <rect x="194" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.8' : '0.8'} />
                <rect x="198" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.78' : '0.78'} />
                <rect x="202" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.76' : '0.76'} />
                <rect x="206" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.74' : '0.74'} />
                <rect x="210" y="28" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.72' : '0.72'} />

                <rect
                  x="220"
                  y="30"
                  width="25"
                  height="50"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="222"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="226"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="230"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="234"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="238"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="222"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="226"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="230"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="234"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="238"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="222"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="226"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="230"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="234"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="238"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="222" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="226" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="230" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="234" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="238" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="222" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="226" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="230" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="234" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="250"
                  y="45"
                  width="15"
                  height="35"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="252"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="256"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="260"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="252"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="256"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="260"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="252"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="256"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="260"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect x="252" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="256" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="260" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="252" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="256" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="260" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="270"
                  y="35"
                  width="22"
                  height="45"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="272"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="276"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="280"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="284"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="288"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="272"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="276"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="280"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="284"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="288"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="272"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="276"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="280"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="284"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="288"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="272" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="276" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="280" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="284" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="288" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="272" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="276" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="280" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="284" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="300"
                  y="50"
                  width="12"
                  height="30"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="302"
                  y="53"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="306"
                  y="53"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="310"
                  y="53"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="302"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="306"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="310"
                  y="57"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect x="302" y="61" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="306" y="61" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="310" y="61" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="302" y="65" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="306" y="65" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="310" y="65" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="320"
                  y="40"
                  width="28"
                  height="40"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="322"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="326"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="330"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="334"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="338"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="342"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="322"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="326"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="330"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="334"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="338"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="342"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="322"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="326"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="330"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="334"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="338"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="342"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect x="322" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="326" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="330" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="334" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="338" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="322" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="326" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="330" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="334" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="355"
                  y="25"
                  width="32"
                  height="55"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="358"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="362"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="366"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="370"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="374"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="378"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="382"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="358"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="362"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="366"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="370"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="374"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="378"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="382"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="358"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="362"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="366"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="370"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="374"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="378"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="382"
                  y="36"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="358" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.7' : '0.7'} />
                <rect x="362" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="366" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="370" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="374" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="378" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="382" y="40" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="358" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="362" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="366" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="370" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="374" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="378" y="44" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="358" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="362" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="366" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="370" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="374" y="48" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="395"
                  y="35"
                  width="20"
                  height="45"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="397"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="401"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="405"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="409"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="397"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="401"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="405"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="409"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="397"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="401"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="405"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="409"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect x="397" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="401" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="405" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="409" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="397" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="401" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="405" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="409" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="397" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="401" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="405" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="420"
                  y="20"
                  width="35"
                  height="60"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="423"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="427"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="431"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="435"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="439"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="443"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="447"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="451"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="423"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="427"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="431"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="435"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="439"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="443"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="447"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="451"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />

                <rect
                  x="460"
                  y="45"
                  width="16"
                  height="35"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="462"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="466"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="470"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="474"
                  y="48"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="462"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="466"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="470"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="474"
                  y="52"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="462"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="466"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="470"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="474"
                  y="56"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="462" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="466" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="470" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="474" y="60" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="462" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="466" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="470" y="64" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="480"
                  y="30"
                  width="26"
                  height="50"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="482"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="486"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="490"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="494"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="498"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="502"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="482"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="486"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="490"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="494"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="498"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="502"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="482"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="486"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="490"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="494"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="498"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="502"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect x="482" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="486" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="490" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="494" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="498" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="482" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="486" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="490" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="494" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="510"
                  y="40"
                  width="18"
                  height="40"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="512"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="516"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="520"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="524"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="512"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="516"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="520"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="524"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="512"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="516"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="520"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="524"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect x="512" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="516" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="520" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="524" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="512" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="516" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="520" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="524" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="535"
                  y="15"
                  width="38"
                  height="65"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="538"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="542"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="546"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="550"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="554"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="558"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="562"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="566"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="570"
                  y="18"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="538"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="542"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="546"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="550"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="554"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="558"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="562"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="566"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="570"
                  y="22"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect x="538" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.8' : '0.8'} />
                <rect x="542" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.7' : '0.7'} />
                <rect x="546" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="550" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="554" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="558" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="562" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="566" y="26" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="580"
                  y="35"
                  width="22"
                  height="45"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="582"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="586"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="590"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="594"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="598"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="582"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="586"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="590"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="594"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="598"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="582"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="586"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="590"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="594"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="598"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="582" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="586" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="590" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="594" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="598" y="50" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="582" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="586" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="590" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="594" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="610"
                  y="25"
                  width="30"
                  height="55"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="613"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="617"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="621"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="625"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="629"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="633"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="637"
                  y="28"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="613"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="617"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="621"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="625"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="629"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="633"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="637"
                  y="32"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="613" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.7' : '0.7'} />
                <rect x="617" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="621" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="625" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="629" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="633" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="637" y="36" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="645"
                  y="40"
                  width="20"
                  height="40"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="647"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="651"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="655"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="659"
                  y="43"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="647"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="651"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="655"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="659"
                  y="47"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="647"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="651"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="655"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="659"
                  y="51"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect x="647" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="651" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="655" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="659" y="55" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="647" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="651" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="655" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="659" y="59" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="670"
                  y="30"
                  width="28"
                  height="50"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="672"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="676"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="680"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="684"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="688"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="692"
                  y="33"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="672"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="676"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="680"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="684"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="688"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="692"
                  y="37"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="672"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="676"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="680"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="684"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="688"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="692"
                  y="41"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect x="672" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="676" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="680" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="684" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="688" y="45" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="672" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="676" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="680" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="684" y="49" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="705"
                  y="20"
                  width="32"
                  height="60"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="708"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '1.0' : '1.0'}
                />
                <rect
                  x="712"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="716"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="720"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="724"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="728"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="732"
                  y="23"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="708"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.9' : '0.9'}
                />
                <rect
                  x="712"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="716"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="720"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="724"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="728"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="732"
                  y="27"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="708"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="712"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="716"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="720"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="724"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="728"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="732"
                  y="31"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect x="708" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.7' : '0.7'} />
                <rect x="712" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.6' : '0.6'} />
                <rect x="716" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.5' : '0.5'} />
                <rect x="720" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="724" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="728" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="732" y="35" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />

                <rect
                  x="745"
                  y="35"
                  width="24"
                  height="45"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x="747"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.8' : '0.8'}
                />
                <rect
                  x="751"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="755"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="759"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="763"
                  y="38"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="747"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.7' : '0.7'}
                />
                <rect
                  x="751"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="755"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="759"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="763"
                  y="42"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="747"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.6' : '0.6'}
                />
                <rect
                  x="751"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="755"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="759"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="763"
                  y="46"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="747"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.5' : '0.5'}
                />
                <rect
                  x="751"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.4' : '0.4'}
                />
                <rect
                  x="755"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.3' : '0.3'}
                />
                <rect
                  x="759"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.2' : '0.2'}
                />
                <rect
                  x="763"
                  y="50"
                  width="2"
                  height="2"
                  fill={isDark ? '#FFEB3B' : 'white'}
                  opacity={isDark ? '0.1' : '0.1'}
                />
                <rect x="747" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.4' : '0.4'} />
                <rect x="751" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="755" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="759" y="54" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
                <rect x="747" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.3' : '0.3'} />
                <rect x="751" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.2' : '0.2'} />
                <rect x="755" y="58" width="2" height="2" fill={isDark ? '#FFEB3B' : 'white'} opacity={isDark ? '0.1' : '0.1'} />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative h-full flex items-start justify-center px-2 md:px-10 pt-2 md:pt-4">
          <div className="text-center">
            {/* Logo and TREBOUND on first row */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shadow-lg">
                <Plane className="w-4 h-4 md:w-5 md:h-5 text-white rotate-[-12deg] drop-shadow-sm" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.35em] text-white leading-tight">
                {title}
              </h1>
            </div>
            {/* Subheading on second row */}
            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-white/80">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

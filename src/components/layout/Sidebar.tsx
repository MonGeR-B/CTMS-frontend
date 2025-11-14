import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Plane,
  Grid3X3,
  DollarSign,
  User,
  Users,
  CheckSquare,
  Headphones,
  X,
  Moon,
  Sun,
} from 'lucide-react';
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const navigationItems = [
  { key: 'dashboard', label: 'Dashboard', icon: Grid3X3, href: '/' },
  { key: 'book', label: 'Book Travel', icon: Plane, href: '/book' },
  { key: 'itinerary', label: 'Itinerary', icon: Users, href: '/itinerary' },
  { key: 'expenses', label: 'Expenses', icon: DollarSign, href: '/expenses' },
  { key: 'approvals', label: 'Approvals', icon: CheckSquare, href: '/approvals' },
  { key: 'profile', label: 'My Profile', icon: User, href: '/profile' },
  { key: 'employees', label: 'Employees', icon: Users, href: '/employees' },
];

export default function Sidebar({
  active = 'dashboard',
  onActiveChange,
}: {
  active?: string;
  onActiveChange?: (key: string) => void;
}) {
  const router = useRouter();
  const { theme } = useTheme();

  // Determine active item based on current route
  const getActiveKey = () => {
    const currentPath = router.pathname;
    const activeItem = navigationItems.find((item) => item.href === currentPath);
    return activeItem ? activeItem.key : 'dashboard';
  };

  const handleNavigation = (item: (typeof navigationItems)[0]) => {
    router.push(item.href);
  };
  return (
    <aside
      className={`sticky top-0 w-[240px] h-screen ${
        theme === 'dark'
          ? 'bg-gray-900 border-r border-gray-800'
          : 'bg-gradient-to-b from-[#FDF4F0] via-[#FBF1EC] to-[#FFEDE5] border-r border-[#E5E5E7]'
      } overflow-y-auto`}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="px-4 py-6 flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4C39] to-[#FFB573] flex items-center justify-center text-white">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div
                className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'} text-base`}
              >
                TREBOUND
              </div>
              <div
                className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-[#A0A0A6]'} font-medium`}
              >
                Corporate Travel
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {navigationItems.map((item) => {
            const isActive = item.key === getActiveKey();
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-150 backdrop-blur-sm border shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] w-full text-left ${
                  isActive
                    ? `text-[#FF4C39] font-semibold border-[#FF4C39]/50 bg-gradient-to-r from-[#FFF5F0]/90 via-[#FFEDE5]/80 to-[#FFE4D6]/70 shadow-[0_2px_8px_rgba(255,76,57,0.15)] ${
                        theme === 'dark' ? 'dark:bg-gray-800 dark:border-gray-700' : ''
                      }`
                    : `${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white bg-gray-800/70 border-gray-800/40 hover:bg-gray-700/85 hover:border-gray-700/60'
                          : 'text-[#46464F] hover:text-[#1C1C1E] bg-white/70 border-white/40 hover:bg-white/85 hover:border-white/60'
                      }`
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive
                      ? 'text-[#FF4C39]'
                      : theme === 'dark'
                        ? 'text-gray-400'
                        : 'text-[#8A8A91]'
                  }`}
                />
                <span className="text-[14px] font-medium tracking-[0px]">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Customer Support */}
        <div className="mt-auto">
          <div
            className={`rounded-xl p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <Headphones
                className={`w-3 h-3 ${theme === 'dark' ? 'text-white' : 'text-[#1E1E1E]'}`}
                strokeWidth={1.5}
              />
            </div>
            <h3
              className={`text-[12px] font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#1A1A1C]'} mb-1`}
            >
              Need Help?
            </h3>
            <p
              className={`text-[10px] ${theme === 'dark' ? 'text-gray-400' : 'text-[#6B6B6F]'} leading-[1.3] mb-2`}
            >
              Get instant support.
            </p>
            <button
              className={`w-full h-7 text-[11px] font-medium rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-colors ${
                theme === 'dark'
                  ? 'bg-black hover:bg-gray-600 text-white'
                  : 'bg-black hover:bg-[#1A1A1A] text-white'
              }`}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
        isDark
          ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/40 hover:bg-gray-700/80'
          : 'bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80'
      }`}
    >
      {isDark ? (
        <Sun className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#303036]'}`} />
      ) : (
        <Moon className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#303036]'}`} />
      )}
    </button>
  );
}

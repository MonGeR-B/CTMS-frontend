// src/components/layout/Header.tsx
import { Bell, Menu, ChevronDown, User, Settings, LogOut, HelpCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Notifications from '../sections/Notifications';

export default function Header({ onMobileMenuToggle }: { onMobileMenuToggle?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleViewAll = () => {
    setShowNotifications(false);
    setShowAll(true);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full p-4 transition-all duration-200 ${
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
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMobileMenuToggle}
              className={`lg:hidden p-2 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                  : 'bg-white/80 backdrop-blur-sm border border-white/40'
              }`}
              aria-label="Toggle mobile menu"
            >
              <Menu className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : ''}`} />
            </button>
            <div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-mutedText'}`}>
                Welcome back,
              </div>
              <div className={`text-xl md:text-2xl font-medium ${theme === 'dark' ? 'text-white' : ''}`}>
                Baibhab Ghosh
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className={`relative p-2 md:p-3 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                    : 'bg-white/80 backdrop-blur-sm border border-white/40'
                }`}
                aria-label={`View notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
              >
                <Bell className={`w-4 h-4 md:w-5 md:h-5 ${theme === 'dark' ? 'text-white' : ''}`} />
                {unreadCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-3xl px-1"
                    aria-hidden="true"
                  >
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className={`relative p-2 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 flex items-center gap-2 md:gap-3 ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                    : 'bg-white/80 backdrop-blur-sm border border-white/40'
                }`}
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#FF4C39] to-[#FFB573] text-white flex items-center justify-center font-semibold text-xs">
                  BG
                </div>
                <div
                  className={`text-sm font-medium hidden sm:block ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Baibhab Ghosh
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showProfile ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {showNotifications && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleNotifications}
          ></div>
          <div
            className="fixed top-16 md:top-20 right-2 md:right-4 w-[calc(100vw-1rem)] max-w-80 max-h-[58vh] rounded-xl overflow-hidden shadow-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border dark:border-gray-700/40 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <Notifications
              mode="panel"
              onUnreadCountChange={setUnreadCount}
              onViewAll={handleViewAll}
            />
          </div>
        </>
      )}

      {showAll && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowAll(false)}></div>
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-20 px-2 md:px-4"
            onClick={() => setShowAll(false)}
          >
            <div
              className="w-full max-w-xl max-h-[85vh] md:max-h-[82vh] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <Notifications mode="all" onUnreadCountChange={setUnreadCount} />
            </div>
          </div>
        </>
      )}

      {showProfile && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setShowProfile(false)}
          ></div>
          <div
            className="fixed top-16 md:top-20 right-2 md:right-4 w-64 rounded-xl overflow-hidden shadow-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border dark:border-gray-700/40 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4C39] to-[#FFB573] text-white flex items-center justify-center font-semibold text-sm">
                  BG
                </div>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
                    Baibhab Ghosh
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                    baibhab@company.com
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                <User className="w-4 h-4" />
                <span className="text-sm">My Profile</span>
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm">Settings</span>
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm">Help & Support</span>
              </button>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-red-600 dark:text-red-400`}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

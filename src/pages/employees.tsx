import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import AppShell from '../components/layout/AppShell';

export default function Employees() {
  const { theme } = useTheme();

  return (
    <AppShell>
      <div
        className={`min-h-screen p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl ${
          theme === 'dark' ? 'bg-gray-900/40 backdrop-blur-sm' : 'bg-gray-200/50 backdrop-blur-sm'
        }`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        <div className="space-y-6">
          {/* Header Section */}
          <div className="mb-6 md:mb-8">
            <h1
              className={`text-xl md:text-2xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-[#303036]'
              } mb-2`}
            >
              Manager View
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'} text-sm`}>
              Manage team travel requests and approvals
            </p>
          </div>

          <div className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
              : 'bg-white/80 backdrop-blur-sm border border-white/40'
          }`}>
            <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
              Manager dashboard and team management features coming soon...
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

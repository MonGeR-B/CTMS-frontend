// src/pages/index.tsx
import AppShell from '../components/layout/AppShell';
import RecentExpenses from '../components/sections/RecentExpenses';
import Bookings from '../components/sections/Bookings';
import {
  ActiveTripsPopup,
  PendingApprovalsPopup,
  ExpensesPopup,
  BudgetPopup,
} from '../components/sections/StatPopups';
import { Plane, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const stats = {
  activeTrips: 3,
  pending: 2,
  totalExpenses: 192000,
  budgetUsed: 68,
};

export default function Home() {
  const { theme } = useTheme();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <AppShell>
      <div
        className={`min-h-screen p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl ${
          theme === 'dark' ? 'bg-gray-900/40 backdrop-blur-sm' : 'bg-gray-200/50 backdrop-blur-sm'
        }`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <h1
            className={`text-xl md:text-2xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-[#303036]'
            } mb-2`}
          >
            Let&#39;s Plan, Baibhab!
          </h1>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'} text-sm`}>
            Here&#39;s what&#39;s happening with your travel management today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
          <button
            onClick={() => setActivePopup('trips')}
            className={`w-full rounded-2xl md:rounded-2xl p-3 md:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FF4C39]/10 to-[#FFB573]/10 flex items-center justify-center">
                <Plane className="w-4 h-4 md:w-5 md:h-5 text-[#FF4C39]" />
              </div>
              <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-xl">
                +12%
              </span>
            </div>
            <div
              className={`text-2xl md:text-3xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-[#303036]'
              } mb-1`}
            >
              {stats.activeTrips}
            </div>
            <div
              className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
            >
              Active Trips
            </div>
          </button>

          <button
            onClick={() => setActivePopup('approvals')}
            className={`w-full rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#F59E0B]/10 to-[#FCD34D]/10 flex items-center justify-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#F59E0B]" />
              </div>
              <span className="text-xs font-medium text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded-xl">
                Pending
              </span>
            </div>
            <div
              className={`text-2xl md:text-3xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-[#303036]'
              } mb-1`}
            >
              {stats.pending}
            </div>
            <div
              className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
            >
              Pending Approvals
            </div>
          </button>

          <button
            onClick={() => setActivePopup('expenses')}
            className={`w-full rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 flex items-center justify-center">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-[#3B82F6]" />
              </div>
              <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-xl">
                +8%
              </span>
            </div>
            <div
              className={`text-xl md:text-3xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-[#303036]'
              } mb-1`}
            >
              ₹{stats.totalExpenses.toLocaleString('en-IN')}
            </div>
            <div
              className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
            >
              Total Expenses
            </div>
          </button>

          <button
            onClick={() => setActivePopup('budget')}
            className={`w-full rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#10B981]" />
              </div>
              <span className="text-xs font-medium text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded-xl">
                68%
              </span>
            </div>
            <div
              className={`text-2xl md:text-3xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-[#303036]'
              } mb-1`}
            >
              {stats.budgetUsed}%
            </div>
            <div
              className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
            >
              Budget Used
            </div>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            <div
              className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
                theme === 'dark'
                  ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                  : 'bg-white/80 backdrop-blur-sm border border-white/40'
              }`}
            >
              <h3
                className={`text-base md:text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-[#303036]'
                } mb-4 md:mb-6`}
              >
                Recent Expenses
              </h3>
              <RecentExpenses />
            </div>
          </div>

          <div className="xl:col-span-1">
            <Bookings />
          </div>
        </div>

        {/* Popups */}
        <ActiveTripsPopup isOpen={activePopup === 'trips'} onClose={() => setActivePopup(null)} />
        <PendingApprovalsPopup
          isOpen={activePopup === 'approvals'}
          onClose={() => setActivePopup(null)}
        />
        <ExpensesPopup isOpen={activePopup === 'expenses'} onClose={() => setActivePopup(null)} />
        <BudgetPopup isOpen={activePopup === 'budget'} onClose={() => setActivePopup(null)} />
      </div>
    </AppShell>
  );
}

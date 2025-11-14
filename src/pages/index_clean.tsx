// src/pages/index.tsx
import AppShell from '../components/layout/AppShell';
import HeroBanner from '../components/sections/HeroBanner';
import StatCard from '../components/sections/StatCard';
import RecentExpenses from '../components/sections/RecentExpenses';
import { Plane, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { useDashboardStats } from '../lib/hooks';

export default function Home() {
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  return (
    <AppShell>
      <div
        className="min-h-screen bg-white/40 backdrop-blur-sm p-8 rounded-2xl"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {/* Header Section */}
        <div className="mb-8 ">
          <h1 className="text-2xl font-semibold text-[#303036] mb-2">Lets Plan, Baibhab!</h1>
          <p className="text-[#787880] text-sm">
            Here's what's happening with your travel management today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-1 right-1 text-xs opacity-3 blur-[0.5px]">✈️</div>
            <div className="absolute bottom-1 left-1 text-xs opacity-3 blur-[0.5px]">🌍</div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF4C39]/10 to-[#FFB573]/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-[#FF4C39]" />
              </div>
              <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-xl">
                +12%
              </span>
            </div>
            <div className="text-2xl font-semibold text-[#303036] mb-1">
              {statsLoading ? '...' : (stats?.activeTrips ?? 3)}
            </div>
            <div className="text-sm text-[#787880]">Active Trips</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-1 right-1 text-xs opacity-3 blur-[0.5px]">⏰</div>
            <div className="absolute bottom-1 left-1 text-xs opacity-3 blur-[0.5px]">✅</div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F59E0B]/10 to-[#FCD34D]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <span className="text-xs font-medium text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded-xl">
                Pending
              </span>
            </div>
            <div className="text-2xl font-semibold text-[#303036] mb-1">
              {statsLoading ? '...' : (stats?.pending ?? 2)}
            </div>
            <div className="text-sm text-[#787880]">Pending Approvals</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-1 right-1 text-xs opacity-3 blur-[0.5px]">💰</div>
            <div className="absolute bottom-1 left-1 text-xs opacity-3 blur-[0.5px]">💳</div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-xl">
                +8%
              </span>
            </div>
            <div className="text-2xl font-semibold text-[#303036] mb-1">
              ₹{statsLoading ? '...' : (stats?.totalExpenses ?? 192000).toLocaleString()}
            </div>
            <div className="text-sm text-[#787880]">Total Expenses</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-1 right-1 text-xs opacity-3 blur-[0.5px]">📈</div>
            <div className="absolute bottom-1 left-1 text-xs opacity-3 blur-[0.5px]">🎯</div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
              </div>
              <span className="text-xs font-medium text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded-xl">
                68%
              </span>
            </div>
            <div className="text-2xl font-semibold text-[#303036] mb-1">
              {statsLoading ? '...' : `${stats?.budgetUsed ?? 68}%`}
            </div>
            <div className="text-sm text-[#787880]">Budget Used</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <h3 className="text-lg font-semibold text-[#303036] mb-6">Recent Expenses</h3>
              <RecentExpenses />
            </div>
          </div>

          <div className="space-y-6">
            {/* Upcoming Trips */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <h3 className="text-lg font-semibold text-[#303036] mb-4">Upcoming Trips</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF4C39]/5 to-[#FFB573]/5 border border-[#FF4C39]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#303036]">Bangalore</div>
                      <div className="text-sm text-[#787880]">Dec 20-25, 2024</div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-[#FF4C39]/10 flex items-center justify-center">
                      <Plane className="w-4 h-4 text-[#FF4C39]" />
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#3B82F6]/5 to-[#60A5FA]/5 border border-[#3B82F6]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#303036]">Kolkata</div>
                      <div className="text-sm text-[#787880]">Jan 5-10, 2025</div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                      <Plane className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <h3 className="text-lg font-semibold text-[#303036] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#FF4C39] to-[#FFB573] text-white font-medium text-sm hover:shadow-[0_2px_8px_rgba(255,76,57,0.25)] transition-all duration-200">
                  Book New Trip
                </button>
                <button className="w-full p-3 rounded-2xl border border-[#E6E6E8] text-[#303036] font-medium text-sm hover:bg-[#F9F9F9] transition-all duration-200">
                  Submit Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
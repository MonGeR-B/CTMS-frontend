import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
  Edit,
  Plane,
  Calendar,
  DollarSign,
  Award,
  TrendingUp,
  Settings,
  FileText,
  Clock,
  MapPin,
  ChevronDown,
  X,
} from 'lucide-react';
import { useRouter } from 'next/router';
import AppShell from '../components/layout/AppShell';

const Profile = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [budgetExpanded, setBudgetExpanded] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<any>(null);
  const [selectedUpcoming, setSelectedUpcoming] = useState<any>(null);

  const profileStats = [
    {
      label: 'Trips Completed',
      value: '24',
      icon: Plane,
      color: 'text-[#FF4C39]',
      bgColor: 'from-[#FF4C39]/10 to-[#FFB573]/10',
    },
    {
      label: 'Active Bookings',
      value: '3',
      icon: Calendar,
      color: 'text-[#3B82F6]',
      bgColor: 'from-[#3B82F6]/10 to-[#60A5FA]/10',
    },
    {
      label: 'Total Expenses',
      value: '₹2,45,000',
      icon: DollarSign,
      color: 'text-[#10B981]',
      bgColor: 'from-[#10B981]/10 to-[#34D399]/10',
    },
    {
      label: 'Reward Points',
      value: '1,250',
      icon: Award,
      color: 'text-[#F59E0B]',
      bgColor: 'from-[#F59E0B]/10 to-[#FCD34D]/10',
    },
  ];

  const quickActions = [
    { label: 'Book Travel', icon: Plane, color: 'text-[#FF4C39]' },
    { label: 'Submit Expense', icon: FileText, color: 'text-[#3B82F6]' },
    { label: 'View Reports', icon: TrendingUp, color: 'text-[#10B981]' },
    { label: 'Settings', icon: Settings, color: 'text-[#F59E0B]' },
  ];

  const travelHistory = [
    {
      id: 1,
      destination: 'Mumbai',
      date: '2024-12-15',
      type: 'Business',
      status: 'Completed',
      cost: '₹45,000',
      duration: '4 days',
    },
    {
      id: 2,
      destination: 'Bangalore',
      date: '2024-11-28',
      type: 'Conference',
      status: 'Completed',
      cost: '₹32,000',
      duration: '3 days',
    },
    {
      id: 3,
      destination: 'Chennai',
      date: '2024-11-10',
      type: 'Client Meeting',
      status: 'Completed',
      cost: '₹38,500',
      duration: '2 days',
    },
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Delhi',
      date: '2025-01-15',
      type: 'Business',
      status: 'Confirmed',
      cost: '₹28,000',
      duration: '3 days',
    },
    {
      id: 2,
      destination: 'Kolkata',
      date: '2025-02-05',
      type: 'Training',
      status: 'Pending',
      cost: '₹22,000',
      duration: '2 days',
    },
  ];

  // Dummy data for stat popups
  const tripsData = [
    { id: 1, destination: 'Mumbai', date: '2024-12-15', type: 'Business', cost: '₹45,000' },
    { id: 2, destination: 'Bangalore', date: '2024-11-28', type: 'Conference', cost: '₹32,000' },
    { id: 3, destination: 'Chennai', date: '2024-11-10', type: 'Client Meeting', cost: '₹38,500' },
  ];

  const bookingsData = [
    {
      id: 1,
      destination: 'Delhi',
      date: '2025-01-15',
      type: 'Flight + Hotel',
      status: 'Confirmed',
    },
    { id: 2, destination: 'Kolkata', date: '2025-02-05', type: 'Flight Only', status: 'Pending' },
    {
      id: 3,
      destination: 'Hyderabad',
      date: '2025-02-20',
      type: 'Hotel Only',
      status: 'Confirmed',
    },
  ];

  const expensesBreakdown = [
    { category: 'Flights', amount: 125000, percentage: 51 },
    { category: 'Hotels', amount: 85000, percentage: 35 },
    { category: 'Meals', amount: 25000, percentage: 10 },
    { category: 'Transport', amount: 10000, percentage: 4 },
  ];

  const rewardsData = [
    { type: 'Flight Miles', points: 850, value: '₹4,250' },
    { type: 'Hotel Points', points: 400, value: '₹2,000' },
  ];

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
              My Profile
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'} text-sm`}>
              Manage your travel and preferences
            </p>
          </div>

          {/* Profile Details Card */}
          <div
            className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 mb-6 md:mb-8 ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF4C39] to-[#FFB573] text-white flex items-center justify-center font-semibold text-2xl">
                BG
              </div>
              <div className="flex-1">
                <h2
                  className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'} mb-2`}
                >
                  Baibhab Ghosh
                </h2>
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#FF4C39] to-[#FFB573] text-white shadow-lg">
                    Super Admin
                  </span>
                </div>
                <div className="space-y-2">
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    <span className="font-medium">Position:</span>Software Engineer
                  </div>
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    <span className="font-medium">Department:</span> Engineering
                  </div>
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    <span className="font-medium">Role:</span> Software Developer
                  </div>
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    <span className="font-medium">Email:</span> baibhab@company.com
                  </div>
                </div>
              </div>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/40 hover:bg-gray-700/90 text-white'
                    : 'bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-white/90 text-[#303036]'
                }`}
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8"
            id="stats-section"
          >
            {profileStats.map((stat, index) => {
              const popupKey =
                stat.label === 'Trips Completed'
                  ? 'trips'
                  : stat.label === 'Active Bookings'
                    ? 'bookings'
                    : stat.label === 'Total Expenses'
                      ? 'expenses'
                      : 'rewards';
              return (
                <button
                  key={index}
                  onClick={() => setActivePopup(popupKey)}
                  className={`w-full rounded-2xl md:rounded-2xl p-3 md:p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
                    theme === 'dark'
                      ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                      : 'bg-white/80 backdrop-blur-sm border border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center`}
                    >
                      <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div
                    className={`text-xl md:text-2xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-[#303036]'
                    } mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    {stat.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Annual Travel Budget */}
          <div
            className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 mb-6 md:mb-8 ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <button onClick={() => setBudgetExpanded(!budgetExpanded)} className="w-full text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#10B981]" />
                  <h3
                    className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                  >
                    Annual Travel Budget
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${budgetExpanded ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    Used: ₹2,45,000
                  </span>
                  <span
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    Total: ₹5,00,000
                  </span>
                </div>
                <div className={`w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3`}>
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                    style={{ width: '49%' }}
                  ></div>
                </div>
                <div className="text-center">
                  <span
                    className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                  >
                    49% Used • ₹2,55,000 Remaining
                  </span>
                </div>
              </div>
            </button>
            {budgetExpanded && (
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Q1', used: 65000, budget: 125000 },
                    { name: 'Q2', used: 85000, budget: 125000 },
                    { name: 'Q3', used: 95000, budget: 125000 },
                    { name: 'Q4', used: 0, budget: 125000 },
                  ].map((quarter, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                        >
                          {quarter.name}
                        </span>
                        <span
                          className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                        >
                          {Math.round((quarter.used / quarter.budget) * 100)}%
                        </span>
                      </div>
                      <div className={`w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-1`}>
                        <div
                          className="h-2 rounded-full bg-[#10B981]"
                          style={{ width: `${(quarter.used / quarter.budget) * 100}%` }}
                        ></div>
                      </div>
                      <div
                        className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                      >
                        ₹{quarter.used.toLocaleString('en-IN')} / ₹
                        {quarter.budget.toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div
            className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 mb-6 md:mb-8 ${
              theme === 'dark'
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                : 'bg-white/80 backdrop-blur-sm border border-white/40'
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
            >
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {quickActions.map((action, index) => {
                const isActive =
                  action.label === 'Book Travel' || action.label === 'Submit Expense';
                const route =
                  action.label === 'Book Travel'
                    ? '/book'
                    : action.label === 'Submit Expense'
                      ? '/expenses'
                      : null;
                return (
                  <button
                    key={index}
                    onClick={() => isActive && route && router.push(route)}
                    disabled={!isActive}
                    className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 ${
                      isActive
                        ? `hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] cursor-pointer ${
                            theme === 'dark'
                              ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/40 hover:bg-gray-700/90'
                              : 'bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-white/90'
                          }`
                        : `opacity-50 cursor-not-allowed ${
                            theme === 'dark'
                              ? 'bg-gray-700/50 backdrop-blur-sm border border-gray-600/20'
                              : 'bg-white/50 backdrop-blur-sm border border-white/20'
                          }`
                    }`}
                  >
                    <action.icon
                      className={`w-6 h-6 ${action.color} ${!isActive ? 'opacity-50' : ''}`}
                    />
                    <span
                      className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'} ${!isActive ? 'opacity-50' : ''}`}
                    >
                      {action.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Travel History & Upcoming Trips */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
            {/* Travel History */}
            <div
              className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                  : 'bg-white/80 backdrop-blur-sm border border-white/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#3B82F6]" />
                <h3
                  className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Travel History
                </h3>
              </div>
              <div className="space-y-3">
                {travelHistory.map((trip) => (
                  <div key={trip.id} className="space-y-2">
                    <button
                      onClick={() =>
                        setSelectedHistory(selectedHistory?.id === trip.id ? null : trip)
                      }
                      className={`w-full p-3 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
                        theme === 'dark'
                          ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/40'
                          : 'bg-white/80 backdrop-blur-sm border border-white/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#3B82F6]" />
                          <span
                            className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                          >
                            {trip.destination}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                            {trip.status}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${selectedHistory?.id === trip.id ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                          />
                        </div>
                      </div>
                      <div
                        className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                      >
                        {trip.date} • {trip.type}
                      </div>
                    </button>
                    {selectedHistory?.id === trip.id && (
                      <div
                        className={`p-3 rounded-lg border-l-2 border-[#3B82F6] ${theme === 'dark' ? 'bg-gray-700/20' : 'bg-blue-50/50'}`}
                      >
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span
                              className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                              Cost:
                            </span>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
                              {trip.cost}
                            </p>
                          </div>
                          <div>
                            <span
                              className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                              Duration:
                            </span>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
                              {trip.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Trips */}
            <div
              className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
                  : 'bg-white/80 backdrop-blur-sm border border-white/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#FF4C39]" />
                <h3
                  className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Upcoming Trips
                </h3>
              </div>
              <div className="space-y-3">
                {upcomingTrips.map((trip) => (
                  <div key={trip.id} className="space-y-2">
                    <button
                      onClick={() =>
                        setSelectedUpcoming(selectedUpcoming?.id === trip.id ? null : trip)
                      }
                      className={`w-full p-3 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-left ${
                        theme === 'dark'
                          ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/40'
                          : 'bg-white/80 backdrop-blur-sm border border-white/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#FF4C39]" />
                          <span
                            className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                          >
                            {trip.destination}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded ${trip.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                          >
                            {trip.status}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${selectedUpcoming?.id === trip.id ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                          />
                        </div>
                      </div>
                      <div
                        className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                      >
                        {trip.date} • {trip.type}
                      </div>
                    </button>
                    {selectedUpcoming?.id === trip.id && (
                      <div
                        className={`p-3 rounded-lg border-l-2 border-[#FF4C39] ${theme === 'dark' ? 'bg-gray-700/20' : 'bg-red-50/50'}`}
                      >
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span
                              className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                              Cost:
                            </span>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
                              {trip.cost}
                            </p>
                          </div>
                          <div>
                            <span
                              className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                              Duration:
                            </span>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
                              {trip.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Positioned Popups for Stats Cards */}
        {activePopup && ['trips', 'bookings', 'expenses', 'rewards'].includes(activePopup) && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm rounded-2xl z-40"
              onClick={() => setActivePopup(null)}
            ></div>
            <div
              className="absolute z-50"
              style={{ top: '420px', left: '50%', transform: 'translateX(-50%)' }}
            >
              <div
                className="w-full max-w-2xl max-h-[70vh] rounded-2xl overflow-hidden shadow-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <h3
                    className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                  >
                    {activePopup === 'trips' && 'Trips Completed'}
                    {activePopup === 'bookings' && 'Active Bookings'}
                    {activePopup === 'expenses' && 'Total Expenses'}
                    {activePopup === 'rewards' && 'Reward Points'}
                  </h3>
                  <button
                    onClick={() => setActivePopup(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X
                      className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    />
                  </button>
                </div>
                <div className="p-4 max-h-[60vh] overflow-y-auto">
                  {activePopup === 'trips' && (
                    <div className="space-y-3">
                      {tripsData.map((trip) => (
                        <button
                          key={trip.id}
                          className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Plane className="w-5 h-5 text-[#FF4C39]" />
                              <div>
                                <div
                                  className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                                >
                                  {trip.destination}
                                </div>
                                <div
                                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                                >
                                  {trip.date}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                            >
                              {trip.cost}
                            </div>
                          </div>
                          <div
                            className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                          >
                            Purpose: {trip.type}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {activePopup === 'bookings' && (
                    <div className="space-y-3">
                      {bookingsData.map((booking) => (
                        <button
                          key={booking.id}
                          className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-[#3B82F6]" />
                              <div>
                                <div
                                  className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                                >
                                  {booking.destination}
                                </div>
                                <div
                                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                                >
                                  {booking.date}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`text-xs px-2 py-1 rounded-lg ${
                                booking.status === 'Confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {booking.status}
                            </div>
                          </div>
                          <div
                            className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                          >
                            Type: {booking.type}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {activePopup === 'expenses' && (
                    <div className="space-y-3">
                      {expensesBreakdown.map((expense, index) => (
                        <button
                          key={index}
                          className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <DollarSign className="w-5 h-5 text-[#3B82F6]" />
                              <div>
                                <div
                                  className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                                >
                                  {expense.category}
                                </div>
                                <div
                                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                                >
                                  {expense.percentage}% of total
                                </div>
                              </div>
                            </div>
                            <div
                              className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                            >
                              ₹{expense.amount.toLocaleString('en-IN')}
                            </div>
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-700 inline-block`}
                          >
                            {expense.category}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {activePopup === 'rewards' && (
                    <div className="space-y-3">
                      {rewardsData.map((reward, index) => (
                        <button
                          key={index}
                          className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Award className="w-5 h-5 text-[#F59E0B]" />
                              <div>
                                <div
                                  className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                                >
                                  {reward.type}
                                </div>
                                <div
                                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                                >
                                  {reward.points} points available
                                </div>
                              </div>
                            </div>
                            <div
                              className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                            >
                              {reward.value}
                            </div>
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-lg bg-yellow-100 text-yellow-700 inline-block`}
                          >
                            Redeemable
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
};

export default Profile;

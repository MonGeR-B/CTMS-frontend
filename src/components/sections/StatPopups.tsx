// src/components/sections/StatPopups.tsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Plane, Clock, DollarSign, TrendingUp, X } from 'lucide-react';

// Dummy data
const activeTripsData = [
  { id: 1, destination: 'Mumbai', dates: 'Dec 20-25, 2024', status: 'Confirmed', type: 'Business' },
  {
    id: 2,
    destination: 'Bangalore',
    dates: 'Jan 5-8, 2025',
    status: 'Confirmed',
    type: 'Conference',
  },
  {
    id: 3,
    destination: 'Chennai',
    dates: 'Jan 15-18, 2025',
    status: 'In Progress',
    type: 'Client Meeting',
  },
];

const pendingApprovalsData = [
  {
    id: 1,
    type: 'Travel Request',
    destination: 'Delhi',
    amount: '₹25,000',
    submittedBy: 'John Doe',
  },
  {
    id: 2,
    type: 'Expense Claim',
    description: 'Hotel Stay - Mumbai',
    amount: '₹8,500',
    submittedBy: 'Jane Smith',
  },
];

const expensesData = [
  { id: 1, description: 'Flight to Mumbai', amount: 8500, date: '2024-12-15', category: 'Travel' },
  {
    id: 2,
    description: 'Hotel Stay - Delhi',
    amount: 4200,
    date: '2024-12-14',
    category: 'Accommodation',
  },
  { id: 3, description: 'Business Lunch', amount: 1200, date: '2024-12-12', category: 'Meals' },
  {
    id: 4,
    description: 'Taxi - Airport Transfer',
    amount: 650,
    date: '2024-12-13',
    category: 'Transport',
  },
  {
    id: 5,
    description: 'Conference Registration',
    amount: 15000,
    date: '2024-12-10',
    category: 'Events',
  },
];

const budgetData = [
  { category: 'Travel', allocated: 50000, used: 34000, percentage: 68 },
  { category: 'Accommodation', allocated: 30000, used: 18500, percentage: 62 },
  { category: 'Meals', allocated: 15000, used: 12200, percentage: 81 },
  { category: 'Events', allocated: 25000, used: 15000, percentage: 60 },
];

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, children }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <>
      <div
        id="popup"
        className="fixed rounded-2xl inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-20 px-2 md:px-4"
        onClick={onClose}
      >
        <div
          className="w-full max-w-2xl max-h-[85vh] md:max-h-[82vh] rounded-2xl overflow-hidden shadow-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <h3
              className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
            >
              {title}
            </h3>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
            >
              <X className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
          <div className="p-4 max-h-[70vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export const ActiveTripsPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Active Trips">
      <div className="space-y-3 black">
        {activeTripsData.map((trip) => (
          <div
            key={trip.id}
            className={`p-4 rounded-xl border backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'}`}
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
                    {trip.dates}
                  </div>
                </div>
              </div>
              <div
                className={`text-xs px-2 py-1 rounded-lg ${
                  trip.status === 'Confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {trip.status}
              </div>
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
              Purpose: {trip.type}
            </div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export const PendingApprovalsPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Pending Approvals">
      <div className="space-y-3">
        {pendingApprovalsData.map((approval) => (
          <div
            key={approval.id}
            className={`p-4 rounded-xl border backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <div>
                  <div
                    className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                  >
                    {approval.type}
                  </div>
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    {approval.destination || approval.description}
                  </div>
                </div>
              </div>
              <div
                className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                {approval.amount}
              </div>
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
              Submitted by: {approval.submittedBy}
            </div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export const ExpensesPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Total Expenses Breakdown">
      <div className="space-y-3">
        {expensesData.map((expense) => (
          <div
            key={expense.id}
            className={`p-4 rounded-xl border backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-[#3B82F6]" />
                <div>
                  <div
                    className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                  >
                    {expense.description}
                  </div>
                  <div
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
                  >
                    {new Date(expense.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div
                className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                ₹{expense.amount.toLocaleString('en-IN')}
              </div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-700 inline-block`}>
              {expense.category}
            </div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export const BudgetPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Budget Usage Breakdown">
      <div className="space-y-4">
        {budgetData.map((budget, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
                <div
                  className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  {budget.category}
                </div>
              </div>
              <div
                className={`text-sm ${budget.percentage > 75 ? 'text-red-600' : budget.percentage > 50 ? 'text-yellow-600' : 'text-green-600'}`}
              >
                {budget.percentage}%
              </div>
            </div>
            <div className="mb-2">
              <div className={`w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2`}>
                <div
                  className={`h-2 rounded-full ${budget.percentage > 75 ? 'bg-red-500' : budget.percentage > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${budget.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Used: ₹{budget.used.toLocaleString('en-IN')}
              </span>
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Total: ₹{budget.allocated.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

// src/components/sections/StatPopups.tsx
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Plane, Clock, DollarSign, TrendingUp, X, Hotel, MapPin } from 'lucide-react';

// Dummy data
const activeTripsData = [
  {
    id: 1,
    destination: 'Mumbai',
    dates: 'Dec 20-25, 2024',
    status: 'Confirmed',
    type: 'Business',
    flight: 'AI 131',
    hotel: 'Taj Mahal Palace',
    cost: '₹45,000',
  },
  {
    id: 2,
    destination: 'Bangalore',
    dates: 'Jan 5-8, 2025',
    status: 'Confirmed',
    type: 'Conference',
    flight: '6E 6177',
    hotel: 'ITC Gardenia',
    cost: '₹32,000',
  },
  {
    id: 3,
    destination: 'Chennai',
    dates: 'Jan 15-18, 2025',
    status: 'In Progress',
    type: 'Client Meeting',
    flight: 'SG 8143',
    hotel: 'The Leela Palace',
    cost: '₹38,500',
  },
];

const pendingApprovalsData = [
  {
    id: 1,
    type: 'Travel Request',
    destination: 'Delhi',
    amount: '₹25,000',
    submittedBy: 'John Doe',
    date: '2024-12-18',
    purpose: 'Client presentation',
    duration: '3 days',
  },
  {
    id: 2,
    type: 'Expense Claim',
    description: 'Hotel Stay - Mumbai',
    amount: '₹8,500',
    submittedBy: 'Jane Smith',
    date: '2024-12-16',
    receipt: 'Available',
    category: 'Accommodation',
  },
];

const expensesData = [
  {
    id: 1,
    description: 'Flight to Mumbai',
    amount: 8500,
    date: '2024-12-15',
    category: 'Travel',
    vendor: 'IndiGo Airlines',
    status: 'Approved',
  },
  {
    id: 2,
    description: 'Hotel Stay - Delhi',
    amount: 4200,
    date: '2024-12-14',
    category: 'Accommodation',
    vendor: 'Taj Hotels',
    status: 'Approved',
  },
  {
    id: 3,
    description: 'Business Lunch',
    amount: 1200,
    date: '2024-12-12',
    category: 'Meals',
    vendor: 'The Oberoi',
    status: 'Pending',
  },
  {
    id: 4,
    description: 'Taxi - Airport Transfer',
    amount: 650,
    date: '2024-12-13',
    category: 'Transport',
    vendor: 'Uber',
    status: 'Approved',
  },
  {
    id: 5,
    description: 'Conference Registration',
    amount: 15000,
    date: '2024-12-10',
    category: 'Events',
    vendor: 'TechConf 2024',
    status: 'Approved',
  },
];

const budgetData = [
  {
    category: 'Travel',
    allocated: 50000,
    used: 34000,
    percentage: 68,
    remaining: 16000,
    transactions: 12,
  },
  {
    category: 'Accommodation',
    allocated: 30000,
    used: 18500,
    percentage: 62,
    remaining: 11500,
    transactions: 8,
  },
  {
    category: 'Meals',
    allocated: 15000,
    used: 12200,
    percentage: 81,
    remaining: 2800,
    transactions: 15,
  },
  {
    category: 'Events',
    allocated: 25000,
    used: 15000,
    percentage: 60,
    remaining: 10000,
    transactions: 3,
  },
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
  const [selectedTrip, setSelectedTrip] = useState<any>(null);

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose} title="Active Trips">
        <div className="space-y-3">
          {activeTripsData.map((trip) => (
            <button
              key={trip.id}
              onClick={() => setSelectedTrip(trip)}
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
            </button>
          ))}
        </div>
      </Popup>

      {selectedTrip && (
        <Popup
          isOpen={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
          title={`Trip to ${selectedTrip.destination}`}
        >
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h4
                  className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Flight Details
                </h4>
                <Plane className="w-8 h-8 text-[#FF4C39]" />
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Flight: {selectedTrip.flight}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Dates: {selectedTrip.dates}
              </p>
            </div>
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h4
                  className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Accommodation
                </h4>
                <Hotel className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Hotel: {selectedTrip.hotel}
              </p>
            </div>
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h4
                  className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Trip Summary
                </h4>
                <MapPin className="w-8 h-8 text-[#10B981]" />
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Purpose: {selectedTrip.type}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Total Cost: {selectedTrip.cost}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Status: {selectedTrip.status}
              </p>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export const PendingApprovalsPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();
  const [selectedApproval, setSelectedApproval] = useState<any>(null);

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose} title="Pending Approvals">
        <div className="space-y-3">
          {pendingApprovalsData.map((approval) => (
            <button
              key={approval.id}
              onClick={() => setSelectedApproval(approval)}
              className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
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
            </button>
          ))}
        </div>
      </Popup>

      {selectedApproval && (
        <Popup
          isOpen={!!selectedApproval}
          onClose={() => setSelectedApproval(null)}
          title={`${selectedApproval.type} Details`}
        >
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <h4
                className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                Request Details
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Amount: {selectedApproval.amount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Submitted: {selectedApproval.date}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                By: {selectedApproval.submittedBy}
              </p>
            </div>
            {selectedApproval.destination && (
              <div
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Travel Information
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                  Destination: {selectedApproval.destination}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                  Purpose: {selectedApproval.purpose}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                  Duration: {selectedApproval.duration}
                </p>
              </div>
            )}
            {selectedApproval.category && (
              <div
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  Expense Information
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                  Category: {selectedApproval.category}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                  Receipt: {selectedApproval.receipt}
                </p>
              </div>
            )}
          </div>
        </Popup>
      )}
    </>
  );
};

export const ExpensesPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();
  const [selectedExpense, setSelectedExpense] = useState<any>(null);

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose} title="Total Expenses Breakdown">
        <div className="space-y-3">
          {expensesData.map((expense) => (
            <button
              key={expense.id}
              onClick={() => setSelectedExpense(expense)}
              className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
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
              <div
                className={`text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-700 inline-block`}
              >
                {expense.category}
              </div>
            </button>
          ))}
        </div>
      </Popup>

      {selectedExpense && (
        <Popup
          isOpen={!!selectedExpense}
          onClose={() => setSelectedExpense(null)}
          title={`Expense: ${selectedExpense.description}`}
        >
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <h4
                className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                Expense Details
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Amount: ₹{selectedExpense.amount.toLocaleString('en-IN')}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Date: {new Date(selectedExpense.date).toLocaleDateString()}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Category: {selectedExpense.category}
              </p>
            </div>
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <h4
                className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                Vendor Information
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Vendor: {selectedExpense.vendor}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Status: {selectedExpense.status}
              </p>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export const BudgetPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();
  const [selectedBudget, setSelectedBudget] = useState<any>(null);

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose} title="Budget Usage Breakdown">
        <div className="space-y-4">
          {budgetData.map((budget, index) => (
            <button
              key={index}
              onClick={() => setSelectedBudget(budget)}
              className={`w-full p-4 rounded-xl border backdrop-blur-sm text-left hover:scale-[1.02] transition-transform ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' : 'bg-gray-50/80 border-gray-200 hover:bg-gray-100/80'}`}
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
            </button>
          ))}
        </div>
      </Popup>

      {selectedBudget && (
        <Popup
          isOpen={!!selectedBudget}
          onClose={() => setSelectedBudget(null)}
          title={`${selectedBudget.category} Budget Details`}
        >
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <h4
                className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                Budget Overview
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Allocated: ₹{selectedBudget.allocated.toLocaleString('en-IN')}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Used: ₹{selectedBudget.used.toLocaleString('en-IN')}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Remaining: ₹{selectedBudget.remaining.toLocaleString('en-IN')}
              </p>
            </div>
            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <h4
                className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                Usage Statistics
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Usage Percentage: {selectedBudget.percentage}%
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
                Total Transactions: {selectedBudget.transactions}
              </p>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
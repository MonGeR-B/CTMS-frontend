import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import { ChevronDown, Receipt, CreditCard, MapPin } from 'lucide-react';

// src/components/sections/RecentExpenses.tsx
const expenses = [
  {
    id: 1,
    title: 'Flight to Mumbai',
    date: '2024-12-15',
    amount: 8500,
    status: 'approved',
    category: 'Travel',
    vendor: 'IndiGo Airlines',
    receipt: 'Available',
    paymentMethod: 'Corporate Card',
  },
  {
    id: 2,
    title: 'Hotel Stay - Delhi',
    date: '2024-12-14',
    amount: 4200,
    status: 'pending',
    category: 'Accommodation',
    vendor: 'Taj Hotels',
    receipt: 'Available',
    paymentMethod: 'Corporate Card',
  },
  {
    id: 3,
    title: 'Taxi - Airport Transfer',
    date: '2024-12-13',
    amount: 650,
    status: 'approved',
    category: 'Transport',
    vendor: 'Uber',
    receipt: 'Available',
    paymentMethod: 'Personal Card',
  },
  {
    id: 4,
    title: 'Business Lunch',
    date: '2024-12-12',
    amount: 1200,
    status: 'approved',
    category: 'Meals',
    vendor: 'The Oberoi',
    receipt: 'Available',
    paymentMethod: 'Cash',
  },
  {
    id: 5,
    title: 'Train Ticket - Chennai',
    date: '2024-12-11',
    amount: 2800,
    status: 'pending',
    category: 'Travel',
    vendor: 'IRCTC',
    receipt: 'Available',
    paymentMethod: 'Corporate Card',
  },
  {
    id: 6,
    title: 'Conference Registration',
    date: '2024-12-10',
    amount: 15000,
    status: 'approved',
    category: 'Events',
    vendor: 'TechConf 2024',
    receipt: 'Available',
    paymentMethod: 'Corporate Card',
  },
];



export default function RecentExpenses() {
  const { theme } = useTheme();
  const [selectedExpense, setSelectedExpense] = useState<any>(null);

  return (
    <div className="space-y-3 md:space-y-4">
      {expenses.map((expense) => (
        <div key={expense.id} className="space-y-2">
          <button
            onClick={() => setSelectedExpense(selectedExpense?.id === expense.id ? null : expense)}
            className={`w-full flex justify-between items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-[1.01] transition-all duration-200 text-left ${
              theme === 'dark'
                ? 'bg-gray-800/80 border border-gray-700/40 hover:bg-gray-800/90'
                : 'bg-white/60 border border-white/30 hover:bg-white/80'
            }`}
          >
            <div className="min-w-0 flex-1 pr-3">
              <div
                className={`font-medium text-sm md:text-base truncate ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
              >
                {expense.title}
              </div>
              <div
                className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}
              >
                {new Date(expense.date).toLocaleDateString()}
              </div>
            </div>
            <div className="text-right flex-shrink-0 flex items-center gap-2">
              <div>
                <div
                  className={`text-base md:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}
                >
                  ₹{expense.amount.toLocaleString('en-IN')}
                </div>
                <div
                  className={`text-xs md:text-sm px-2 py-1 rounded-lg ${
                    expense.status === 'approved'
                      ? 'text-[#10B981] bg-[#10B981]/10'
                      : expense.status === 'pending'
                        ? 'text-[#F59E0B] bg-[#F59E0B]/10'
                        : 'text-[#EF4444] bg-[#EF4444]/10'
                  }`}
                >
                  {expense.status}
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${selectedExpense?.id === expense.id ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
            </div>
          </button>
          {selectedExpense?.id === expense.id && (
            <div className={`p-3 rounded-lg border-l-2 border-[#3B82F6] ${theme === 'dark' ? 'bg-gray-700/20' : 'bg-blue-50/50'}`}>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Category:</span>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>{expense.category}</p>
                </div>
                <div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Vendor:</span>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>{expense.vendor}</p>
                </div>
                <div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Receipt:</span>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>{expense.receipt}</p>
                </div>
                <div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Payment:</span>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>{expense.paymentMethod}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

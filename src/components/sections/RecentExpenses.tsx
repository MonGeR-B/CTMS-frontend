import { useTheme } from '../../contexts/ThemeContext';

// src/components/sections/RecentExpenses.tsx
const expenses = [
  { id: 1, title: 'Flight to Mumbai', date: '2024-12-15', amount: 8500, status: 'approved' },
  { id: 2, title: 'Hotel Stay - Delhi', date: '2024-12-14', amount: 4200, status: 'pending' },
  { id: 3, title: 'Taxi - Airport Transfer', date: '2024-12-13', amount: 650, status: 'approved' },
  { id: 4, title: 'Business Lunch', date: '2024-12-12', amount: 1200, status: 'approved' },
  { id: 5, title: 'Train Ticket - Chennai', date: '2024-12-11', amount: 2800, status: 'pending' },
  { id: 6, title: 'Conference Registration', date: '2024-12-10', amount: 15000, status: 'approved' }
];

export default function RecentExpenses() {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div key={expense.id} className={`flex justify-between items-center p-4 rounded-2xl backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800/80 border border-gray-700/40'
            : 'bg-white/60 border border-white/30'
        }`}>
          <div>
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>{expense.title}</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>{new Date(expense.date).toLocaleDateString()}</div>
          </div>
          <div className="text-right">
            <div className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>₹{expense.amount.toLocaleString('en-IN')}</div>
            <div className={`text-sm px-2 py-1 rounded-lg ${
              expense.status === 'approved' 
                ? 'text-[#10B981] bg-[#10B981]/10' 
                : expense.status === 'pending' 
                ? 'text-[#F59E0B] bg-[#F59E0B]/10' 
                : 'text-[#EF4444] bg-[#EF4444]/10'
            }`}>
              {expense.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

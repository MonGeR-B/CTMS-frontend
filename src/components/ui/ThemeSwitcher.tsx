
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-3 bg-[var(--panel)]/80 backdrop-blur-sm border border-[var(--panel)]/40 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitcher;

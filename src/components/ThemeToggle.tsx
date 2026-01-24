import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

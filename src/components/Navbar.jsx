import { Link } from 'react-router-dom';
import { Moon, Sun, Stethoscope } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Stethoscope className="w-8 h-8" />
          <span>MediCare</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/doctors" className="hover:text-primary transition">Doctors</Link>
            <Link to="/appointment" className="hover:text-primary transition">Appointment</Link>
            <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
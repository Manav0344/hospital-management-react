
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Stethoscope, Menu, X, Home, UserRound, CalendarCheck, LayoutDashboard } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Stethoscope className="w-8 h-8" />
          <span>MediCare</span>
        </Link>

        <div className="flex items-center gap-4">

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/doctors" className="hover:text-primary transition">Doctors</Link>
            <Link to="/appointment" className="hover:text-primary transition">Appointment</Link>
            <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6">

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mt-4 space-y-4 border dark:border-gray-700">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              to="/doctors"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <UserRound size={20} />
              Doctors
            </Link>

            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <CalendarCheck size={20} />
              Appointment
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;


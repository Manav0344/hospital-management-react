
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-8 transition-colors">

      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-10">

          {/* ABOUT */}

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              MediCare
            </h2>

            <p>
              MediCare Hospital provides world-class healthcare services with
              experienced doctors and modern medical technology.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/doctors" className="hover:text-primary">Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-primary">Appointment</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h3>

            <ul className="space-y-2">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-3">

              <li className="flex items-center gap-2">
                <MapPin size={18} />
                Ahmedabad, Gujarat
              </li>

              <li className="flex items-center gap-2">
                <Phone size={18} />
                +91 8905978910
              </li>

              <li className="flex items-center gap-2">
                <Mail size={18} />
                manavsolanki344@gmail.com
              </li>

            </ul>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-4">
              <Facebook className="cursor-pointer hover:text-primary" />
              <Twitter className="cursor-pointer hover:text-primary" />
              <Instagram className="cursor-pointer hover:text-primary" />
            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">

          <p>
            © 2026 MediCare Hospital Management System. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;


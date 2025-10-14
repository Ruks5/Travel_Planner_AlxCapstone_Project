import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-2xl font-bold text-white">
            Verel Mundo
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-sky-200 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-white hover:text-sky-200 transition-colors">
              Destination
            </Link>
            <Link to="/itinerary" className="text-white hover:text-sky-200 transition-colors">
              Itinerary
            </Link>
            <Link to="/about" className="text-white hover:text-sky-200 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-sky-200 transition-colors">
              Contact Us
            </Link>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Book Now
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg py-4 px-4 mb-4">
            <Link
              to="/"
              className="block py-2 text-gray-800 hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block py-2 text-gray-800 hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Destination
            </Link>
            <Link
              to="/itinerary"
              className="block py-2 text-gray-800 hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Itinerary
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-800 hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-800 hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <button className="w-full mt-4 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
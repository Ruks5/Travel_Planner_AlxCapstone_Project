import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VerElMundo from "../assets/VerElMundo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={VerElMundo}
              alt="Ver El Mundo"
              className="h-7 w-auto"
            />
          </Link>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link to="/" className="text-[#0c2145] hover:text-sky-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/destinations" className="text-[#0c2145] hover:text-sky-600 transition-colors font-medium">
              Destination
            </Link>
            <Link to="/itinerary" className="text-[#0c2145] hover:text-sky-600 transition-colors font-medium">
              Itinerary
            </Link>
            <Link to="/about" className="text-[#0c2145] hover:text-sky-600 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-[#0c2145] hover:text-sky-600 transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Right: Book Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#0c2145] hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#0c2145] focus:outline-none"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg py-4 px-4 mb-4">
            <Link
              to="/"
              className="block py-2 text-[#0c2145] hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block py-2 text-[#0c2145] hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Destination
            </Link>
            <Link
              to="/itinerary"
              className="block py-2 text-[#0c2145] hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Itinerary
            </Link>
            <Link
              to="/about"
              className="block py-2 text-[#0c2145] hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-[#0c2145] hover:text-sky-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <button className="w-full mt-4 bg-[#0c2145] hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

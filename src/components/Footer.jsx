import React from "react";
import { Link } from "react-router-dom";
import VerElMundo from "../assets/VerElMundo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-[#0c2145]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 text-sm">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start">
          <img src={VerElMundo} alt="Ver el Mundo" className="w-40 h-auto mb-6" />
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/destinations" className="hover:underline">Destination</Link></li>
            <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy & Policy</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/partners" className="hover:underline">Partners</Link></li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h4 className="font-bold mb-4">Policy</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:underline">Term of use</Link></li>
            <li><Link to="/conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold mb-4">Help</h4>
          <ul className="space-y-2">
            <li><Link to="/support" className="hover:underline">Support</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/cancel" className="hover:underline">Cancel a ticket</Link></li>
            <li><Link to="/buy" className="hover:underline">Buy Ticket</Link></li>
            <li><Link to="/book" className="hover:underline">Book a trip</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0c2145] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="p-2 rounded-full transition transform hover:scale-110 hover:bg-[#3b5998]"
            >
              <img src={facebook} alt="Facebook" className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition transform hover:scale-110 hover:bg-[#1DA1F2]"
            >
              <img src={twitter} alt="Twitter" className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition transform hover:scale-110 hover:bg-[#E4405F]"
            >
              <img src={instagram} alt="Instagram" className="w-7 h-7" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-right">
            © 2025 Ver el Mundo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Verelmundo from "../assets/Verelmundo.png"; // ← update the filename if needed

const Footer = () => {
  return (
    <footer className="bg-white text-[#0c2145]">
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <img
            src={Verelmundo}
            alt="Ver el mundo"
            className="w-40 h-auto mb-6"
          />
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/destinations" className="hover:underline">Destination</Link></li>
            <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy & Policy</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/partners" className="hover:underline">Partners</Link></li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h4 className="font-semibold mb-4">Policy</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:underline">Term of use</Link></li>
            <li><Link to="/conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-4">Help</h4>
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
            <a href="#" className="border border-white/70 p-2 rounded-md hover:bg-white hover:text-[#0c2145] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="border border-white/70 p-2 rounded-md hover:bg-white hover:text-[#0c2145] transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="border border-white/70 p-2 rounded-md hover:bg-white hover:text-[#0c2145] transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-right">
            Copyright © Ver el Mundo 2025, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

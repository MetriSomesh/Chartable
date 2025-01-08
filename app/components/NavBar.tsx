"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // For icons

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-screen bg-[#171717] fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-white font-bold text-2xl"
            >
              Chartable
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              "Features",
              "Analytics",
              "SmartLinks",
              "Attribution",
              "Pricing",
              "Testimonials",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "_")}`}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e1e1e]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              "Features",
              "Analytics",
              "SmartLinks",
              "Attribution",
              "Pricing",
              "Testimonials",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "_")}`}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

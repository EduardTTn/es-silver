"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="ES Silver Logo"
                width={130} // Logo width
                height={100} // Logo height
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="#landing"
              className="text-gray-800 hover:text-blue-600 transition-all font-medium"
            >
              Despre Noi
            </Link>
            <Link
              href="#prices"
              className="text-gray-800 hover:text-blue-600 transition-all font-medium"
            >
              Prețuri
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-blue-600 transition-all font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="inline-flex items-center md:hidden p-2 rounded-md text-gray-800 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-24 left-0 w-full bg-white shadow-md md:hidden">
              <Link
                href="#about"
                className="block text-gray-800 hover:text-blue-600 py-2 px-4 transition-all"
              >
                Despre Noi
              </Link>
              <Link
                href="#prices"
                className="block text-gray-800 hover:text-blue-600 py-2 px-4 transition-all"
              >
                Prețuri
              </Link>
              <Link
                href="#contact"
                className="block text-gray-800 hover:text-blue-600 py-2 px-4 transition-all"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Footer Text */}
        <p className="text-white text-lg font-semibold mb-4">
          &copy; 2024 ES Silver. Toate drepturile rezervate.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/people/ES Silver/61566797647362/?mibextid=LQQJ4d&rdid=QV9ewbBvaFz0KO46&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ZvU8H8Tz%2F%3Fmibextid%3DLQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
                    {/* TikTok */}
                    <a
            href="https://www.tiktok.com/@essilvercompany?_t=8rUXuj4kzEE&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <AiFillTikTok className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/essilver_company?igsh=MTdnZDU3Y20yNDBoaA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          
          <a
            href="tel:+40733373075"
            className="text-white hover:text-gray-300 transition-all"
          >
            <FaPhone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

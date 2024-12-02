"use client";

import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = "+40733373075"; // Replace with your phone number
  const [showNumber, setShowNumber] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert("Numărul a fost copiat în clipboard!");
  };

  const handleDialOrCopy = () => {
    if (navigator.userAgent.match(/Mobi/)) {
      // Redirect to phone's call interface on mobile
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Copy number on PC
      handleCopy();
    }
  };

  return (
    <div
      className="fixed bottom-6 left-6 flex items-center z-50"
      onMouseEnter={() => setShowNumber(true)}
      onMouseLeave={() => setShowNumber(false)}
    >
      {/* Phone Number Tooltip */}
      {showNumber && (
        <span
          onClick={handleCopy}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg mr-2 cursor-pointer hover:bg-gray-700 transition-all"
        >
          {phoneNumber}
        </span>
      )}

      {/* Call Button */}
      <button
        onClick={handleDialOrCopy}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 flex items-center justify-center transition-all transform hover:scale-110"
      >
        <FaPhone size={24} />
      </button>
    </div>
  );
};

export default CallButton;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Left side - Title */}
      <div className="text-xl font-semibold text-gray-800">
        RED PRODUCT
      </div>
      
      {/* Right side - Search bar and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search bar now moved to the right */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Recherche"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Notification bell with badge */}
        <div className="relative">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
            3
          </span>
        </div>
        
        {/* Profile avatar */}
        <div className="flex items-center">
          <img
            src="/une-fille.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-200"
          />
        </div>
        
        {/* Right arrow icon */}
        <button className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
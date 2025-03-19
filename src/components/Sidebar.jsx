import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="h-screen w-64 bg-gray-700 text-white flex flex-col">
      {/* Header with logo */}
      <div className="p-4 text-lg font-bold border-b border-gray-600 flex items-center">
        <div className="mr-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
          </svg>
        </div>
        RED PRODUCT
      </div>

      {/* Navigation Section Header */}
      <div className="p-3 text-sm text-white">
        Principal
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        <Link 
          to="/dashboard" 
          className={`p-3 flex items-center transition-colors duration-200 ${
            activeItem === "Dashboard" ? "bg-white text-black" : "hover:bg-gray-600"
          }`}
          onClick={() => handleNavClick("Dashboard")}
        >
          <div className={`mr-3 ${activeItem === "Dashboard" ? "text-black" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <span>Dashboard</span>
        </Link>

        <Link 
          to="/HotelList" 
          className={`p-3 flex items-center transition-colors duration-200 ${
            activeItem === "Liste des hôtels" ? "bg-white text-black" : "hover:bg-gray-600"
          }`}
          onClick={() => handleNavClick("Liste des hôtels")}
        >
          <div className={`mr-3 ${activeItem === "Liste des hôtels" ? "text-black" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span>Liste des hôtels</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
import React from "react";
import { Home, User, Heart, Settings, ChevronLeft,  } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={
        `bg-neutral-900 text-white min-h-screen p-6 transition-all duration-300 ` +
        (sidebarOpen ? "w-64" : "w-20")
      }
    >
      {/* Toggle Icon */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mb-8 bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700"
      >
        <ChevronLeft
          size={20}
          className={sidebarOpen ? "rotate-0" : "rotate-180 transition-all"}
        />
      </button>

      {/* Logo */}
      {sidebarOpen && (
        <h1 className="text-2xl font-bold tracking-wide mb-8">Dashboard</h1>
      )}

      {/* Menu Items */}
      <ul className="space-y-6 text-gray-300">
        <Link to="/">
        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Home size={22} />
         
          {sidebarOpen && "Home"}
         
        </li>
        </Link>

        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
          <User size={22} />
          <Link to="/pro">
          {sidebarOpen && "Profile"}
          </Link>
        </li>

        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Heart size={22} />
          <Link to="/fav">
          {sidebarOpen && "Favorites"}
          </Link>
        </li>

        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Settings size={22} />
          <Link to="/sett"> 
          {sidebarOpen && "Settings"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import Sidebar from "../componentes/Sidebare";
import ThemeToggle from "../componentes/ThemeToggle";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={
          "flex-1 min-h-screen p-6 flex flex-col items-center justify-center transition-all " +
          (darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black")
        }
      >
        {/* Theme Toggle */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Content */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6 text-gray-500">Page Not Found</p>

        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Sidebar from "../componentes/Sidebare";
import ThemeToggle from "../componentes/ThemeToggle";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={
          "flex-1 min-h-screen p-6 transition-all " +
          (darkMode ? "bg-white text-black" : "bg-neutral-800 text-white")
        }
      >
        {/* Theme Toggle */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Profile Header */}
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        {/* Profile Card */}
        <div className=" p-6 rounded-2xl shadow-lg flex items-center gap-4">
          <img
            src="./image.png"
            alt="profile"
            className="w-28 h-28 rounded-full shadow"
          />

          <div>
            <h2 className="text-3xl font-bold ">Hassan Ali</h2>
            <p className="">Frontend Developer</p>
            <p className="">hassan@example.com</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6  p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-3">About Me</h2>
          <p className="">
            I am a frontend developer who loves building React dashboards.
          </p>
        </div>
      </div>
    </div>
  );
}

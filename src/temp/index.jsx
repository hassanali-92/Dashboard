import React, { useState } from "react";
import "../index.css";

import Sidebar from "../componentes/Sidebare";
import ThemeToggle from "../componentes/ThemeToggle";
import ProfileCard from "../componentes/ProfileCard";
import HobbyList from "../componentes/HobbyList";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const hobbies = ["Coding", "Cricket", "Gaming", "Traveling"];

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={
          "flex-1 min-h-screen p-6 transition-all " +
          (darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black")
        }
      >
        

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-xl mx-auto space-y-6">
          <ProfileCard followers={followers} setFollowers={setFollowers} />
          <HobbyList hobbies={hobbies} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

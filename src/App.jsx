import React, { useState } from "react";
import "./index.css";

import ThemeToggle from "./componentes/ThemeToggle";
import ProfileCard from "./componentes/ProfileCard";
import HobbyList from "./componentes/HobbyList";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [followers, setFollowers] = useState(0);

  const hobbies = ["Coding", "Cricket", "Gaming", "Traveling"];

  return (
    <div
      className={
        "min-h-screen p-6 transition-all " +
        (darkMode ? "bg-neutral-900 text-white" : "bg-gray-100 text-black")
      }
    >
      {/* Theme Toggle */}
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="max-w-xl mx-auto space-y-6">
        {/* Profile Card Component */}
        <ProfileCard followers={followers} setFollowers={setFollowers} />

        {/* Hobby List Component */}
        <HobbyList hobbies={hobbies} darkMode={darkMode} />
      </div>
    </div>
  );
}

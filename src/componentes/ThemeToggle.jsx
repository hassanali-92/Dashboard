import React from "react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow-md"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

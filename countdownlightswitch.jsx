import React, { useState, useEffect } from "react";
import { Button } from "@components ui button";

const countdownWithTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
   

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Button onClick={toggleTheme} className="mb-4">
        toggle theme
      </Button>
      <div className="w-64 text-center">
        <h2 className="text-xl font-bold">countdown timer</h2>
        <p className="text-2xl mt-2">{timeLeft}s</p>
        <div className="w-full bg-gray-300 rounded-full h-4 mt-3 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-1000"    
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default countdownWithTheme;

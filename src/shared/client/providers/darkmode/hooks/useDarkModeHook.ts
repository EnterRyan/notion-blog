'use client'

import { useEffect, useState } from "react";

export default function useDarkModeHook() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem("isDarkMode", nextMode.toString());
    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(isDarkMode);
  };

  useEffect(() => {
    const store = localStorage.getItem("isDarkMode");
    const darkMode = store === "true";
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
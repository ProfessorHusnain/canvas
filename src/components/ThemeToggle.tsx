"use client";
import { useAppContext } from "@/context";
import React, { use, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
// this is the component that will be used to toggle the theme with respect to the user's preference for light or dark or system default
const ThemeToggle = () => {
  const { metaData, setMetaData } = useAppContext();
  const toggleTheme = () => {
    if (metaData.theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setMetaData((prev) => ({ ...prev, theme: "dark" }));
    } else {
      window.localStorage.setItem("theme", "light");
      setMetaData((prev) => ({ ...prev, theme: "light" }));
    }
  };

  useEffect(() => {
  
    if (metaData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    } /*else {
      document.documentElement.removeAttribute("class"); // Remove specific theme class
      document.documentElement.setAttribute("data-theme", "auto"); // Set system default theme attribute
    }*/
  }, [metaData.theme]);
  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-800 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => toggleTheme()}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-all duration-300 "
        style={metaData.theme === "dark" ? { left: "2px" } : { right: "2px" }}
      />
      <BsSunFill className="text-yellow-500 ml-auto" size={18} />
    </div>
  );
};

export default ThemeToggle;

/*
<div className="absolute left-0 bg-white dark:bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center">
        <MdMonitor className="text-teal-500" size={18} />
        </div>
*/

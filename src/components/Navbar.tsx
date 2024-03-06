import { AppName } from "@/lib/Constant";
import React from "react";
import { FaQrcode } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <nav className="bg-white z-10 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <FaQrcode className="w-8 h-8 text-indigo-500" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {AppName}
          </span>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

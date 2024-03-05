"use client";
import { useAppContext } from "@/context";
import React, { useEffect, useState } from "react";

import Tooltip from "./Tooltip";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { isValidUrl } from "@/lib/utils";
import Loader from "./Loader";

function Button() {
  const { url, setUrl } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url.value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const handleGenrate = async () => {
    setLoading(true);
    const validity = () => {
      if (url.value === "") {
        setUrl((prev) => ({ ...prev, isValid: false }));
        return false;
      }
      if (!isValidUrl(url.value)) {
        setUrl((prev) => ({ ...prev, isValid: false }));
        return false;
      }
      setUrl((prev) => ({ ...prev, isValid: isValidUrl(url.value) }));
      return true;
    };
    

    try {
      // await fetch("https://api.example.com", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ url: url.value }),
      // });
      
      // Your QR code generation logic goes here
       setTimeout(() => {
         validity();
         console.log("QR code generated");
       }, 2000);
    
    } catch (error) {
    } finally {
      //setLoading(false);
    }
  };
  return (
    <div className="w-full min-w-sm">
      <div className="flex flex-col-reverse md:flex-row items-center gap-y-4">
        <button
          onClick={handleGenrate}
          className="flex-shrink-0 w-1/3 justify-center md:w-auto md:justify-normal rounded-lg md:rounded-e-none z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700  dark:bg-blue-600 border hover:bg-blue-800 dark:hover:bg-blue-700 md:rounded-s-lg border-blue-700 dark:border-blue-600 hover:border-blue-700 dark:hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          {loading ? (
            <div className="mx-auto">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading ...
            </div>
          ) : (
            "Generate QR"
          )}
        </button>
        <span className="w-full flex">
          <div className="relative w-full">
            <input
              type="text"
              className="bg-gray-50 rounded-s-lg md:rounded-none border outline-none border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm md:border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={url.value}
              placeholder="https://example.com"
              onChange={(e) =>
                setUrl((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>

          <button
            onClick={() => handleCopyToClipboard()}
            className="flex-shrink-0 z-10 relative group inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600"
          >
            {isCopied ? (
              <FaClipboardCheck size={15} />
            ) : (
              <FaClipboard size={15} />
            )}
            {/**Tooltip */}
            <div className="absolute transition-all duration-300 -top-11 -right-1 hidden group-hover:flex">
              <div
                className=" relative bg-gray-600 text-gray-300
                   flex items-center p-3 rounded-[3px] "
              >
                <div className="text-[12px] leading-none font-semibold capitalize ">
                  {isCopied ? "Copied!" : "Copy"}
                </div>
                {/**Triangle */}
                <div
                  className="border-solid border-t-gray-400 dark:border-t-white/20
                  border-t-8 border-x-transparent border-x-[6px] absolute border-b-0 -bottom-2"
                ></div>
              </div>
            </div>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Button;

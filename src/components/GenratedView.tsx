"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import React from "react";

export default function GenratedView() {
  const { url } = useAppContext();
  return (
    <div className="block z-20 p-6 mt-8 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <DummyImage />
    </div>
  );
}

const DummyImage = () => {
  return (
    <div className="flex">
      <Image
        src={"/Download.png"}
        alt="preview"
        width={500}
        height={500}
        quality={100}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
/*
          imageSettings={{
            src: "https://static.zpao.com/favicon.png",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
*/

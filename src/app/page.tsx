import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Dashboard />
      <div className="block z-20 max-w-sm p-6 mt-8 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
          src="/hero-pattern.svg"
          alt="Hero Pattern"
          width={100}
          height={100}
        />
      </div>
      <QRCodeGenerator />
    </main>
  );
}

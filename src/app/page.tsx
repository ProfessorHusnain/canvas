import Dashboard from "@/components/Dashboard";
import GenratedView from "@/components/GenratedView";
import Navbar from "@/components/Navbar";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Dashboard />
      <GenratedView />
    </main>
  );
}

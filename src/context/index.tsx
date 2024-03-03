"use client";
import { createContext, use, useEffect, useState } from "react";
import { MetaData, Url } from "../types";
import { isValidUrl } from "@/lib/utils";
import Loader from "@/components/Loader";

interface AppContextProps {
  url: Url;
  setUrl: React.Dispatch<React.SetStateAction<Url>>;
  metaData: MetaData;
  setMetaData: React.Dispatch<React.SetStateAction<MetaData>>;
}

const QRAppContext = createContext<AppContextProps | undefined>(undefined);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [url, setUrl] = useState<Url>({ value: "", isValid: false });
  const [loading, setLoading] = useState<boolean>(false);
  const [metaData, setMetaData] = useState<MetaData>({
    vistor_id: "",
    theme: "dark",
  });

  const updateUrl = (value: string) => {
    setUrl({ value, isValid: isValidUrl(value) });
  };
  useEffect(() => {
    const loader = async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    const metaData = async () => {
      const theme = window.localStorage.getItem("theme");
      const vistor_id = window.localStorage.getItem("vistor_id");
      if (theme === "dark") {
        setMetaData((prev) => ({ ...prev, theme: "dark" }));
      } else if (theme === "light") {
        setMetaData((prev) => ({ ...prev, theme: "light" }));
      }
      if (vistor_id) {
        setMetaData((prev) => ({ ...prev, vistor_id }));
      } else {
        const id = Math.random().toString(36).substring(7);
        window.localStorage.setItem("vistor_id", id);
        setMetaData((prev) => ({ ...prev, vistor_id: id }));
      }
    };
    metaData();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <QRAppContext.Provider value={{ url, setUrl, metaData, setMetaData }}>
      {children}
    </QRAppContext.Provider>
  );
};
const useAppContext = () => {
  const context = use(QRAppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppWrapper");
  }
  return context;
};
export { AppWrapper, useAppContext };

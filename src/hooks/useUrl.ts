import { useState } from "react";
import { isValidUrl } from "../lib/utils";
import { Url } from "../types";
export const useUrl = () => {
  const [url, setUrl] = useState<Url>({ value: "", isValid: false });

  const updateUrl = (value: string) => {
    setUrl({ value, isValid: isValidUrl(value) });
  };

  return {
    url,
    updateUrl,
  };
};

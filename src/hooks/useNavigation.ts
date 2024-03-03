import React, { useState } from "react";

export const useNavigation = () => {
  const [active, setActive] = useState<string>('');
  return {
    active,
    setActive,
  };
};

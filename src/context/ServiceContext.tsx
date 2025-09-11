"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ServiceKey = "auto" | "home" | "business";

interface ServiceContextProps {
  selected: ServiceKey;
  setSelected: (s: ServiceKey) => void;
}

const ServiceContext = createContext<ServiceContextProps | undefined>(undefined);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<ServiceKey>("auto"); // default
  return (
    <ServiceContext.Provider value={{ selected, setSelected }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const ctx = useContext(ServiceContext);
  if (!ctx) throw new Error("useService must be used within ServiceProvider");
  return ctx;
};

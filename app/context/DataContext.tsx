"use client";

import { createContext, useContext } from "react";

// export const DataContext = createContext<any>(null);
type Business = {
  slug: string;
  name: string;
  city: string;
  phone: string;
  description: string;
};

export const DataContext = createContext<Business | null>(null);

export const useData = () => useContext(DataContext);

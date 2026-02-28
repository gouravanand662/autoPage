import { createContext, useContext } from "react";

type Business = {
  slug: string;
  name: string;
  address: string;
  phone: string;
  description?: string;
  map?: string;
};

export const DataContext = createContext<Business | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside provider");
  return context;
};

import { createContext, useContext } from "react";

export const DataContext = createContext<any>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside provider");
  return context;
};

import React, { createContext, useState } from "react";
import retailmodels from "../components/directory/Retail3dmodels";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [view, setView] = useState({
    currview: "list",
    renderarr: retailmodels,
  });

  return (
    <Context.Provider value={{ view, setView }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

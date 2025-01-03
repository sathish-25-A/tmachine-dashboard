import React, { createContext, useState, useContext } from "react";

// Create Context
const ActiveLinkContext = createContext();

// Provider component
export const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("Activities");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

// Custom hook to use active link context
export const useActiveLink = () => useContext(ActiveLinkContext);

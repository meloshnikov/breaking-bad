import React, { useState } from "react";
import { useContext } from "react";
import characters from "./fakeData";

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<any> = ({ children }) => {

  // const [characters, setCharacters] = useState<Character[]| null>(null);

  const value = {
    characters,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

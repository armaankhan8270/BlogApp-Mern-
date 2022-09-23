import { createContext, useContext, useState } from "react";

const ApiContext = createContext();
export const StateApiContext = ({ children }) => {
  const [state, setstate] = useState("aarmaan");

  return (
    <ApiContext.Provider value={{ state, setstate }}>
      {children}
    </ApiContext.Provider>
  );
};

export const GlobalStateApiContext = () => useContext(ApiContext);

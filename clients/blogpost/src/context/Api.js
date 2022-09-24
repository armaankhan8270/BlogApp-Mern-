import { createContext, useContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext();
export const StateApiContext = ({ children }) => {
  const [Data, setData] = useState({
    title: "",
    desc: "",
    username: "",
    categories: "",
  });
  //register api

  return (
    <ApiContext.Provider value={{ Data, setData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const GlobalStateApiContext = () => useContext(ApiContext);

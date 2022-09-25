import { createContext, useContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext();
export const StateApiContext = ({ children }) => {
  const [pData, setpData] = useState({
    title: "",
    desc: "",
    username: "",
    categories: "",
    // photo: "",
  });
  const [PostData, setPostData] = useState({
    title: "",
    desc: "",
    username: "",
    categories: "",
    photo: "",
  });
  const [user, setuser] = useState(false);
  //register api

  return (
    <ApiContext.Provider
      value={{ pData, setpData, PostData, setPostData, user, setuser }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const GlobalStateApiContext = () => useContext(ApiContext);

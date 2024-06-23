import axios from "axios";
import React, { useState } from "react";
import Allposts from "./Allposts";
import Post from "./Post";
const Login = (e) => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [HomePage, setHomePage] = useState(false);
  const Login = async (e) => {
    const url = "http://localhost:3001/user/login";
    const LoginData = { username, password };
    if (!username || !password) {
      alert("first enter username and passworrd");
    } else {
      e.preventDefault();
      await axios
        .post(url, LoginData)
        .then((e) => {
          console.log(e);
          alert("your welcome to our website ");
          setHomePage(true);
        })
        .catch((value) => {
          console.log(value);
        });
    }
  };

  return (
    <>
      {!HomePage === true ? (
        <div className="bg-slate-900 text-white container mx-auto max-w-xl justify-center flex sm:m-3 sm:p-4 sm:w-full  lg:mt-12 sm:mt-4   sm:ml-0 lg:pr-12 lg:pl-12 rounded-xl sm:p-4 shadow-md">
          <form onSubmit={Login}>
            <h1 className="  min-h-xl lg:text-3xl sm:text-sm lg:m-5 ">LOGIN</h1>
            <div class="mb-6">
              <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                id="email"
                class="bg-slate-900 border-b border-white text-white text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required={true}
              />
            </div>
            <div class="mb-6">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                id="password"
                className="bg-slate-900 border-b text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="password"
              />
            </div>
            <div class="flex items-start mb-6"></div>
            <button
              onClick={Login}
              className={`text-black font-extrabold  {} bg-slate-200 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-96 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <Allposts />
      )}
    </>
  );
};

export default Login;

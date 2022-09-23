import axios from "axios";
import React, { useState } from "react";
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
        <div className="lg:w-1/2 sm:w-full lg:h-96 lg:mt-12 sm:mt-4  lg:ml-80 sm:ml-0 lg:pr-12 lg:pl-12 rounded-xl sm:p-4 shadow-2xl">
          <form onSubmit={Login}>
            <h1 className="text-center lg:text-5xl sm:text-sm lg:m-5 ">
              Login
            </h1>
            <div class="mb-6">
              <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="password"
              />
            </div>
            <div class="flex items-start mb-6"></div>
            <button
              onClick={Login}
              className={`text-white  {} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <Post />
      )}
    </>
  );
};

export default Login;

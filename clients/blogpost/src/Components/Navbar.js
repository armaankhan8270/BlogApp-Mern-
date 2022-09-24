import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <div className="">
      <header class="text-gray-100 body-font rounded">
        <div class="container mx-auto flex flex-wrap rounded-lg p-5 flex-col md:flex-row items-center shadow-lg m-4  bg-slate-600">
          <a class="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">ArmaanBlog</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/signup" class="mr-5 hover:text-gray-900">
              Signup
            </Link>
            <Link to="/login" class="mr-5 hover:text-gray-900">
              Login
            </Link>
            <Link to="/post" class="mr-5 hover:text-gray-900">
              Post
            </Link>
            <Link to="/allpost" class="mr-5 hover:text-gray-900">
              Home
            </Link>
          </nav>
          <Link to="/createblog">
            <button class="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              CreatePost
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
      {/* <Home /> */}
    </div>
  );
};

export default Navbar;

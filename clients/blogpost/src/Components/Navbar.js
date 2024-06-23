import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gradient-to-r font-mono h-12 p-3 mt-2 shadow-xl shadow-white from-slate-900 to-slate-900 text-gray-300">
        <div className=" text-md" style={{ fontFamily: "Poppins" }}>
          <nav className="md:ml-auto font-mono fo gap-5 md:mr-auto flex flex-wrap items-center text-sm justify-center">
            <Link
              to="/"
              className="flex font-mono font-medium items-center  md:mb-0"
            >
              <span className="">ArmaanBlog</span>
            </Link>
            <Link to="/signup" className=" hover:text-gray-900">
              Signup
            </Link>
            <Link to="/login" className=" hover:text-gray-900">
              Login
            </Link>
            <Link to="/post" className=" hover:text-gray-900">
              Post
            </Link>
            <Link to="/allpost" className=" hover:text-gray-900">
              Home
            </Link>
            <Link to="/search" className=" hover:text-gray-900">
              SearchBlogs
            </Link>
            <Link to="/createblog">
              <button className=" bg-white  text-black p-1 border-0  focus:outline-none hover:bg-gray-700 rounded t">
                CreatePost
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

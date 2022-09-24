import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStateApiContext } from "../context/Api";

const Allposts = () => {
  const [Blogs, setBlogs] = useState([{}]);
  //
  const { Data, setData } = GlobalStateApiContext();
  const getData = async () => {
    await axios.get(`http://localhost:3001/post`).then((e) => {
      console.log(e.data);
      setBlogs(e.data);
      console.log("armaa", Blogs);
    });
  };
  const word = Blogs[0].createdAt;
  return (
    <div className="flex flex-wrap">
      <button onClick={getData}>All Posts</button>
      {Blogs
        ? Blogs.map((blogs, id) => {
            return (
              <>
                <div
                  key={id}
                  className="max-w-sm rounded overflow-hidden shadow-lg m-4"
                >
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1663915804905-168d8e0ed2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=M
              nwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                        alt="Avatar of Writer"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          {blogs.username}
                        </p>
                        <p className="text-gray-600">{word?.slice(0, 10)}</p>
                      </div>
                    </div>

                    <div className="font-bold text-xl mb-2">{blogs.title}</div>
                    <p className="text-gray-700 text-base max-h-44 overflow-y-auto ">
                      {blogs.desc}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{blogs.categories}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{blogs.categories}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{blogs.categories}
                      <Link to="/post">
                        <button
                          onClick={() => {
                            setData({
                              username: blogs.username,
                              desc: blogs.desc,
                              title: blogs.title,
                              categories: blogs.categories,
                            });
                          }}
                        >
                          All Details
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </>
            );
          })
        : "No Data Is Here"}
    </div>
  );
};

export default Allposts;

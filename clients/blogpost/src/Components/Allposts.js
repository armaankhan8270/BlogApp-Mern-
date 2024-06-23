import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalStateApiContext } from "../context/Api";
import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css"; // Ensure you import the CSS for the animations
import { motion } from "framer-motion";

const AllPosts = () => {
  const [Blogs, setBlogs] = useState([]);

  const id = "632ef82ed302ddd74309939a";

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/post");
      setBlogs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const DeletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/post/${id}`);
      alert("Post deleted successfully");
      getData(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5 }}
      style={{ fontFamily: "Poppins" }}
      className="flex bg-gradient-to-r bg-slate-900 flex-col items-center justify-center"
    >
      {Blogs.length > 0 ? (
        Blogs.map((blog, id) => (
          <ScrollAnimation
            key={id}
            animateIn="fadeIn"
            duration={0.5}
            initiallyVisible={false}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5 }}
              className="max-w-4xl w-full rounded overflow-hidden shadow-md m-4 bg-dark transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-96 object-cover"
                src={`http://localhost:3001/uploads/${blog.photo}`}
                alt={blog.title}
              />
              <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Avatar of Writer"
                  />
                  <div className="text-sm">
                    <p className="text-gray-100 font-bold leading-none">
                      {blog.username}
                    </p>
                    <p className="text-gray-300">
                      {blog.createdAt
                        ? blog.createdAt.slice(0, 10)
                        : "Date not available"}
                    </p>
                  </div>
                </div>
                <div className="font-bold uppercase text-amber-50 text-2xl mb-2">
                  {blog.title}
                </div>
                <p className="text-gray-100 text-base max-h-44 overflow-y-scroll no-scrollbar">
                  {blog.desc}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {blog.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    #{category}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <Link to={`/post/${blog._id}`}>
                    <button className="bg-blue-600 text-white rounded-full px-4 py-2">
                      Show More Details
                    </button>
                  </Link>
                  <button
                    className="bg-red-600 text-white rounded-full px-4 py-2"
                    onClick={() => DeletePost(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))
      ) : (
        <p className="text-center text-gray-600">No Data Is Here</p>
      )}
    </motion.div>
  );
};

export default AllPosts;

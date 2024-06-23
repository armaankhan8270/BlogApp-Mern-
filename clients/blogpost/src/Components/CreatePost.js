import React, { useState } from "react";
import axios from "axios";
import Allposts from "./Allposts";
const CreatePost = () => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState(null);
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [after, setAfter] = useState(false);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const uploadBlog = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/posts/create";

    const formData = new FormData();
    formData.append("username", username);
    formData.append("photo", photo);
    formData.append("categories", categories);
    formData.append("desc", desc);
    formData.append("title", title);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("Blog post created successfully");
      setAfter(true);
    } catch (error) {
      console.error(error);
      alert("Error creating blog post");
    }
  };

  return (
    <div className="bg-slate-100">
      {!after ? (
        <div className=" container mx-auto max-w-2xl bg-slate-900  sm:w-full  sm:mt-4  sm:ml-0 lg:pr-12 lg:pl-12 rounded-xl sm:p-4 shadow-sm">
          <h1 className="lg:text-5xl uppercase text-gray-200 font-extrabold shadow-sm p-1  lg:m-5 sm:text-sm text-center">
            Create your Blog
          </h1>
          <div className="block p-6 lg:ml-16 md:ml-0 rounded-lg shadow-md bg-slate-900 shadow-gray-200 max-w-md">
            <form onSubmit={uploadBlog}>
              <div className="form-group mb-6">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control block w-full px-3 py-3.5 rounded-md text-base font-normal text-gray-100 bg-slate-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Title"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control block w-full px-3 py-3.5 rounded-md text-base font-normal text-gray-100 bg-slate-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  type="text"
                  className="form-control block w-full px-3 py-3.5 rounded-md text-base font-normal text-gray-100 bg-slate-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Category"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control block w-full px-3 py-3.5 rounded-md text-base font-normal text-gray-100 bg-slate-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="flex justify-center items-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-slate-900 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-300"></div>
              <div className="form-group form-check text-center mb-6">
                <label
                  className="form-check-label inline-block text-gray-400"
                  htmlFor="exampleCheck87"
                ></label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-gray-100 text-slate-900 font-extrabold f text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Allposts />
      )}
    </div>
  );
};

export default CreatePost;

import React from "react";
import { GlobalStateApiContext } from "../context/Api";

const Post = () => {
  const { Data } = GlobalStateApiContext();
  return (
    <div>
      <section class="text-gray-600 body-font shadow-xl m-6 shadow-slate-200">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {Data.title}
              <br class="hidden lg:inline-block" />
              <p className="text-gray-500 text-sm p-2">{Data.username}</p>
            </h1>
            <p class="mb-8 leading-relaxed">{Data.desc}</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full max-h-[700px] md:w-1/2 w-5/6">
            <img
              class="object-cover  max-h-[700px] object-center rounded"
              alt="hero"
              src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;

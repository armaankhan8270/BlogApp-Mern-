import axios from "axios";
import React, { useEffect, useState } from "react";
const SearchBlog = () => {
  const [Search, setSearch] = useState("Sports");
  const [HotelData, setHotelData] = useState([{}]);
  const Registers = () => {
    axios
      .get(`http://localhost:3001/post/Categories?categories=${Search}`)
      .then((data) => {
        if (data.status === 200) {
          setHotelData(data.data[0]);
          console.log(data);
        } else {
          alert("No Hotels Found");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("No Hotel Found");
      });
  };
  useEffect(() => {
    Registers();
  }, []);
  //   const result = HotelData.filter(Search);

  return (
    <div className=" conatiner mx-auto bg-slate-900">
      <div className="flex justify-center pt-12">
        <div className="flex rounded-md border-2 border-slate-500 overflow-hidden max-w-2xl w-full">
          <input
            type="text"
            placeholder="Search Hotel"
            className="w-full outline-none font-extrabold bg-white text-gray-800 text-sm px-4 py-4"
            onChange={(e) => setSearch(e.target.value)}
            value={Search}
          />
          <button
            type="button"
            onClick={Registers}
            className="flex items-center justify-center bg-salte-900 bg-[#007bff] px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-white"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="">
        {HotelData
          ? HotelData.map((HotelData, id) => {
              return (
                <div
                  className="shadow-md shadow-gray-500 lg:m-4 sm:m-0 rounded text-white"
                  key={id}
                >
                  <section class="text-gray-100 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                      <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                          alt="ecommerce"
                          class="lg:w-1/2 w-full  lg:h-auto h-96 object-contain hover:object-contain object-center rounded"
                          //   src="https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                          // src={HotelData.photo}
                          src={`http://localhost:3001/uploads/${HotelData.photo}`}
                        />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                          <h2 class="text-sm title-font text-gray-100 tracking-widest">
                            {HotelData.username}
                          </h2>
                          <h1 class="text-gray-100 text-3xl title-font font-medium mb-1">
                            {HotelData.title}
                          </h1>
                          <div class="flex mb-4">
                            <span class="flex items-center">
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span class="text-gray-600 ml-3">
                                {HotelData.rating}
                              </span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                              </a>
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                              </a>
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                              </a>
                            </span>
                          </div>
                          <p class="leading-relaxed">
                            {HotelData.desc?.slice(0, 1000)}
                          </p>
                          <h1 className="text-slate-900  font-bold text-xl">
                            {HotelData.city}
                          </h1>
                          <h1 className="text-xl  text-black font-bold">
                            {/* Adresss:{HotelData.address} */}
                          </h1>
                          {/* <h1>Featurs</h1> */}
                          <p>{HotelData.Feture}</p>
                          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div class="flex ml-6 items-center">
                              <span class="mr-3">
                                {/* How Long You Want To Stay */}{" "}
                                {HotelData.createdAt?.slice(0, 10)}
                              </span>
                              <div class="relative">
                                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                              </div>
                            </div>
                          </div>
                          <div class="flex">
                            <button class="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                              Like
                            </button>
                            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                              <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              );
            })
          : "No Hotel Found"}
      </div>
    </div>
  );
};

export default SearchBlog;

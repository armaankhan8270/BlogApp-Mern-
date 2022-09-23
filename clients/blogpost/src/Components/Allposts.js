import React from "react";

const Allposts = () => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1663915804905-168d8e0ed2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=M
              nwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              alt="Avatar of Writer"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Rafael Martin</p>
              <p class="text-gray-600">Aug 9</p>
            </div>
          </div>

          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Allposts;

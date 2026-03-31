import React from "react";
import img from "../assets/what.avif";

const Final = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-40 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original Image</p>
            <img className="rounded-md border" src={img} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Edited Image</p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer">
              <img src={img} alt="" />
              {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-violet-700 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex sm:justify-end items-center gap-4 mt-6 flex-wrap justify-center">
          <button className="flex items- border-2 gap-2 bg-gray-300 text-black px-4 py-2 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105">
            Try another image
          </button>
          <a
            className="flex items-center gap-2 border-2 bg-gray-300 text-black px-4 py-2 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105"
            href=""
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Final;

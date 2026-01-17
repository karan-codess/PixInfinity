import React from "react";
import "remixicon/fonts/remixicon.css";
import star from "../assets/ai.svg";
import u1 from "../assets/what.avif";
import u2 from "../assets/the.avif";
import u3 from "../assets/hell.avif";
import u4 from "../assets/kyaa.avif";
import u5 from "../assets/ki.avif";
import { Link } from "react-router-dom";
const users = [u1, u2, u3, u4, u5];

const Header = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col items-center justify-start text-center px-4 md:px-16 pt-36 md:pt-40 lg:pt-48">
        <div className="inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-gray-300 mb-6">
          <p className="text-sm text-gray-700">Now it is time to edit</p>
          <img className="w-4 h-4" src={star} alt="" />
        </div>
        <h1 className="text-black text-5xl text-center font-bold md:text-7xl leading-snug mb-4">
          Everything You Need to Perfect <br />
          Your{" "}
          <span className="border-2 border-white border-dashed text-center px-1">
            Images
          </span>{" "}
          —In One Place.
        </h1>
        <p className="text-gray-800 text-center mt-6 text-lg md:text-xl max-w-xl italic">
          Perfect your images effortlessly with our AI-powered platform — from
          start to finish, all in one place.
        </p>
        <div className="flex items-center gap-3 md:gap-5">
          {/* <button className="flex items-center gap-2 mt-14 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out">
            Try It Now
            <i className="ri-arrow-right-long-line text-lg"></i>
          </button> */}
          {/* <button className="flex items-center gap-2 mt-14 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out">
            Purchase Credits
            <i className="ri-copper-coin-line text-lg"></i>
          </button> */}
          <Link
            to="/services"
            className="flex items-center gap-2 mt-14 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out">
            Try It Now
            <i className="ri-arrow-right-long-line text-lg"></i>
          </Link>
          <Link
            to="/buy"
            className="flex items-center gap-2 mt-14 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Purchase Credits
            <i className="ri-copper-coin-line text-lg"></i>
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-10">
          <div className="flex -space-x-3">
            {users.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover hover:scale-120 transition duration-300 ease-in-out"
              />
            ))}
          </div>
          <p className="text-gray-700">
            Trusted by <span className="italic">100+</span> users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

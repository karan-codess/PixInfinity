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
    <section
      className="
        flex
        flex-col
        items-center
        text-center
        px-5
        md:px-10
        pt-16
        md:pt-20
        lg:pt-24
        pb-16
      "
    >

      {/* ================= BADGE ================= */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          border
          border-gray-300
          bg-white
          px-3
          py-1
          mb-5
        "
      >
        <p
          className="
            text-[9px]
            md:text-[10px]
            uppercase
            tracking-[1.5px]
            font-semibold
            text-gray-600
          "
        >
          Now it is time to edit
        </p>

        <img
          className="w-3.5 h-3.5"
          src={star}
          alt=""
        />
      </div>


      {/* ================= MAIN HEADING ================= */}
      <h1
        className="
          text-black
          uppercase
          font-black
          tracking-[-1px]
          leading-[0.92]
          text-[52px]
          sm:text-[65px]
          md:text-[82px]
          lg:text-[92px]
          xl:text-[90px]
          max-w-[950px]
        "
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        Everything You Need
        <br />

        to Perfect Your

        <span className="relative inline-block mx-2">
          <span
            className="
              border-[2px]
              border-black
              border-dashed
              px-1
            "
          >
            Images
          </span>
        </span>

        <br />

        —In One Place .
      </h1>


      {/* ================= DESCRIPTION ================= */}
      <p
        className="
          text-gray-700
          text-sm
          md:text-base
          lg:text-lg
          font-medium
          max-w-[570px]
          mt-7
          leading-tight
        "
      >
        Perfect your images effortlessly with our AI-powered
        platform — from start to finish, all in one place.
      </p>


      {/* ================= BUTTONS ================= */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">

        {/* Try It Now */}
        <Link
          to="/get"
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            bg-black
            text-white
            border
            border-black
            px-7
            py-3
            rounded-md
            text-sm
            font-medium
            min-w-[150px]
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          Try It Now

          <i
            className="
              ri-arrow-right-line
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          ></i>
        </Link>


        {/* Purchase Credits */}
        <Link
          to="/buy"
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            bg-white
            text-black
            border
            border-black
            px-7
            py-3
            rounded-md
            text-sm
            font-medium
            min-w-[150px]
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
        >
          Purchase Credits

          <i
            className="
              ri-copper-coin-line
              transition-transform
              duration-300
              group-hover:rotate-12
            "
          ></i>
        </Link>

      </div>


      {/* ================= TRUSTED USERS ================= */}
      <div className="flex items-center gap-3 mt-9">

        <div className="flex -space-x-2">
          {users.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="
                w-8
                h-8
                rounded-full
                border-2
                border-white
                object-cover
                hover:scale-110
                transition
                duration-300
              "
            />
          ))}
        </div>

        <p className="text-xs md:text-sm text-gray-600">
          Trusted by{" "}
          <span className="font-semibold italic text-black">
            100+
          </span>{" "}
          users
        </p>

      </div>

    </section>
  );
};

export default Header;
import React, { useContext, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

import logo from "../assets/logo.svg";
import credit_icon from "../assets/credit_icon.png";

import { Link, useNavigate } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  const tools = [
    "Remove Background",
    "Image Upscaling",
    "Text to Image",
    "Remove Text",
    "CleanUp",
    "UnCrop",
  ];

  return (
    <nav className="h-[70px] px-5 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">

      {/* ================= LOGO ================= */}
      <Link to="/" className="flex items-center">
        <img
          className="w-18 md:w-25 flex-shrink-0"
          src={logo}
          alt="Logo"
        />
      </Link>


      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold text-gray-700 uppercase">

        {/* ================= TOOLS DROPDOWN ================= */}
        <div className="relative group">

          <button
            className="
              flex
              items-center
              gap-1
              hover:text-black
              transition-colors
              duration-200
              py-5
            "
          >
            Tools

            <i
              className="
                ri-arrow-down-s-line
                text-sm
                transition-transform
                duration-300
                group-hover:rotate-180
              "
            ></i>
          </button>


          {/* ================= DROPDOWN ================= */}
          <div
            className="
              absolute
              top-[58px]
              left-1/2
              -translate-x-1/2
              w-[230px]
              bg-white
              border
              border-black
              rounded-[12px]
              p-2
              shadow-[4px_4px_0px_#000]
              opacity-0
              invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-200
              z-50
            "
          >

            {tools.map((tool, index) => (
              <div
                key={tool}
                className="
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-md
                  text-[10px]
                  font-semibold
                  text-gray-700
                  hover:bg-black
                  hover:text-white
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >

                <span className="text-[9px] text-gray-400 group-hover:text-gray-300">
                  0{index + 1}
                </span>

                <span>
                  {tool}
                </span>

              </div>
            ))}

          </div>
        </div>


        {/* ================= OTHER LINKS ================= */}
        <a
          href="#features"
          className="hover:text-black transition-colors duration-200"
        >
          Features
        </a>

        <a
          href="#faqs"
          className="hover:text-black transition-colors duration-200"
        >
          FAQ'S
        </a>

        <a
          href="#pricing"
          className="hover:text-black transition-colors duration-200"
        >
          Pricing
        </a>

      </div>


      {/* ================= RIGHT SIDE ================= */}
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Credits */}
          <button
            onClick={() => navigate("/buy")}
            className="
              group
              flex
              items-center
              gap-2
              bg-black
              text-white
              border
              border-black
              px-3
              sm:px-4
              py-2
              rounded-md
              text-xs
              sm:text-sm
              font-medium
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            <img
              src={credit_icon}
              alt=""
              className="
                w-6
                h-6
                object-contain
                transition-all
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              Credits: {credit}
            </span>
          </button>


          {/* User Name */}
          <p className="text-xs sm:text-sm font-medium text-gray-700 max-sm:hidden">
            Hi{" "}
            <span className="text-black font-semibold">
              {user?.firstName}
            </span>
          </p>


          {/* Clerk User Button */}
          <div
            className="
              flex
              items-center
              border-2
              border-black
              rounded-full
              bg-white
              hover:bg-gray-100
              transition
            "
          >
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </div>

        </div>
      ) : (

        /* ================= GET STARTED ================= */
        <Link
          to="/sign-in"
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-black
            text-white
            border
            border-black
            px-4
            sm:px-5
            py-2.5
            rounded-md
            text-xs
            sm:text-sm
            font-medium
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          Get Started

          <i className="ri-arrow-right-line text-sm"></i>
        </Link>

      )}

    </nav>
  );
};

export default Navbar;
import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import credit_icon from "../assets/credit_icon.png";

const Navbar = () => {

  const { isSignedIn, user } = useUser();
  const {credit,loadCreditsData}=useContext(AppContext);

  useEffect(()=>{
    if(isSignedIn){
      loadCreditsData();}
    },[isSignedIn])




  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex justify-between items-center pt-8 md:pt-12 px-12 md:px-10 lg:px-40">
        <Link to="/">
          <img className="w-18 md:w-25 flex-shrink-0" src={logo} alt="Logo" />
        </Link>
        <div className="hidden md:flex items-center justify-between gap-4 p-2 px-5 border rounded-full bg-white/70 backdrop-blur-sm shadow-sm">
          <a href="#features" className="hover:text-zinc-700 hover:scale-105 transition">Features</a>
          {/* <a href="#pricing">Pricing</a> */}
          <Link
            to="/buy"
            className="hover:text-zinc-700 hover:scale-105 transition"
          >
            Pricing
          </Link>
          {/* <a href="#about">About</a> */}
          <Link to="/about" className="hover:text-zinc-700 hover:scale-105 transition">
            About
          </Link>
          <a href="#faqs" className="hover:text-zinc-700 hover:scale-105 transition">FAQs</a>
        </div>
        {
          isSignedIn ?
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full hover:scale-105 transition-all duration-700">
              <img src={credit_icon} alt="" className="w-8" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credits:{credit}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden">Hi, {user.firstName}</p>
            <UserButton />
          </div>
          : <Link to="/sign-in" className="bg-zinc-800 text-white border p-1 px-3 md:p-2 md:px-5 rounded-full flex items-center justify-center">
          Get Started
        </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;

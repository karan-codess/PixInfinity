import React from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
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


    const navigate = useNavigate();



  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex justify-between items-center pt-8 md:pt-12 px-12 md:px-10 lg:px-40">
        <Link to="/">
          <img className="w-18 md:w-25 flex-shrink-0" src={logo} alt="Logo" />
        </Link>
        {
          isSignedIn ?
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full hover:scale-105 transition-all duration-700">
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

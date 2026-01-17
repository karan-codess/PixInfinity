import React from "react";
import photo from "../assets/what.avif";

const links = ["Contact Us", "Privacy Policy","Cancellation & Refund Policy", "Terms of Conditions"];

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-44 pb-6">
      <div className="w-full h-px bg-gray-200 my-4"></div>
      <div className="flex items-center mt-2">
        <div className="flex items-center justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap w-full px-1 no-scrollbar">
          {links.map((link, index) => (
            <span
              key={index}
              className="text-black border rounded-xl px-2 py-0.5 text-[10px] md:text-xs font-semibold cursor-pointer bg-gray-300 whitespace-nowrap flex-shrink-0"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-200 py-6 text-sm md:text-base text-center">
        © 2026 Pix Infinity. All rights reserved.
      </p>
      <h1 className="text-center text-[68px] md:text-[120px] lg:text-[150px] font-extrabold leading-none mb-8 text-gray-400 select-none whitespace-nowrap">
        Pix Infinity
      </h1>
      <div className="flex items-center gap-2">
        <img
          src={photo}
          alt=""
          className="border w-10 h-10 rounded-lg object-cover"
        />
        <h3 className="flex items-center text-gray-600 justify-center">
          Build by❤️ Karan
        </h3>
      </div>
    </div>
  );
};

export default Footer;

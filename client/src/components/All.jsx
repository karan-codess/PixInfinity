import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const wwp = [
  {
    title: "Remove Background",
    desc: "Instantly remove image backgrounds with clean, accurate AI precision.",
    path: "/services/bgremover",
  },
  {
    title: "Image Upscaling",
    desc: "Enhance image resolution and quality without losing sharpness or detail.",
    path: "/services/upscale",
  },
  {
    title: "Text to Image",
    desc: "Generate stunning images from simple text prompts using AI.",
    path: "/services/text-to-image",
  },
  {
    title: "Remove Text",
    desc: "Erase unwanted text from images while keeping the background intact.",
    path: "/services/remove-text",
  },
  {
    title: "CleanUp",
    desc: "Remove objects, blemishes, and distractions for a cleaner image.",
    path: "/services/cleanup",
  },
  {
    title: "UnCrop",
    desc: "Expand and restore cropped images naturally with AI-powered fill.",
    path: "/services/uncrop",
  },
];

const All = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-32">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-3xl">
        What We Provide
      </h1>
      <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">
        Your all-in-one solution for fast, powerful image editing
      </p>
      <div className=" py-24 p-4 w-full max-w-5xl">
        <div className=" space-y-5 w-full">
          {wwp.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="bg-white p-8 rounded-xl border-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mt-0">{item.title}</h3>
                <p className="text-gray-600 mt-4 text-lg">{item.desc}</p>
              </div>
              <div>
                <i className="ri-arrow-right-circle-line text-2xl"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;

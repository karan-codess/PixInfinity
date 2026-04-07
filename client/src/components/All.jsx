import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

const wwp = [
  {
    title: "Remove Background",
    desc: "Instantly remove image backgrounds with clean, accurate AI precision.",
    action: "removeBg",
  },
  {
    title: "Image Upscaling",
    desc: "Enhance image resolution and quality without losing sharpness or detail.",
    action: "upscale",
  },
  {
    title: "Text to Image",
    desc: "Generate stunning images from simple text prompts using AI.",
    action: "textToImage",
  },
  {
    title: "Remove Text",
    desc: "Erase unwanted text from images while keeping the background intact.",
    action: "removeText",
  },
  {
    title: "CleanUp",
    desc: "Remove objects, blemishes, and distractions for a cleaner image.",
    action: "cleanup",
  },
  {
    title: "UnCrop",
    desc: "Expand and restore cropped images naturally with AI-powered fill.",
    action: "uncrop",
  },
];

const All = () => {
  const {removeBg}=useContext(AppContext)

  const location = useLocation();
  const image = location.state?.image;


  const handleClick = (action) => {
    if (!image) {
      alert("Please upload image first");
      return;
    }

    if (action === "removeBg") {
      removeBg(image);
    }

    if (action === "upscale") {
      upscale(image);
    }

    if (action === "textToImage") {
      textToImage(image);
    }
    if (action === "removeText") {
      removeText(image);
    }
    if (action === "cleanup") {
      cleanup(image);
    }
    if (action === "uncrop") {
      uncrop(image);
    }

  };

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
            <div
              
              key={index}
              onClick={() => handleClick(item.action)}
              className="bg-white p-8 rounded-xl border-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mt-0">{item.title}</h3>
                <p className="text-gray-600 mt-4 text-lg">{item.desc}</p>
              </div>
              <div>
                <i className="ri-arrow-right-circle-line text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;

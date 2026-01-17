import React from "react";
import photo from "../assets/first.svg";

const features = [
  {
    pic: photo,
    title: "Remove Background",
    desc: "Instantly remove image backgrounds with clean, accurate AI precision.",
  },
  {
    pic: photo,
    title: "Image Upscaling",
    desc: "Enhance image resolution and quality without losing sharpness or detail.",
  },
  {
    pic: photo,
    title: "Text to Image",
    desc: "Generate stunning images from simple text prompts using AI.",
  },
  {
    pic: photo,
    title: "Remove Text",
    desc: "Erase unwanted text from images while keeping the background intact.",
  },
  {
    pic: photo,
    title: "CleanUp",
    desc: "Remove objects, blemishes, and distractions for a cleaner image.",
  },
  {
    pic: photo,
    title: "UnCrop",
    desc: "Expand and restore cropped images naturally with AI-powered fill.",
  },
];

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center px-4 md:px-16 py-20">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-3xl">
        Features of PixInfinity
      </h1>
      <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">
        Your all-in-one solution for fast, powerful image editing
      </p>
      <div className=" py-24 p-4 max-w-5xl">
        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-15">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border hover:shadow-lg transition duration-300"
              >
                <img className='w-10 border-0 bg-gray-200 rounded p-2' src={item.pic} alt="" />
                <h3 className="text-lg font-bold mt-5">{item.title}</h3>
                <p className="text-gray-600 mt-4 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

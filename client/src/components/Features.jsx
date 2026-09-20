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
    <section
      id="tools"
      className="flex flex-col items-center px-5 md:px-10 lg:px-16 pt-20 pb-24"
    >

      {/* Badge */}
      <div className="inline-flex items-center border border-gray-300 bg-white px-3 py-1 mb-5">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] font-semibold text-gray-600">
          Powerful AI Tools
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          text-black
          uppercase
          text-center
          font-black
          tracking-[-2px]
          leading-[0.9]
          text-[45px]
          sm:text-[55px]
          md:text-[68px]
          lg:text-[78px]
          max-w-3xl
        "
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        Features of Revoo
      </h1>

      {/* Paragraph */}
      <p
        className="
          text-gray-700
          text-center
          mt-6
          text-sm
          md:text-base
          lg:text-lg
          font-medium
          max-w-3xl
          leading-tight
        "
      >
        Your all-in-one solution for fast, powerful image editing
      </p>

      {/* Feature Grid */}
      <div className="w-full max-w-6xl mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-[#f7f7f5]
                border
                border-black
                rounded-[18px]
                p-7
                min-h-[230px]
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
              "
            >

              {/* Icon */}
              <div className="w-11 h-11 bg-white border border-gray-300 rounded-md flex items-center justify-center group-hover:bg-black transition duration-300">
                <img
                  className="w-5 h-5 object-contain group-hover:invert transition duration-300"
                  src={item.pic}
                  alt=""
                />
              </div>

              {/* Number */}
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest mt-6">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-black text-lg font-bold mt-2 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-3">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Features;
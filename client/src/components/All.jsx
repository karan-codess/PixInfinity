import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";

import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

const wwp = [
  {
    title: "Remove Background",
    desc: "Instantly remove image backgrounds with clean, accurate AI precision.",
    action: "removeBg",
    icon: "ri-image-edit-line",
  },
  {
    title: "Image Upscaling",
    desc: "Enhance image resolution and quality without losing sharpness or detail.",
    action: "upscale",
    icon: "ri-expand-diagonal-line",
  },
  {
    title: "Text to Image",
    desc: "Generate stunning images from simple text prompts using AI.",
    action: "textToImage",
    icon: "ri-sparkling-2-line",
  },
  {
    title: "Remove Text",
    desc: "Erase unwanted text from images while keeping the background intact.",
    action: "removeText",
    icon: "ri-eraser-line",
  },
  {
    title: "CleanUp",
    desc: "Remove objects, blemishes, and distractions for a cleaner image.",
    action: "cleanup",
    icon: "ri-brush-line",
  },
  {
    title: "UnCrop",
    desc: "Expand and restore cropped images naturally with AI-powered fill.",
    action: "uncrop",
    icon: "ri-crop-line",
  },
];

const All = () => {
  const {
    removeBg,
    upscaleImg,
    textToImage,
    removeTextImg,
    cleanupImg,
    uncropImg,
  } = useContext(AppContext);

  const location = useLocation();
  const image = location.state?.image;

  const handleClick = (action) => {
    if (!image) {
      alert("Please upload image first");
      return;
    }

    if (action === "removeBg") removeBg(image);
    if (action === "upscale") upscaleImg(image);
    if (action === "textToImage") textToImage(image);
    if (action === "removeText") removeTextImg(image);
    if (action === "cleanup") cleanupImg(image);
    if (action === "uncrop") uncropImg(image);
  };

  return (
    <section
      className="
        flex
        flex-col
        items-center
        px-5
        md:px-10
        lg:px-16
        pt-12
        md:pt-16
        lg:pt-20
        pb-20
      "
    >
      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          border
          border-gray-300
          bg-white
          px-3
          py-1
          mb-5
        "
      >
        <span
          className="
            text-[9px]
            md:text-[10px]
            uppercase
            tracking-[1.5px]
            font-semibold
            text-gray-600
          "
        >
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
          whitespace-nowrap
          text-[40px]
          sm:text-[50px]
          md:text-[64px]
          lg:text-[78px]
        "
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        What We{" "}
        <span className="border-[2px] border-black border-dashed px-2">
          Provide
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          text-gray-700
          text-sm
          md:text-base
          lg:text-lg
          font-medium
          text-center
          max-w-[600px]
          mt-6
          leading-tight
        "
      >
        Your all-in-one solution for fast, powerful image editing
        with AI-powered tools built for creators.
      </p>

      {/* Tools */}
      <div className="w-full max-w-5xl mt-12 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wwp.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.action)}
              className="
                group
                w-full
                text-left
                bg-[#f7f7f5]
                border
                border-black
                rounded-[18px]
                p-6
                sm:p-7
                min-h-[205px]
                flex
                flex-col
                justify-between
                transition-all
                duration-300
                hover:bg-white
                hover:-translate-y-1
                cursor-pointer
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-gray-400
                    tracking-[2px]
                  "
                >
                  0{index + 1}
                </span>

                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    bg-white
                    border
                    border-gray-300
                    rounded-md
                    transition-all
                    duration-300
                    group-hover:bg-black
                    group-hover:border-black
                  "
                >
                  <i
                    className={`
                      ${item.icon}
                      text-xl
                      text-black
                      transition-all
                      duration-300
                      group-hover:text-white
                    `}
                  ></i>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3
                      className="
                        text-black
                        text-lg
                        sm:text-xl
                        font-bold
                        tracking-tight
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-gray-600
                        text-sm
                        md:text-[15px]
                        leading-relaxed
                        mt-3
                        max-w-[380px]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      shrink-0
                      w-9
                      h-9
                      border
                      border-black
                      rounded-md
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-black
                    "
                  >
                    <i
                      className="
                        ri-arrow-right-line
                        text-base
                        text-black
                        transition-all
                        duration-300
                        group-hover:text-white
                        group-hover:translate-x-0.5
                      "
                    ></i>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          md:gap-7
          mt-10
          text-[10px]
          md:text-xs
          uppercase
          tracking-wider
          text-gray-500
        "
      >
        <span className="flex items-center gap-1.5">
          <i className="ri-sparkling-2-line text-black text-sm"></i>
          AI Powered
        </span>

        <span className="flex items-center gap-1.5">
          <i className="ri-flashlight-line text-black text-sm"></i>
          Fast Processing
        </span>

        <span className="flex items-center gap-1.5">
          <i className="ri-shield-check-line text-black text-sm"></i>
          Secure
        </span>
      </div>
    </section>
  );
};

export default All;
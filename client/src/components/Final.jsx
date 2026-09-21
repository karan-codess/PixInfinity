import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";

import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Final = () => {
  const { resultImage, image } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section className="px-5 md:px-10 lg:px-16 pt-12 md:pt-16 pb-20">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center border border-gray-300 bg-white px-3 py-1 mb-5">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] font-semibold text-gray-600">
            AI Image Result
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h1
          className="
            uppercase
            font-black
            tracking-[-3px]
            leading-[0.9]
            text-[48px]
            sm:text-[60px]
            md:text-[75px]
            lg:text-[90px]
          "
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
        >
          Your Image{" "}
          <span className="border-[2px] border-black border-dashed px-2">
            Reimagined.
          </span>
        </h1>

        <p className="text-gray-700 text-sm md:text-base lg:text-lg font-medium max-w-[600px] mx-auto mt-6 leading-tight">
          Compare your original image with the AI-powered result and
          download your final creation.
        </p>
      </div>

      {/* Result Card */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-[#f7f7f5] border border-black rounded-[20px] p-4 md:p-6 lg:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

            {/* Original Image */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm md:text-base font-bold text-black uppercase tracking-wide">
                  Original Image
                </p>

                <span className="text-[9px] uppercase tracking-[1.5px] text-gray-500 border border-gray-300 bg-white px-2 py-1">
                  Before
                </span>
              </div>

              <div
                className="
                  w-full
                  h-[300px]
                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[450px]
                  bg-white
                  border
                  border-black
                  rounded-[15px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  p-3
                "
              >
                {image ? (
                  <img
                    className="w-full h-full object-cover rounded-[10px]"
                    src={URL.createObjectURL(image)}
                    alt="Original"
                  />
                ) : (
                  <div className="text-gray-400 text-sm">
                    No image available
                  </div>
                )}
              </div>
            </div>

            {/* Edited Image */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm md:text-base font-bold text-black uppercase tracking-wide">
                  Edited Image
                </p>

                <span className="text-[9px] uppercase tracking-[1.5px] text-white bg-black px-2 py-1">
                  After
                </span>
              </div>

              <div
                className="
                  w-full
                  h-[300px]
                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[450px]
                  bg-white
                  border
                  border-black
                  rounded-[15px]
                  overflow-hidden
                  relative
                  flex
                  items-center
                  justify-center
                  p-3
                "
              >
                {resultImage ? (
                  <img
                    src={resultImage}
                    alt="Edited"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                ) : image ? (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="border-[3px] border-black border-t-transparent rounded-full h-12 w-12 animate-spin"></div>

                    <p className="text-xs uppercase tracking-[1.5px] font-semibold text-gray-500">
                      Processing Image...
                    </p>
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm">
                    No image available
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          {resultImage && (
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 mt-7">

              <button
                onClick={() => navigate("/")}
                className="
                  flex items-center gap-2
                  bg-white text-black
                  border border-black
                  px-5 py-2.5
                  rounded-md
                  text-sm font-semibold
                  hover:bg-black hover:text-white
                  transition-all duration-300
                "
              >
                <i className="ri-refresh-line"></i>
                Try Another Image
              </button>

              <a
                href={resultImage}
                download
                className="
                  flex items-center gap-2
                  bg-black text-white
                  border border-black
                  px-5 py-2.5
                  rounded-md
                  text-sm font-semibold
                  hover:bg-white hover:text-black
                  transition-all duration-300
                "
              >
                <i className="ri-download-2-line"></i>
                Download Image
              </a>

            </div>
          )}
        </div>

        {/* Bottom Features */}
        <div
          className="
            flex flex-wrap items-center justify-center
            gap-5 md:gap-8 mt-8
            text-[10px] md:text-xs uppercase
            tracking-wider text-gray-500
          "
        >
          <span className="flex items-center gap-1.5">
            <i className="ri-sparkling-2-line text-black text-sm"></i>
            AI Powered
          </span>

          <span className="flex items-center gap-1.5">
            <i className="ri-image-line text-black text-sm"></i>
            High Quality
          </span>

          <span className="flex items-center gap-1.5">
            <i className="ri-shield-check-line text-black text-sm"></i>
            Secure
          </span>
        </div>
      </div>
    </section>
  );
};

export default Final;
import React from "react";
import { useNavigate } from "react-router-dom";
import upload from "../assets/upload.svg";
import Navbar from "../components/Navbar";
import "remixicon/fonts/remixicon.css";
import Footer from "../components/Footer";

const Get = () => {
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      navigate("/services", {
        state: {
          image: file,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#e9e9e7] p-2 md:p-3">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="min-h-[calc(100vh-16px)] bg-white rounded-[22px] border border-black overflow-hidden">

        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= UPLOAD SECTION ================= */}
        <section
          className="
            flex
            flex-col
            items-center
            px-5
            md:px-10
            lg:px-16
            pt-16
            md:pt-14
            lg:pt-16
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
              AI Image Editing
            </span>
          </div>


          {/* Heading */}
          <h1
            className="
              text-black
              uppercase
              flex
              whitespace-nowrap
              text-center
              font-black
              tracking-[-2px]
              leading-[0.9]
              
              text-[48px]
              sm:text-[60px]
              md:text-[75px]
              lg:text-[88px]
              max-w-[900px]
            "
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            Upload Your
            <br />

            <span className="border-[2px] border-black border-dashed px-2">
              Image
            </span>

            & Edit
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
              max-w-[570px]
              mt-7
              leading-tight
            "
          >
            Upload an image and choose from powerful AI tools
            to transform, enhance, and perfect it effortlessly.
          </p>


          {/* ================= UPLOAD CARD ================= */}
          <div
            className="
              w-full
              max-w-3xl
              mt-10
              bg-[#f7f7f5]
              border
              border-black
              rounded-[20px]
              p-2
              sm:p-3
            "
          >

            {/* Dashed Area */}
            <div
              className="
                border-2
                border-dashed
                border-gray-400
                rounded-[15px]
                px-5
                py-14
                sm:py-16
                md:py-8
                text-center
                transition-all
                duration-300
                hover:border-black
                hover:bg-white
              "
            >

              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                className="hidden"
                onChange={handleImageUpload}
              />


              {/* Upload Content */}
              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex flex-col items-center"
              >

                {/* Upload Icon */}
                <div
                  className="
                    w-20
                    h-20
                    bg-white
                    border
                    border-black
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-300
                    hover:bg-black
                    group
                  "
                >
                  <img
                    className="
                      w-12
                      h-12
                      object-contain
                      transition-all
                      duration-300
                    "
                    src={upload}
                    alt="Upload"
                  />
                </div>


                {/* Main Text */}
                <p
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    font-bold
                    text-black
                  "
                >
                  Choose a file or drag & drop it here
                </p>


                {/* Supported Formats */}
                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-gray-500
                    mt-2
                  "
                >
                  PNG, JPG, JPEG up to 10MB
                </p>


                {/* Browse Button */}
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    mt-7
                    px-7
                    py-3
                    bg-black
                    text-white
                    border
                    border-black
                    rounded-md
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Browse

                  <i className="ri-file-ai-2-line text-base"></i>
                </span>

              </label>
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
              mt-7
              text-[10px]
              md:text-xs
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            <span className="flex items-center gap-1.5">
              <i className="ri-shield-check-line text-sm text-black"></i>
              Secure Upload
            </span>

            <span className="flex items-center gap-1.5">
              <i className="ri-image-line text-sm text-black"></i>
              High Quality
            </span>

            <span className="flex items-center gap-1.5">
              <i className="ri-sparkling-2-line text-sm text-black"></i>
              AI Powered
            </span>
          </div>

        </section>
                <Footer />
      </div>
    </div>
  );
};

export default Get;
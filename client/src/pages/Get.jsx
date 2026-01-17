import React from "react";
import { useLocation } from "react-router-dom";
import upload from "../assets/upload.svg";

const Get = () => {
  const location = useLocation();
  const path = location.pathname;

  const titleMap = {
    bgremover: "Remove Background",
    upscale: "Image Upscaling",
    "text-to-image": "Text to Image",
    "remove-text": "Remove the Text",
    cleanup: "CleanUp",
    uncrop: "UnCrop",
  };

  const slug = path.split("/").pop();
  const title = titleMap[slug] || "Service";

  return (
    <div className="flex flex-col items-center px-4 md:px-16 pt-40">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-7xl">{`Upload the image for ${title}`}</h1>
      <div className="max-w-4xl w-full bg-white mx-auto mt-12 p-4 rounded-2xl">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-black transition">
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            className="hidden"
            onChange={(e) => console.log(e.target.files[0])}
          />

          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="flex flex-col p-10 items-center justify-center gap-4">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img className="w-16" src={upload} alt="" />
              </div>

              <p className="text-lg font-semibold text-gray-700">
                Choose a file or drag & drop it here
              </p>
              <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
              <div className="mt-4 ">
                <label
                  htmlFor="imageUpload"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
                >
                  Browse <i className="ri-file-ai-2-line"></i>
                </label>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Get;

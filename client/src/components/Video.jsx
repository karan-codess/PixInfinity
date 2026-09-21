import React from "react";
import video from "../assets/video.webm";

const Video = () => {
  return (
    <div className="flex items-center justify-center pb-16">
      <div
        className="
          flex items-center
          w-[90%]
          mx-auto
          bg-[#f7f7f5]
          border
          border-black
          rounded-[20px]
          p-2
          overflow-hidden
        "
      >
        <video
          className="w-full h-auto rounded-[14px] block"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src={video} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Video;

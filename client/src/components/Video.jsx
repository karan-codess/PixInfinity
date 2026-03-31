import React from "react";
import video from "../assets/video.webm";

const Video = () => {
  return (
    <div className="flex items-center justify-center py-28">
      <div className="flex items-center w-[90%] mx-auto border-0 rounded-xl overflow-hidden">
        <video
          className="w-full h-auto"
          // autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;

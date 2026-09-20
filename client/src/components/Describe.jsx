import React from "react";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";

const Describe = () => {
  const features = [
    {
      icon: first,
      title: "Pure Simplicity",
      description:
        "Powerful image editing made effortless. Edit, enhance, and transform your images without complicated tools or a steep learning curve.",
    },
    {
      icon: second,
      title: "Tools At Your Fingertips",
      description:
        "From background removal to image enhancement and upscaling, powerful AI tools work instantly to deliver professional results.",
    },
    {
      icon: third,
      title: "Faster Image Editing",
      description:
        "Save time with intelligent automation and optimized workflows. Edit smarter with everything you need in one unified platform.",
    },
  ];

  return (
    <section id="features" className="px-5 md:px-10 lg:px-16 py-20 md:py-28">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col justify-center">

          {/* Badge */}
          <div className="inline-flex self-start items-center border border-gray-300 bg-white px-3 py-1 mb-5">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] font-semibold text-gray-600">
              Why PixInfinity
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-black
              uppercase
              font-black
              tracking-[-2px]
              leading-[0.9]
              text-[48px]
              sm:text-[58px]
              md:text-[68px]
              lg:text-[72px]
              xl:text-[78px]
            "
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            Create
            <br />
            Perfect Images,
            <br />
            Effortlessly.
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-700
              text-sm
              md:text-base
              lg:text-lg
              font-medium
              max-w-[500px]
              mt-7
              leading-tight
            "
          >
            Everything you need to edit, enhance, and transform your images —
            powered by AI and designed to keep things simple.
          </p>

        </div>


        {/* ================= RIGHT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group
                bg-[#f7f7f5]
                border
                border-black
                rounded-[18px]
                p-7
                md:p-6
                min-h-[210px]
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white

                ${index === 2 ? "sm:col-span-2" : ""}
              `}
            >

              {/* Icon */}
              <div className="w-11 h-11 bg-white border border-gray-300 rounded-md flex items-center justify-center group-hover:bg-black transition duration-300">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-5 h-5 object-contain group-hover:invert transition duration-300"
                />
              </div>

              {/* Number */}
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest mt-7">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-black text-xl font-bold mt-2 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-3 max-w-2xl">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Describe;
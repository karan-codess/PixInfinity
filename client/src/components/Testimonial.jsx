import React from "react";
import "remixicon/fonts/remixicon.css";

import u1 from "../assets/what.avif";
import u2 from "../assets/the.avif";
import u3 from "../assets/hell.avif";
import u4 from "../assets/kyaa.avif";
import u5 from "../assets/ki.avif";

const testimonials = [
  {
    name: "John Doe",
    role: "Creator",
    image: u1,
    rating: 5,
    text: "Pix has made my image editing workflow incredibly simple. The AI tools are fast and the results are impressive.",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: u2,
    rating: 4,
    text: "I love how easy it is to remove backgrounds and clean up images. Pix saves me a lot of time every day.",
  },
  {
    name: "Mike Johnson",
    role: "Content Creator",
    image: u3,
    rating: 5,
    text: "The interface is clean, the tools are powerful, and everything feels extremely smooth. Definitely useful for creators.",
  },
  {
    name: "Alex Morgan",
    role: "Photographer",
    image: u4,
    rating: 5,
    text: "Pix makes professional image editing feel effortless. I can prepare my photos much faster than before.",
  },
  {
    name: "Sarah Wilson",
    role: "UI Designer",
    image: u5,
    rating: 5,
    text: "The clean interface and AI-powered tools make Pix really enjoyable to use. Background removal works beautifully.",
  },
  {
    name: "David Brown",
    role: "Digital Artist",
    image: u1,
    rating: 4,
    text: "From quick edits to creative experiments, Pix gives me everything I need in one place without making things complicated.",
  },
];

const TestimonialCard = ({ item }) => {
  return (
    <div
      className="
        w-[320px] sm:w-[360px] md:w-[390px] lg:w-[410px]
        shrink-0 min-h-[270px]
        bg-[#f7f7f5]
        border border-black
        rounded-[20px]
        p-7 md:p-8
        flex flex-col justify-between
        transition-all duration-300
        hover:bg-white
        hover:-translate-y-1
      "
    >
      {/* Top */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-[52px] leading-[0.7] font-black">
            “
          </span>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`ri-star-fill text-[16px] ${
                  star <= item.rating
                    ? "text-black"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-[15px] md:text-[16px] leading-6 text-gray-700">
          {item.text}
        </p>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 mt-8">
        <img
          src={item.image}
          alt={item.name}
          className="
            w-11 h-11
            rounded-full
            object-cover
            border border-black
          "
        />

        <div>
          <h4 className="text-sm font-bold">
            {item.name}
          </h4>

          <p className="text-xs text-gray-500 mt-0.5">
            {item.role} · Verified User
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-white py-28 md:py-20 overflow-hidden">

      {/* =========================
          HEADING SECTION
      ========================== */}
      <div
        className="
          w-full
          px-5 md:px-10 lg:px-28
          mb-12 md:mb-14
        "
      >
        {/* Badge */}
        <span
          className="
            inline-flex items-center
            px-3 py-1
            border border-gray-300
            bg-white
            text-[10px]
            uppercase
            tracking-[2px]
            font-semibold
            mb-5
          "
        >
          Testimonials
        </span>

        {/* Heading */}
        <h2
          className="
            uppercase
            font-black
            tracking-[-3px]
            leading-[0.9]
            text-[48px]
            sm:text-[58px]
            md:text-[70px]
          "
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
        >
          What People Say.
        </h2>

        {/* Paragraph */}
        <p
          className="
            text-gray-700
            text-sm
            md:text-base
            lg:text-lg
            font-medium
            max-w-[600px]
            mt-6
            leading-tight
          "
        >
          See how creators are using Pix to make their image
          editing workflow faster, simpler, and better.
        </p>
      </div>

      {/* =========================
          TESTIMONIAL MARQUEE
      ========================== */}
      <div className="relative w-full overflow-hidden py-3">

        {/* Left Fade */}
        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-20
            md:w-32
            z-20
            pointer-events-none
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* Right Fade */}
        <div
          className="
            absolute
            right-0
            top-0
            bottom-0
            w-20
            md:w-32
            z-20
            pointer-events-none
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* Track */}
        <div className="testimonial-track">

          {/* First Group */}
          <div className="testimonial-group">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={`first-${index}`}
                item={item}
              />
            ))}
          </div>

          {/* Duplicate Group */}
          <div
            className="testimonial-group"
            aria-hidden="true"
          >
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={`second-${index}`}
                item={item}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
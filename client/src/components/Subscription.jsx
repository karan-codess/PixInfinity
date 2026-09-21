import React from "react";
import pic from "../assets/third.svg";

const prices = [
  {
    amount: "$9.99",
    period: "/ one-time",
    plan: "Basic",
    originalAmount: "$14.99",
    credits: "20 Credits",
    title: "Basic Plan",
    pic: pic,
    features: [
      "20 AI credits",
      "AI image editing",
      "Background removal",
      "Image upscaling",
      "Standard processing",
    ],
    ready: "Ready to use",
    desc: "Perfect for trying Pix's AI-powered image editing tools.",
    popular: true,
  },

  {
    amount: "$19.99",
    period: "/ month",
    plan: "Pro",
    originalAmount: "$29.99",
    credits: "50 Credits",
    title: "Pro Plan",
    pic: pic,
    features: [
      "50 AI credits",
      "All AI tools",
      "Image upscaling",
      "Text to image",
      "Priority processing",
    ],
    ready: "Coming Soon",
    desc: "A flexible plan for creators who edit images regularly.",
    popular: false,
  },

  {
    amount: "$49.99",
    period: "/ year",
    plan: "Creator",
    originalAmount: "$69.99",
    credits: "150 Credits",
    title: "Creator Plan",
    pic: pic,
    features: [
      "150 AI credits",
      "All AI tools",
      "Text to image",
      "Priority processing",
      "Early access",
    ],
    ready: "Coming Soon",
    desc: "For creators who want more AI editing power throughout the year.",
    popular: false,
  },
];

const Subscription = () => {
  return (
    <section
      id="pricing"
      className="px-5 md:px-10 lg:px-16 pt-20 md:pt-24 pb-16"
    >
      {/* ================= HEADING ================= */}
      <div className="flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center border border-gray-300 bg-white px-3 py-1 mb-5">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] font-semibold text-gray-600">
            Simple Pricing
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
            lg:text-[78px]
            max-w-4xl
          "
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
        >
          Boost Your
          <br />
          Creativity.
        </h2>

        {/* Description */}
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
          Unlock the ultimate toolkit for image perfection with simple,
          flexible plans built for every creator.
        </p>
      </div>


      {/* ================= PRICING CARDS ================= */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {prices.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                group
                bg-[#f7f7f5]
                border
                border-black
                rounded-[20px]
                p-6
                md:p-7
                min-h-[490px]
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                ${item.popular ? "ring-1 ring-black" : ""}
              `}
            >

              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-3 left-6 bg-black text-white px-3 py-1 rounded-full">
                  <span className="text-[9px] uppercase tracking-widest font-semibold">
                    Most Popular
                  </span>
                </div>
              )}


              {/* Top Section */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <div className="flex items-end gap-1">

                    <h3 className="text-black text-4xl md:text-5xl font-black tracking-tight">
                      {item.amount}
                    </h3>

                    <span className="text-gray-500 text-xs mb-2">
                      {item.period}
                    </span>

                  </div>

                  <p className="text-gray-500 text-xs mt-2">
                    Original price{" "}
                    <span className="line-through">
                      {item.originalAmount}
                    </span>
                  </p>
                </div>


                {/* Plan */}
                <span className="border border-gray-400 bg-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                  {item.plan}
                </span>

              </div>


              {/* Divider */}
              <div className="border-t border-gray-300 my-6"></div>


              {/* Title + Description */}
              <div>

                <h4 className="text-black text-xl font-bold tracking-tight">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  {item.desc}
                </p>

              </div>


              {/* Features */}
              <div className="flex flex-col gap-3 mt-6">

                {item.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center shrink-0">
                      <img
                        src={item.pic}
                        className="w-3 h-3 object-contain"
                        alt=""
                      />
                    </div>

                    <span className="text-sm text-gray-800">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>


              {/* Bottom */}
              <div className="mt-auto pt-7">

                {/* Status */}
                <div className="flex justify-between items-center mb-3">

                  <span className="text-[10px] uppercase tracking-wider text-gray-400">
                    Availability
                  </span>

                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      border
                      border-dashed
                      px-2
                      py-1
                      rounded
                      ${
                        item.ready === "Coming Soon"
                          ? "text-gray-500 border-gray-400 bg-white"
                          : "text-green-700 border-green-400 bg-green-50"
                      }
                    `}
                  >
                    {item.ready}
                  </span>

                </div>


                {/* Button */}
                <button
                  disabled={item.ready === "Coming Soon"}
                  className={`
                    w-full
                    py-3
                    rounded-md
                    text-sm
                    font-semibold
                    transition
                    ${
                      item.ready === "Coming Soon"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                    }
                  `}
                >
                  {item.ready === "Coming Soon"
                    ? "Coming Soon"
                    : "Get Started →"}
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Subscription;
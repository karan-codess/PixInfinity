import React from "react";
import pic from "../assets/third.svg";

const prices = [
  {
    amount: "$9.99",
    plan: "Basic",
    originalAmount: "$19.99",
    title: "Basic Plan",
    pic: pic,
    features: ["guarantee token", "basic features", "standard support"],
    ready: "Ready to use",
    desc: "Ideal for casual users who wants to explore AI creativity.",
  },

  {
    amount: "$9.99",
    plan: "month",
    originalAmount: "$19.99",
    title: "Monthly Plan",
    pic: pic,
    features: ["guarantee token", "basic features", "standard support"],
    ready: "Coming Soon",
    desc: "Ideal for casual users.",
  },
  {
    amount: "$9.99",
    plan: "annual",
    originalAmount: "$19.99",
    title: "Annual Plan",
    pic: pic,
    features: [
      "guarantee token",
      "basic features",
      "standard support",
      "exclusive deals",
      "priority support",
    ],
    ready: "Coming Soon",
    desc: "Ideal for casual users.",
  },
];

const Subscription = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 py-32">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-5xl">
        Boost Your Creativity
      </h1>
      <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">
        Unlock the ultimate toolkit for image perfection.
      </p>
      <div className="py-24 p-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-13">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-4 hover:shadow-lg transition duration-300 h-[60vh] flex flex-col"
            >
              <div className="flex justify-between gap-20">
                <h3 className="text-black self-center font-bold text-4xl">
                  {item.amount}
                </h3>
                <p className="px-3 py-0.5 border rounded text-sm flex self-start ">
                  {item.plan}
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Original Price:{" "}
              <span className="line-through text-gray-400">{item.originalAmount}</span>
                
              </p>
              <h4 className="text-black text-lg font-semibold mt-3 ">
                {item.title}
              </h4>
              <p className="text-gray-500 text-xs mt-3">{item.desc}</p>
              <div className="flex flex-col gap-4 mt-6">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={item.pic}
                      className="w-5 h-5 bg-gray-300 rounded-full p-1"
                      alt=""
                    />
                    <span className="text-sm text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto text-right">
                <p className={`text-xs text-gray-500 inline-block border border-dashed px-1 py-0.5 rounded ${item.ready === "Coming Soon" ? 'text-red-600 border-red-400 bg-red-50' : 'text-green-600 border-green-400 bg-green-50'}`}>
                  {item.ready}
                </p>

                <button className="w-full py-3 rounded-lg bg-black text-white font-semibold text-sm hover:bg-gray-800 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;

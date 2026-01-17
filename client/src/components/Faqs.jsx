import React, { useState } from "react";

const faqs = [
  {
    question: "How does the credit system work? jhjgvvb ive jknipq bjrn",
    answer:
      "Pix Infinity uses a simple credit system. Every AI task (such as background removal, upscaling, or object removal) costs 2 credits. You just buy credits and use them whenever you need — no complicated plans.",
  },

  {
    question: "Do credits expire?",
    answer:
      "No. Your purchased credits never expire. You can use them anytime whenever you need image editing.",
  },
  {
    question: "Is Pix Infinity beginner-friendly?",
    answer:
      "Yes. Pix Infinity is built for everyone — from beginners to professionals. You don’t need any design or editing experience.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. All uploads are processed securely and are automatically deleted after processing to protect your privacy.",
  },
  {
    question: "Is Pix Infinity beginner-friendly?",
    answer:
      "Yes. Pix Infinity is built for everyone — from beginners to professionals. You don’t need any design or editing experience.",
  },
  {
    question: "Is Pix Infinity beginner-friendly?",
    answer:
      "Yes. Pix Infinity is built for everyone — from beginners to professionals. You don’t need any design or editing experience.",
  },
];

const Faqs = () => {
  const [open, setOpen] = useState(null);
  return (
    <div id="faqs" className="flex flex-col items-center px-4 md:px-16 py-20 ">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-4xl">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">
        Everything you need to know about Pix Infinity
      </p>
      <div className=" py-24 p-6 w-full max-w-4xl">
        <div className=" space-y-5 w-full">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg px-8 py-6 cursor-pointer transition hover:shadow-md hover:bg-gray-50 bg-white"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-semibold text-lg max-w-[90%]">
                  {item.question}
                </h3>
                <span className="text-2xl font-bold flex-shrink-0">
                  {open === index ? "−" : "+"}
                </span>
              </div>
              {open === index && (
                <>
                  {/* <div className="w-full h-px bg-gray-200 my-4"></div> */}
                  <p className="text-gray-800 border-t py-3 mt-4 text-base leading-normal">
                    {item.answer}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

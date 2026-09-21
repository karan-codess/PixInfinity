import React, { useState } from "react";

const faqs = [
  {
    question: "How does the credit system work?",
    answer:
      "Pix uses a simple credit system. AI editing tasks such as background removal, upscaling, object removal, and other AI tools use credits. You can purchase credits and use them whenever you need.",
  },
  {
    question: "Do my credits expire?",
    answer:
      "No. Your purchased credits never expire. You can use them anytime whenever you need image editing.",
  },
  {
    question: "Is Pix beginner-friendly?",
    answer:
      "Yes. Pix is designed for everyone — from beginners to professional creators. You don't need any advanced design or editing experience.",
  },
  {
    question: "What image editing tools does Pix offer?",
    answer:
      "Pix provides AI-powered tools such as background removal, image upscaling, text-to-image generation, text removal, object cleanup, and image uncropping.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Pix is designed with privacy in mind. Your uploaded images are processed securely and handled according to the platform's data and privacy practices.",
  },
  {
    question: "Can I use Pix for professional projects?",
    answer:
      "Absolutely. Pix can be used for social media content, product images, marketing creatives, photography, design work, and other professional image editing needs.",
  },
];

const Faqs = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faqs"
      className="bg-white px-5 md:px-10 lg:px-16 py-16 md:py-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="
            inline-flex
            items-center
            px-3 py-1

            border border-gray-300
            text-[10px]
            uppercase
            tracking-[2px]
            font-semibold
            mb-5
          "
        >
          FAQs
        </span>

        <h2
          className="
            uppercase
            text-black
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
          Frequently Asked Questions.
        </h2>

        <p className="text-gray-600 mt-5 text-sm md:text-base leading-6">
          Everything you need to know about Pix and its AI-powered
          image editing tools.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mt-12 md:mt-16">
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`
                  border border-black
                  rounded-lg
                  overflow-hidden
                  transition-all duration-300
                  ${
                    isOpen
                      ? "bg-[#f7f7f5]"
                      : "bg-white hover:bg-[#f7f7f5]"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    text-left
                    px-6
                    md:px-8
                    py-5
                    md:py-6
                    cursor-pointer
                  "
                >
                  <span className="text-[16px] md:text-[18px] font-bold">
                    {item.question}
                  </span>

                  <span
                    className="
                      shrink-0
                      w-8
                      h-8
                      rounded-md
                      border
                      border-black
                      flex
                      items-center
                      justify-center
                      text-lg
                      font-medium
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="mx-6 md:mx-8 border-t border-gray-300" />

                    <p
                      className="
                        px-6
                        md:px-8
                        py-5
                        text-sm
                        md:text-[15px]
                        leading-6
                        text-gray-600
                      "
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
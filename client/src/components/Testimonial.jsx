import React from "react";
import what from "../assets/what.avif";
import the from "../assets/the.avif";
import hell from "../assets/hell.avif";

const testi = [
  {
    pic: what,
    name: "John Doe",
    desc: "Pix Infinity makes image editing fast, easy, and incredibly powerful. Highly recommended!",
    rating: 5,
  },

  {
    pic: the,
    name: "Jane Smith",
    desc: "Pix Infinity saves me hours with fast, powerful tools like background removal and upscaling.",
    rating: 4,
  },
  {
    pic: hell,
    name: "Mike Johnson",
    desc: "Pix Infinity makes my workflow faster with powerful, easy-to-use AI tools.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-16 pt-8">
      <h1 className="text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-3xl">
        What People Say
      </h1>
      <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">
        Join thousands of designers who have elevated their images with Pix
        Infinity
      </p>
      <div className=" py-24 p-4 max-w-5xl">
        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-15">
            {testi.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div>
                    <h1 className="text-4xl font-bold">”</h1>
                    <div className="flex">
                        {Array.from({ length: item.rating }).map((_, i) => (
                            <span key={i} className= "text-black text-xl">&#9733;</span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-lg mt-2">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4">
                    <img
                    className="w-10 h-10 border-2 rounded object-cover object-center"
                    src={item.pic}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

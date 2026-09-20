import React from "react";
import All from "../components/All";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#e9e9e7] p-2 md:p-3">
      <div className="bg-white rounded-[22px] border border-black overflow-hidden">
        <Navbar />

        <All />

        <Footer />
      </div>
    </div>
  );
};

export default Services;
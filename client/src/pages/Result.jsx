import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Final from "../components/Final";

const Result = () => {
  return (
    <div className="min-h-screen bg-[#e9e9e7] p-2 md:p-3">
      <div className="min-h-[calc(100vh-16px)] bg-white rounded-[22px] border border-black overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Result */}
        <Final />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Result;
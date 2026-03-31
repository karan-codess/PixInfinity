import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Get from "./pages/Get";
import Login from "./pages/Login";


const App = () => {
  const location = useLocation();
   const isSignInPage = location.pathname === "/sign-in";
  return (

    <div className="min-h-screen bg-gradient-to-b from-white-300 via-purple-300 to-violet-300 ">
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/bgremover" element={<Get />} />
        <Route path="/services/upscale" element={<Get />} />
        <Route path="/services/text-to-image" element={<Get />} />
        <Route path="/services/remove-text" element={<Get />} />
        <Route path="/services/cleanup" element={<Get />} />
        <Route path="/services/uncrop" element={<Get />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

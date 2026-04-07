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
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const location = useLocation();
   const isSignInPage = location.pathname === "/sign-in";
  return (

    <div className="min-h-screen bg-gradient-to-b from-white-300 via-purple-300 to-violet-300 ">
      {!isSignInPage && <Navbar />}
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/get" element={<Get />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

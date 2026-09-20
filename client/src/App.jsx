import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
// import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Get from "./pages/Get";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';


const App = () => {
  const location = useLocation();

  return (

    <div>
      <ToastContainer position="bottom-right" />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
        <Route path="/get" element={<Get />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

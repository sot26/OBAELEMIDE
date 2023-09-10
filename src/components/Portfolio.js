import React from "react";
import Navbar from "./portfolio/Navbar";
import Reels from "./portfolio/Reels";
import Edit from "./portfolio/Edit";
import Shot from "./portfolio/Shot";
import { Route, Routes } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#f9f9f9] flex  flex-col justify-center">
      <div className="w-full h-auto flex justify-center my-[11px] ">
        <p className="font-bold text-[25px] text-[#ff0000] ">PORTFOLIO</p>
      </div>
      <div className="w-full h-[60px]">
        <Navbar />
      </div>
      <div className="lg:w-full w-full px-3 lg:px-0 h-full flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Edit />} />
          <Route path="reel" element={<Reels />} />
          <Route path="shot" element={<Shot />} />
        </Routes>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import Navbar from "./portfolio/Navbar";
import Reels from "./portfolio/Reels";
import Edit from "./portfolio/Edit";
import Shot from "./portfolio/Shot";
import { Route, Routes } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="w-full h-auto bg-[#f9f9f9] ">
      <div className="w-full h-auto my-[11px] ">
        <p className="font-bold text-[25px] text-[#ff0000] flex justify-center ">
          PORTFOLIO
        </p>
      </div>
      <div className="w-full h-auto mb-4 md:mb-0 md:h-[60px]">
        <Navbar />
      </div>
      <div className=" w-full px-3 lg:px-0 h-full flex ">
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

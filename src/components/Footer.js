import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-[120px] ">
      <div className="flex justify-center items-center h-full gap-4 lg:gap-24 flex-col lg:flex-row px-[20px]">
        <div className="font-bold text-[17px] flex flex-wrap justify-center items-center text-center lg:text-left">
          Copyright © {currentYear}. All rights are reserved. OBAELEMIDE
        </div>
      </div>
    </div>
  );
};

export default Footer;

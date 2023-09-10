import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive ? "border-b-2 border-[#147EFB] flex" : "";

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="text-md md:text-lg lg:text-xl flex">
        <NavLink to="/" className={activeLink}>
          <p className="mx-3">Edited Videos</p>
        </NavLink>
        <NavLink to="/reel" className={activeLink}>
          <p className="mx-3">Reels</p>
        </NavLink>
        <NavLink to="/shot" className={activeLink}>
          <p className="mx-3">Shot & Edited</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

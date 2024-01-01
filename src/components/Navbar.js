import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../asset/logo.png";
import { motion } from "framer-motion";

function Navbar() {
  var [nav, setNav] = useState(false);
  function navClick() {
    setNav(!nav);
  }

  return (
    <div className="h-[80px] pt-2 mb-4 md:pt-[0]  w-full flex justify-between items-center md:px-[50px] px-[20px]  shadow-xl bg-white z-20 ease-linear duration-100">
      <header className="flex justify-between w-full skill">
        {/* logo */}
        <div className=" font-bold text-xl sm:text-[20px] logo">
          <a
            href="/"
            className="flex justify-center items-center hover:text-[#147EFB]"
          >
            <img src={logo} className="h-[18px] md:h-[30px] w-auto" />
          </a>
        </div>

        {/* menu */}
        <div className="hidden md:flex">
          <ul className="flex ">
            <li className="px-3 cursor-pointer text-[17px] font-semibold hover:scale-105 duration-500 hover:text-[#147EFB] ">
              <Link
                to="Home"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                Home
              </Link>
            </li>
            <li className="px-3 cursor-pointer text-[17px] font-semibold hover:scale-110 duration-500 hover:text-[#147EFB] ">
              <Link
                to="About"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                About
              </Link>
            </li>
            <li className="px-3 cursor-pointer text-[17px] font-semibold hover:scale-110 duration-500 hover:text-[#147EFB] ">
              <Link
                to="Services"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                <p className="pl-2">Services</p>
              </Link>
            </li>
            <li className="px-3 cursor-pointer text-[17px] font-semibold hover:scale-110 duration-500 hover:text-[#147EFB] ">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                <p className="pl-2">Portfolio</p>
              </Link>
            </li>
            <li className="px-3 cursor-pointer text-[17px] font-semibold hover:scale-110 duration-500 hover:text-[#147EFB] ">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                <p className="pl-2">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* icons */}
        <div
          onClick={navClick}
          className="md:hidden z-20 flex justify-center items-center"
        >
          {!nav ? (
            <FaBars size={20} className=" z-20 cursor-pointer" />
          ) : (
            <FaTimes size={20} className=" z-20 cursor-pointer" />
          )}
        </div>

        {/* mobile menu */}
        {/* <Slide right> */}
        <motion.div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0 z-10  h-[100vh]  flex   w-full"
          }
        >
          <div
            className="w-[55%] bg-opacity-[25%] bg-black"
            onClick={navClick}
          ></div>
          <ul className="w-[45%] pl-8 py-10 bg-white">
            <li className="py-6 text-1xl">
              <Link onClick={navClick} to="Home" smooth={true} duration={500}>
                <span className="cursor-pointer">Home</span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <Link onClick={navClick} to="About" smooth={true} duration={500}>
                <span className="cursor-pointer">About</span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <Link
                onClick={navClick}
                to="Services"
                smooth={true}
                duration={500}
              >
                <span className="cursor-pointer"> Services </span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <Link
                onClick={navClick}
                to="Portfolio"
                smooth={true}
                duration={500}
              >
                <span className="cursor-pointer"> Portfolio </span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <Link
                onClick={navClick}
                to="Contact"
                smooth={true}
                duration={500}
              >
                <span className="cursor-pointer">Contact</span>
              </Link>
            </li>
          </ul>
        </motion.div>
        {/* </Slide> */}
      </header>
    </div>
  );
}

export default Navbar;

import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import me from "../asset/me.jpg";
import ppro from "../asset/ppro.png";
import ps from "../asset/ps.png";
import ae from "../asset/ae.png";
import davinci from "../asset/davinci.png";
import { motion } from "framer-motion";

const Home = () => {
  const imgvariant = {
    visible: {
      x: -18,
      y: -18,
    },
    hover: {
      x: 0,
      y: 0,
    },
  };
  return (
    <div className="w-full md:h-[100vh] h-full bg-[#f9f9f9]" name="Home">
      <div className="flex flex-col justify-center items-center h-full pb-10 md:pb-0 px-[15px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-[520px] lg:mr-[100px] md:text-[65px] text-[37px] text-center lg:text-left ">
            <div className=" font-extrabold mb-[19px] w-full">
              <p className="w-full ">Video Editor & </p>
              <p className="flex h-full w-full items-center justify-center lg:justify-normal mt-[-10px] ">
                Videographer
              </p>
            </div>
            <p className="md:font-medium text-[18px] mb-[25px]">
              Hi, I am Oluwatimilehin Elemide. A Video Editor and Videographer ,
              driven by Creativity 🎨 and Imagination 💡.
            </p>
            <div className="text-[30px] flex gap-[12px] justify-center lg:justify-normal">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oluwatimilehin-elemide-6b3987225"
              >
                <BsLinkedin className="hover:text-[#0072b1]" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sot26"
              >
                <BsInstagram className=" hover:text-[#e95950] " />
              </a>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-normal rounded-xl lg:border-[5px] border-black">
            <motion.img
              variants={imgvariant}
              animate="visible"
              whileHover="hover"
              src={me}
              alt="my-pic"
              className="hidden lg:flex  h-[300px] w-auto md:h-[400px] my-4 md:my-0  rounded-lg border-black"
            />
            <motion.img
              src={me}
              alt="my-pic"
              className="flex lg:hidden   h-[300px] w-auto md:h-[400px] my-4 md:my-0  rounded-lg border-black"
            />
          </div>
        </div>
        <div className="mt-[60px] flex flex-col lg:flex-row justify-center items-center">
          <div className=" flex md:mr-[30px]">
            <p className="text-[17px] font-semibold lg:mr-5 border-b-2 lg:border-b-0 border-black mb-4 lg:mb-0 ">
              Editing Tools
            </p>
            <p className="hidden lg:flex">|</p>
          </div>
          <div className="flex flex-wrap justify-center items-center lg:justify-normal lg:mx-8 gap-y-4">
            <div className="w-[65px] h-[65px] mr-6" title="Adobe Premier Pro">
              <img src={ppro} className="w-full h-full" />
            </div>
            <div className="w-[65px] h-[65px] mr-6" title="Adobe Photo Shop">
              <img src={ps} className="w-full h-full" />
            </div>
            <div className="w-[65px] h-[65px] mr-6" title="After Effect">
              <img src={ae} className="w-full h-full" />
            </div>
            <div className="w-[80px] h-[80px] " title="Davinci Resolve">
              <img src={davinci} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

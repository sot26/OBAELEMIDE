import { motion } from "framer-motion";
import React from "react";

const Shot = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.8,
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="w-full h-auto flex justify-center my-3">
      <div className="w-full md:w-auto">
        <div className="my-4">
          <p className="text-lg md:text-xl font-bold">
            These are few videos shot & edited by Me
          </p>
        </div>
        <div className="w-full md:w-auto my-9">
          <iframe
            className="w-full h-[auto] md:w-[880px] md:h-[500px]"
            src="https://www.youtube.com/embed/6FsWExmENe0?si=a5HftSiknQVkT6hA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full md:w-auto my-9">
          <iframe
            className="w-full h-[auto] md:w-[880px] md:h-[500px]"
            src="https://www.youtube.com/embed/f2I27LUrvD0?si=HbxOByMwla99UQdO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full md:w-auto">
          <iframe
            className="w-full h-[auto] md:w-[880px] md:h-[500px]"
            src="https://www.youtube.com/embed/rKA_K_qgc9w?si=NxK15y1DJgnyyQOy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1A8EdcIT39pg-FUPlkLuV6_a9KIDMeCI0"
          className="flex justify-center items-center"
        >
          <motion.button
            className="p-2 my-6  border-b-2 border-[#147EFB] text-black"
            variants={buttonVariant}
            whileHover="hover"
          >
            View more >>>
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Shot;

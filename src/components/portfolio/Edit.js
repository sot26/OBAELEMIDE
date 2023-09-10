import { motion } from "framer-motion";
import React from "react";

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
const Edit = () => {
  return (
    <div className="w-full h-auto flex  justify-center md:my-3">
      <div className="w-full md:w-auto px-6 md:px-0">
        <div className="md:my-4">
          <p className="text-sm md:text-xl font-bold mb-3">
            These are few videos edited by Me
          </p>
        </div>
        <div className="w-full md:w-auto">
          <iframe
            className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
            src="https://www.youtube.com/embed/i_FPOCTWdJ8?si=UcMOGWK4gRS-fEFM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1cuDYQhKYzhYOIunLR6UgLkdhmZBnhs8j"
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

export default Edit;

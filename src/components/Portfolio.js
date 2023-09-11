import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
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
    <div className="w-full h-auto bg-[#f9f9f9] " name="Portfolio">
      <div className="w-full h-auto my-2 md:my-[11px] ">
        <p className="font-bold text-[25px] text-[#ff0000] flex justify-center pt-6 md:pt-10 ">
          PORTFOLIO
        </p>
      </div>
      <div className="w-full h-auto flex justify-center md:my-3 px-3">
        <div className="w-full md:w-auto">
          <div className="my-2 md:my-4">
            <p className="text-[15px] sm:text-lg md:text-xl font-bold">
              These are few videos i've worked on
            </p>
          </div>
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/6FsWExmENe0?si=a5HftSiknQVkT6hA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full md:w-auto my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/i_FPOCTWdJ8?si=UcMOGWK4gRS-fEFM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full md:w-auto my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/f2I27LUrvD0?si=HbxOByMwla99UQdO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full md:w-auto">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
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
            href="https://drive.google.com/drive/folders/1-0IgtbYwBbhkdfkds0BUmhHPy1CgScks"
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
    </div>
  );
};

export default Portfolio;

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
    <div className="w-full h-auto " name="Portfolio">
      <div className="w-full h-auto py-2 md:my-[11px] ">
        <p className="font-bold text-[25px] text-[#ff0000] flex justify-center pt-6 md:pt-6 ">
          PORTFOLIO
        </p>
      </div>
      <div className="w-full h-auto flex justify-center md:my-3 px-3">
        <div className="w-full md:w-auto">
          <div className=" flex flex-col justify-center items-center">
            <p className="text-[15px] sm:text-lg md:text-xl font-bold text-center">
              Here are a few of my previous projects, or click the view more
              button to view more
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/folders/1-0IgtbYwBbhkdfkds0BUmhHPy1CgScks"
                className="flex justify-center items-center"
              >
                <motion.button variants={buttonVariant} animate="hover">
                  <button class="relative border hover:border-sky-600 mt-3 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-auto px-6 rounded-md text-lg bg-sky-800  flex justify-center items-center ">
                    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                    <p className="z-10">View More >>></p>
                  </button>
                </motion.button>
              </a>
            </p>
          </div>
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/Qnbv_vj6IQI?si=lM4JCAgakrBtoG1u"
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
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/l_AJvGM1anE?si=q-W8za1euZqxPfmM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/i_FPOCTWdJ8?si=UcMOGWK4gRS-fEFM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/FDlrkFs84eo?si=Xv16bt0atIJ3PKmD"
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
            className="flex justify-center items-center mb-6"
          >
            {/* <motion.button
              className="p-2 my-3 text-lg  border-2 rounded-xl border-[#147EFB] bg-[#147EFB] text-white"
              variants={buttonVariant}
              animate="hover"
            >
              View more >>>
            </motion.button> */}
            <motion.button variants={buttonVariant} animate="hover">
              <button class="relative border hover:border-sky-600 mt-3 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-auto px-6 rounded-md text-lg bg-sky-800  flex justify-center items-center ">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">View More >>></p>
              </button>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

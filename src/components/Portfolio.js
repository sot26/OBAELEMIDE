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
      <div className="w-full h-auto flex justify-center md:mt-3 px-3">
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
                  <button className="font-semibold text-[13px] border-[1px] rounded-xl px-4 mt-3 py-2 border-black mb-3 hover:bg-white hover:text-black bg-black text-white ">
                    VIEW MORE >>>
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
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://www.youtube.com/embed/f3KvNG95FDI?si=W8rp4CnI2y2pLsI1"
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
          <div className="w-full md:w-auto my-3 md:my-9">
            <iframe
              className="w-full h-[400px] md:w-[700px] lg:w-[880px] sm:h-[500px] "
              src="https://files.fm/f/vnabzuy4yj"
              title="YouTube video player"
              frameborder="0"
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
              <button className="font-semibold text-[13px]  border-[1px] rounded-xl px-4 mt-3 py-3 border-black mb-3 hover:bg-white hover:text-black bg-black text-white ">
                VIEW MORE >>>
              </button>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

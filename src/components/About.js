import React from "react";
import about from "../asset/about.mp4";

const About = () => {
  return (
    <div className="w-full h-auto" name="About">
      <div className="flex flex-col justify-center items-center h-full my-6 md:py-12 lg:m-0 px-[15px]">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center">
          <div className="lg:mr-[85px] flex items-center justify-center w-[80%] lg:w-[35%]  video-container">
            <video
              controls
              className="h-[500px] lg:h-[70vh] w-full md:w-auto"
              autoPlay
              muted
              loop
            >
              <source src={about} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
          <div className="max-w-[500px] flex flex-col justify-center items-center md:justify-normal">
            <p className="font-bold text-[22px] mb-[11px] text-[#ff0000] mt-6 md:mt-0">
              ABOUT ME
            </p>
            <p className="font-bold text-[25px] mb-[20px]">
              A Video Editor and Videographer in search of creative video
              production opportunities.
            </p>
            <p className="md:text-[17px] text-[15px] font-medium text-[#767676]">
              I'm Elemide Oluwatimilehin, a highly experienced video editor and
              videographer with 3+ years in the field. I create captivating
              content for clients on different platforms such as, Instagram
              Reels, YouTube(Shorts), and TikTok. I excel in the use of Adobe
              Premiere Pro and After Effects. I'm Eager to learn and based in
              Lagos, Nigeria 📍. I'm seeking innovative video production
              opportunities. Let's collaborate for something amazing! 🤩
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

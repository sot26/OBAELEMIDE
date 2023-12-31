import React from "react";
import { FiEdit } from "react-icons/fi";
import { TbMessages } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { LuLaptop2 } from "react-icons/lu";

const Services = () => {
  return (
    <div className="w-full min-h-[70vh] bg-[#f9f9f9] " name="Services">
      <div className="w-full h-auto py-2 md:my-[11px] ">
        <p className="font-bold text-[25px] text-[#ff0000] flex justify-center py-6 md:pt-10 ">
          SERVICES
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
        <div className="w-[300px] border-[1px] rounded-xl px-2 py-4 flex flex-col justify-center items-center border-black bg-white mb-8 md:mb-0">
          <p className="my-3">
            <IoVideocamOutline size={35} />
          </p>
          <p className="text-xl font-bold mb-3">Videography</p>
          <p className="text-center mb-3 font-medium">
            Crafting stunning visual stories across diverse categories:
            Weddings, Events, Commercials, Music Videos, Documentaries, and
            more. Let visuals speak volumes.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.gle/e6Xys8hVZbAskTgJ6"
            className="flex justify-center items-center"
          >
            <button className="font-semibold text-[13px] border-[1px] rounded-xl px-3 py-2 border-black mb-3 hover:bg-white hover:text-black bg-black text-white ">
              GET A QUOTE
            </button>
          </a>
        </div>

        <div className="w-[300px] border-[1px] rounded-xl px-2 py-4 flex flex-col justify-center items-center border-black  bg-white">
          <p className="my-3">
            <LuLaptop2 size={35} />
          </p>
          <p className="text-xl font-bold mb-3">Video Editing</p>
          <p className="text-center mb-3 font-medium">
            Transforming raw footage into captivating narratives. Elevate your
            story with expert editing techniques that engage and resonate with
            your audience.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.gle/e6Xys8hVZbAskTgJ6"
            className="flex justify-center items-center"
          >
            <button className="font-semibold text-[13px] border-[1px] rounded-xl px-3 py-2 border-black mb-3 hover:bg-white hover:text-black bg-black text-white ">
              GET A QUOTE
            </button>
          </a>
        </div>

        <div className="w-[300px] border-[1px] rounded-xl px-2 py-4 flex flex-col justify-center items-center border-black  bg-white">
          <p className="my-3">
            <TbMessages size={35} />
          </p>
          <p className="text-xl font-bold mb-3">Content Consulting</p>
          <p className="text-center mb-3 font-medium">
            Unleash your content's potential. Strategic consulting to maximize
            impact, elevate reach, and boost engagement, ensuring your business
            achieves success.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.gle/e6Xys8hVZbAskTgJ6"
            className="flex justify-center items-center"
          >
            <button className="font-semibold text-[13px] border-[1px] rounded-xl px-3 py-2 border-black mb-3 hover:bg-white hover:text-black bg-black text-white ">
              GET A QUOTE
            </button>
          </a>
        </div>

        {/* <div className="w-[200px]">
          <IoVideocamOutline />
          <p>
            Crafting stunning visual stories across diverse categories:
            Weddings, Events, Commercials, Music Videos, Documentaries, and
            more. Let visuals speak volumes.
          </p>
        </div>
        <div className="w-[200px]">
          <TbMessages />
          <p>
            Unleash your content's potential. Strategic consulting to maximize
            impact, elevate reach, and boost engagement, ensuring your business
            achieves success.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Services;

import React, { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-[#f9f9f9] "
      name="Contact"
    >
      <div className="w-full py-[30px] px-[20px] lg:px-[50px]">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-[#ff0000] text-[25px] font-bold mb-[10px] text-center md:text-left">
            CONTACT
          </p>
          <p className="text-[25px] my-2 font-bold  text-center md:text-left">
            Hit me up! 👇
          </p>
        </div>
        <div className="calendly">
          <InlineWidget url="https://calendly.com/kingelemide/30min" />
        </div>
        <div className="flex flex-col md:flex-row justify-center my-5 gap-6 md:gap-12">
          <div className="flex flex-wrap gap-8">
            <a
              target="_blank"
              rel="noreferrer"
              href="tel:+2349080843511"
              className="hover:text-[#147EFB] text-xs xxs:text-base"
            >
              <div className="flex">
                <div
                  className="w-[60px] h-[60px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Telephone"
                >
                  <FiPhoneCall size={22} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[17px] font-bold mb-[5px] py-[4.5px] ">
                    Call
                  </p>
                  <p className="hover:text-[#147EFB] text-[12px] xxs:text-base">
                    +2349080843511
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:kingelemide@gmail.com"
              className="hover:text-[#147EFB]"
            >
              <div className="flex">
                <div
                  className="w-[60px] h-[60px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <BiMailSend size={30} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[17px] font-bold mb-[5px] ">Email</p>
                  <p className="hover:text-[#147EFB] text-[13px] xxs:text-base">
                    kingelemide@gmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/oluwatimilehin-elemide-6b3987225/"
              className="hover:text-[#147EFB]"
            >
              <div className="flex">
                <div
                  className="w-[60px] h-[60px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <FaLinkedinIn size={30} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[17px] font-bold mb-[5px] ">LinkedIn</p>
                  <p className="hover:text-[#147EFB] text-[13px] xxs:text-base">
                    Oluwatimilehin (Temiloluwa) Elemide
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/obaelemide/"
              className="hover:text-[#147EFB]"
            >
              <div className="flex">
                <div
                  className="w-[60px] h-[60px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <FaInstagram size={30} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[17px] font-bold mb-[5px] ">Instagram</p>
                  <p className="hover:text-[#147EFB] text-[13px] xxs:text-base">
                    Obaelemide
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

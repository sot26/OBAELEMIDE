import React, { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        "template_tgn1d8i",
        form.current,
        "I4uqtUUy2XouWeFTm"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      name="Contact"
    >
      <div className="w-full  h-full py-[50px] px-[20px] lg:px-[50px]">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-[#ff0000] text-[25px] font-bold mb-[10px] text-center md:text-left">
            CONTACT
          </p>
          <p className="text-[25px] font-bold  text-center md:text-left">
            Hit me up! 👇
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center my-5 gap-6 md:gap-12">
          <div className="flex flex-col h-full gap-8">
            <a
              target="_blank"
              rel="noreferrer"
              href="tel:+2349080843511"
              className="hover:text-[#147EFB] text-xs xxs:text-base"
            >
              <div className="flex">
                <div
                  className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Telephone"
                >
                  <FiPhoneCall size={22} />
                </div>
                <div>
                  <p className="text-[17px] font-bold mb-[5px] ">Call</p>
                  <p>+2349080843511</p>
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
                  className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <BiMailSend size={30} />
                </div>
                <div>
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
                  className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <FaLinkedinIn size={30} />
                </div>
                <div>
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
                  className="w-[40px] h-[40px] xxs:w-[65px] xxs:h-[65px] rounded-full bg-white shadow-2xl flex items-center justify-center text-[#147EFB] mr-[15px]"
                  title="Send E-mail"
                >
                  <FaInstagram size={30} />
                </div>
                <div>
                  <p className="text-[17px] font-bold mb-[5px] ">Instagram</p>
                  <p className="hover:text-[#147EFB] text-[13px] xxs:text-base">
                    Obaelemide
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="justify-center flex w-auto flex-col md:flex-row">
            <form ref={form} onSubmit={sendEmail} className=" md:min-w-[450px]">
              <div className="flex flex-col ">
                <label className="text-lg">Name:</label>
                <input
                  className="border-black border-[1.4px] rounded-md p-2"
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="flex flex-col my-2">
                <label className="text-lg">Email:</label>
                <input
                  className="border-black border-[1.4px] rounded-md p-2"
                  type="email"
                  name="email"
                  placeholder="Your active Email"
                ></input>
              </div>
              <div className="flex flex-col my-2">
                <label className="text-lg">Subject:</label>
                <input
                  className="border-black border-[1.4px] rounded-md p-2"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                ></input>
              </div>
              <div className="flex flex-col my-2">
                <label className="text-lg">Message:</label>
                <textarea
                  rows={7}
                  className="border-black border-[1.4px] rounded-md p-2"
                  type="text"
                  name="message"
                  placeholder="Mesaage"
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-2 mt-2 rounded-lg bg-blue-500 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

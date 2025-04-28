import React, { useState } from "react";
// import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import { serviceId, templateId, publicKey } from "../../configs/emailjs";

import Submitbutton from "./../../components/Submitbutton/index.jsx";

const HeroSection = ({ scrollToDemo }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmisionError, setIsFormSubmisionError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get("name"), // Get name from form
      from_email: formData.get("email"), // Get email from form
      phone: formData.get("phone"), // Get phone from form (optional)
      message: formData.get("message"), // Get message from form
      to_name: "Sales Team",
    };

    setIsLoading(true);

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        // alert("Your message has been sent successfully!");
        e.target.reset(); // Reset the form after submission

        setIsLoading(false);
        setIsFormSubmitted(true);
      },
      (error) => {
        console.error("Error in sending email:", error);
        // alert("Failed to send the message. Please try again.");
        setIsFormSubmisionError(true);
      }
    );
  };

  return (
    <div className="HeroSectionContainer">
      <div className="">
        <div className="HeroSectionLeftText">
          <h1>
            Your accurate, intuitive
            <br />
            <span className="">demand forecaster.</span>
          </h1>
          <p style={{ fontFamily: "roboto" }}>
            Helping inventory planners get the right stock, in the right place,
            at <br /> the right time.
          </p>
          <button
            onClick={scrollToDemo}
            className="lg:text-lg text-white mt-8 lg:bg-[#22bbff]  lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
            style={{ fontFamily: "AllroundGothic, sans-serif" }}
          >
            Learn more
          </button>
        </div>

        <div className="ContactRightSectionHome lg:flex">
          <div className="cc flex bg-white rounded-lg pl-4">
            <div className="w-2/3">
              <form onSubmit={handleFormSubmit}>
                <h1
                  style={{ fontFamily: "AllroundGothic" }}
                  className="text-2xl text-[#141722] font-bold py-2"
                >
                  Get in touch
                </h1>
                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Name:
                </p>
                <div className="mr-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full border p-2 rounded-lg"
                    required
                  />
                </div>
                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Email:
                </p>
                <div className="mr-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full border p-2 rounded-lg"
                    required
                  />
                </div>
                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Phone:
                </p>
                <div className="mr-4">
                  <input
                    type="text"
                    name="phone"
                    className="w-full border p-2 rounded-lg"
                  />
                </div>
                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Enquiry:
                </p>
                <div className="mr-4">
                  <textarea
                    name="message"
                    cols="30"
                    className="w-full border p-2 rounded-lg"
                    rows="2"
                  ></textarea>
                </div>
                <div className="pt-2 pb-6 submit">
                  {/* <button
                    type="submit"
                    className="lg:text-lg text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg button"
                    style={{ fontFamily: "AllroundGothic, sans-serif" }}
                  >
                    Submit
                  </button> */}

                  <Submitbutton
                    completed={isFormSubmitted}
                    error={isFormSubmisionError}
                    // error={true}
                    isLoading={isLoading}
                    // isLoading={true}
                  />
                </div>
              </form>
            </div>

            <div className="w-full md:w-1/3 rightsection rounded-r-lg text-white">
              <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center lg:pt-14 gap-8">
                <a
                  href="mailto:getintouch@sapiensv2.com"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <MdEmail className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="gmail inc text-white mt-2 lg:pl-0 text-center"
                  >
                    getintouch@sapiensv2.com
                  </p>
                </a>
                <a
                  href="tel:+6498879320"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <MdContactPhone className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white gmail mt-2 text-center"
                  >
                    +6498879320
                  </p>
                </a>
                <a
                  href="https://www.google.com/search?q=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&oq=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMjc0ajBqN6gCCLACAfEFVkTh04sEovY&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <FaMapLocationDot className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white text-center gmail mt-1"
                  >
                    Sapiens v2 Ltd Enfield Street, Auckland, New Zealand
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HeroSectionBgImg">
        <img
          src="https://bookonelocal.in/cdn/Stock_Seer_Oracle.svg"
          alt="hero"
          className="desktop-image"
        />
        <img
          src="https://bookonelocal.in/cdn/Seer_phone.svg"
          alt="hero"
          className="mobile-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

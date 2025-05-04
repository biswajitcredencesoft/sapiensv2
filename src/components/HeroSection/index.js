import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import { serviceId, templateId, publicKey } from "../../configs/emailjs";

import Submitbutton from "../../components/Submitbutton/index.jsx";

const HeroSection = ({ scrollToDemo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmisionError, setIsFormSubmisionError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsFormSubmitted(false);
    setIsFormSubmisionError(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: "Sales Team",
    };

    setIsLoading(true);

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        e.target.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsLoading(false);
        setIsFormSubmitted(true);
      },
      (error) => {
        console.error("Error in sending email:", error);
        setIsFormSubmisionError(true);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="HeroSectionContainer">
      <div>
        <div className="HeroSectionLeftText">
          <h1>
            Your accurate, intuitive
            <br />
            <span>demand forecaster.</span>
          </h1>
          <p style={{ fontFamily: "roboto" }}>
            Helping inventory planners get the right stock, in the right place,
            at <br /> the right time.
          </p>
          <button
            onClick={scrollToDemo}
            className="lg:text-lg text-white mt-8 lg:bg-[#22bbff] lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block"
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
                <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                  <input
                    type="text"
                    name="name"
                    className="w-full border p-2 rounded-lg"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Email:
                </p>
                <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                  <input
                    type="email"
                    name="email"
                    className="w-full border p-2 rounded-lg"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Phone:
                </p>
                <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                  <input
                    type="text"
                    name="phone"
                    className="w-full border p-2 rounded-lg"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <p
                  className="py-2 text-[#374151]"
                  style={{ fontFamily: "roboto" }}
                >
                  Enquiry:
                </p>
                <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    cols="30"
                    className="w-full border p-2 rounded-lg"
                    rows="2"
                    required
                  ></textarea>
                </div>

                <div className="pt-2 pb-6 submit">
                  <Submitbutton
                    completed={isFormSubmitted}
                    error={isFormSubmisionError}
                    isLoading={isLoading}
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
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 cursor-pointer">
                    <MdEmail className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    className="gmail inc text-white mt-2 text-center"
                    style={{ fontFamily: "roboto" }}
                  >
                    getintouch@sapiensv2.com
                  </p>
                </a>

                <a
                  href="tel:+6498879320"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 cursor-pointer">
                    <MdContactPhone className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    className="gmail text-white mt-2 text-center"
                    style={{ fontFamily: "roboto" }}
                  >
                    +6498879320
                  </p>
                </a>

                <a
                  href="https://www.google.com/search?q=Sapiens+v2+Ltd+Enfield+Street+Auckland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 cursor-pointer">
                    <FaMapLocationDot className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    className="text-white text-center gmail mt-2 "
                    style={{ fontFamily: "roboto" }}
                  >
                    Sapiens v2 Ltd. <br />
                    Auckland, New Zealand
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
          style={{ fontFamily: "HouschkaPro" }}
        />
        <img
          src="https://bookonelocal.in/cdn/Seer_phone.svg"
          alt="hero"
          className="mobile-image"
          style={{ fontFamily: "HouschkaPro" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;

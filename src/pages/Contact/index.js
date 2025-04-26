import React, { useState } from "react";
import "./index.css";
import Faceboook from "../../assets/images/Facebook.png";
import Google from "../../assets/images/Google.png";
import LinkedIn from "../../assets/images/LinkedIn.png";

import YouTube from "../../assets/images/youtube.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone, MdEmail } from "react-icons/md";

import { serviceId, templateId, publicKey } from "./../../configs/emailjs";

import emailjs from "@emailjs/browser";
import Submitbutton from "../../components/Submitbutton";

const Contact = () => {
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
    <div className="ContactContainer  bg-[#edeeff] pb-10 md:pb-0 lg:pb-0">
      <div className="ContactLeftSection">
        <h1
          className="shadow-none"
          style={{
            fontFamily: "AllroundGothic, sans-serif",
            boxShadow: "none",
          }}
        >
          Get In Touch
        </h1>

        <p style={{ fontFamily: "roboto" }} className="md:mt-4 mt-2">
          Tell us about your retail challenges.
        </p>
        <div className="ContactLeftSectionContactDetails ml-1">
          <p style={{ fontFamily: "roboto" }}>
            <span>Phone:</span> +6498879320
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Address:</span>Sapiens v2 Ltd Enfield Street, Auckland, New
            Zealand
          </p>
          <p style={{ fontFamily: "roboto", cursor: "pointer" }}>
            <span>Email:</span>{" "}
            <a href="mailto:GetInTouch@SapiensV2.com">
              GetInTouch@SapiensV2.com
            </a>
          </p>
        </div>

        <div className="ContactLeftSectionIcons gap-2">
          <a
            href="https://www.google.com/search?q=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&oq=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMjc0ajBqN6gCCLACAfEFVkTh04sEovY&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Google} alt="Google" className="w-12 h-12" />
          </a>

          <a
            href="https://www.linkedin.com/company/sapiens-v2/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-12 h-12" />
          </a>

          <a
            href="https://www.youtube.com/@Seer-Inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTube} alt="YouTube" className="w-12 h-12" />
          </a>
        </div>
      </div>

      <div className="ContactRightSection ">
        <div className="flex rounded-l-lg bg-white rounded-lg pl-4 xl:ml-52">
          <div
            className="w-full rounded-l-lg bg-white  text-[#374151]  pl-4"
            onSubmit={handleFormSubmit}
          >
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
          {/* <div
            className="w-2/3 rounded-l-lg bg-white  text-[#374151]  pl-4 B"
            onSubmit={handleFormSubmit}
          >
            <h1
              style={{ fontFamily: "AllroundGothic" }}
              className="text-2xl get-in font-bold py-6 text-[#141722]"
            >
              Get in touch
            </h1>
            <p
              className="py-2  text-[#374151]"
              style={{ fontFamily: "roboto" }}
            >
              Name:
            </p>
            <div className="mr-4">
              <input
                type="text"
                name="name"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <p
              className="py-2  text-[#374151]"
              style={{ fontFamily: "roboto" }}
            >
              Email:
            </p>
            <div className="mr-4">
              <input
                type="email"
                name="email"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <p
              className="py-2  text-[#374151]"
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
            <p className="py-2 text-[#374151]" style={{ fontFamily: "roboto" }}>
              Enquiry:
            </p>
            <div className="mr-4">
              <textarea
                name=""
                cols="30"
                className="w-full border p-2 rounded-lg"
                rows="5"
              ></textarea>
            </div>

            <div className="pt-2 pb-6">
              <button
                className="text-lg text-white bg-[#22bbff] px-4 py-1 rounded-lg 
                 lg:block "
                style={{ fontFamily: "AllroundGothic" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div> */}

          <div className="flex rightsec justify-center rounded-r-lg items-center">
            <div className="px-2 md:10 text-[10px] md:text-[15px] rounded-r-lg text-white flex flex-col justify-center items-center text-center h-full space-y-10 lg:space-y-20 md:space-y-14">
              <div className="flex flex-col items-center">
                <a
                  href="mailto:GetInTouch@SapiensV2.com"
                  className="text-white"
                >
                  <MdEmail size={60} />
                </a>
                <p
                  style={{ fontFamily: "roboto" }}
                  className="pt-1 text-white text-[10px] md:text-[15px]"
                >
                  <a
                    href="mailto:GetInTouch@SapiensV2.com"
                    className="text-white"
                  >
                    GetInTouch@SapiensV2.com
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a href="tel:+6498879320" className="text-white">
                  <MdContactPhone size={60} />
                </a>
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-2 text-[10px] md:text-[15px]"
                >
                  <a href="tel:+6498879320" className="text-white">
                    +6498879320
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://www.google.com/search?q=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&oq=Sapiens+v2+is+a+R%26D+focused%2C+I.T.+start-up.&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMjc0ajBqN6gCCLACAfEFVkTh04sEovY&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  className="text-white"
                >
                  <FaMapLocationDot size={60} />
                </a>
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-1 text-[10px] md:text-[15px]"
                >
                  Sapiens v2 Ltd Enfield Street, Auckland, New Zealand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

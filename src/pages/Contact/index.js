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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmisionError, setIsFormSubmisionError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "email") {
      setEmailError(false); // reset on change
    }
    setIsFormSubmitted(false); // Reset thank you when user types again
    setIsFormSubmisionError(false);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(formData.email));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setEmailError(true);
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
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset the form
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
    <div className="ContactContainer bg-[#edeeff] pb-10 md:pb-0 lg:pb-0">
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
            <span>Address:</span> Sapiens v2 Ltd. Auckland, New Zealand
          </p>
          <p style={{ fontFamily: "roboto", cursor: "pointer" }}>
            <span>Email:</span>
            <a href="mailto:getintouch@sapiensv2.com">
              getintouch@sapiensv2.com
            </a>
          </p>
        </div>

        <div className="ContactLeftSectionIcons gap-2">
          <a
            href="https://www.google.com/search?q=Sapiens+v2+Ltd+Enfield+Street+Auckland"
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
            href="https://www.youtube.com/@Sapiensv2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTube} alt="YouTube" className="w-12 h-12" />
          </a>
        </div>
      </div>

      <div className="ContactRightSection">
        <div className="flex rounded-l-lg bg-white rounded-lg pl-4 xl:ml-52">
          <div className="w-full rounded-l-lg bg-white text-[#374151] pl-4">
            <form onSubmit={handleFormSubmit}>
              <h1
                style={{ fontFamily: "AllroundGothic" }}
                className="text-2xl text-[#141722] font-bold py-4"
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
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>

              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Email:{" "}
                {emailError && (
                  <b className="text-red-500 text-sm mt-1 font-normal">
                    Invalid email address.
                  </b>
                )}
              </p>
              <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={validateEmail}
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
              <div className="mr-4" style={{ fontFamily: "sans-serif" }}>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded-lg"
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
                  rows="2"
                  className="w-full border p-2 rounded-lg"
                  required
                ></textarea>
              </div>

              <div className="pt-2 pb-6 md:mr-8 submit">
                <Submitbutton
                  completed={isFormSubmitted}
                  error={isFormSubmisionError}
                  isLoading={isLoading}
                  setCompleted={setIsFormSubmitted}
                />
              </div>
            </form>
          </div>
          {/* 
          <div className="flex rightsec justify-center rounded-r-lg items-center">
            <div className="px-2 md:10 text-[10px] md:text-[15px] rounded-r-lg text-white flex flex-col justify-center items-center text-center h-full space-y-10 lg:space-y-20 md:space-y-14">
              <div className="flex flex-col items-center">
                <a
                  href="mailto:getintouch@sapiensv2.com"
                  className="text-white"
                >
                  <MdEmail size={60} />
                </a>
                <p
                  style={{ fontFamily: "roboto" }}
                  className="pt-1 text-white text-[10px] md:text-[15px]"
                >
                  <a
                    href="mailto:getintouch@sapiensv2.com"
                    className="text-white"
                  >
                    getintouch@sapiensv2.com
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
                  href="https://www.google.com/search?q=Sapiens+v2+Ltd+Enfield+Street+Auckland"
                  target="_blank"
                  className="text-white"
                >
                  <FaMapLocationDot size={60} />
                </a>
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-1 text-[10px] md:text-[15px]"
                >
                  Sapiens v2 Ltd. <br />
                  Auckland, New Zealand
                </p>
              </div>
            </div>
          </div> */}

          <div className="flex rightsec justify-center items-center rounded-r-lg">
            <div className="h-[455px] px-2 md:px-10 text-[10px] md:text-[15px] text-white flex flex-col justify-between items-center text-center">
              <div className="flex flex-col items-center">
                <a
                  href="mailto:getintouch@sapiensv2.com"
                  className="text-white mb-2"
                >
                  <MdEmail size={60} />
                </a>
                <p style={{ fontFamily: "roboto" }}>
                  <a
                    href="mailto:getintouch@sapiensv2.com"
                    className="text-white"
                  >
                    getintouch@sapiensv2.com
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a href="tel:+6498879320" className="text-white mb-2">
                  <MdContactPhone size={60} />
                </a>
                <p style={{ fontFamily: "roboto" }}>
                  <a href="tel:+6498879320" className="text-white">
                    +6498879320
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://www.google.com/search?q=Sapiens+v2+Ltd+Enfield+Street+Auckland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mb-2"
                >
                  <FaMapLocationDot size={60} />
                </a>
                <p style={{ fontFamily: "roboto" }} className="leading-tight">
                  Sapiens v2 Ltd. <br />
                  Auckland, New Zealand
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

import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";

import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const Card = ({
  imageSrc,
  desc,
  description,
  description1,
  disablePopup,
  hoverText,
  setPopupContent,
  index,
  isMobile,
}) => {
  return (
    <div
      className="relative cursor-pointer shadow-lg border border-slate-200 
                 overflow-hidden w-full sm:w-[300px] md:w-[380px] lg:w-[560px] 
                 h-[432px] rounded-lg transition-transform duration-300"
      onMouseEnter={() =>
        !disablePopup &&
        !isMobile &&
        setPopupContent({
          desc,
          description,
          description1,
          hoverText,
          index,
        })
      }
      onMouseLeave={() => !isMobile && setPopupContent(null)}
      onClick={() =>
        isMobile &&
        setPopupContent({
          desc,
          description,
          description1,
          hoverText,
          index,
        })
      }
    >
      <img
        src={imageSrc}
        alt="Card"
        className="w-full h-[216px] object-cover"
      />

      <div className="bg-[#1d2939] text-white md:p-6 p-[15px] h-[216px]">
        <p className="font-AllroundGothic font-bold text-lg mb-2">
          <span>{desc}</span> <span className="seer-title">{description}</span>
        </p>
        <p className="font-roboto text-sm sm:text-base leading-relaxed">
          {description1}
        </p>
      </div>
    </div>
  );
};

const Popup = ({ popupContent, setPopupContent, isMobile }) => {
  if (!popupContent) return null;

  const { desc, description, description1, hoverText, index } = popupContent;
  const allTexts = [description1, ...(hoverText || [])];

  const rows = [];
  for (let i = 0; i < allTexts.length; i += 2) {
    rows.push([allTexts[i], allTexts[i + 1]]);
  }

  const popupStyles =
    index === 0
      ? "max-w-[690px] h-auto mt-[50px]"
      : index === 1
      ? "max-w-[798px] h-auto mt-[5px]"
      : "max-w-[600px] md:max-w-[800px] h-auto mt-[120px]";

  const baseStyle = {
    background: "linear-gradient(180deg, #090F14 10%, #35435F 90%)",
    borderTop: "8px solid rgba(81,180,218,0.6)",
    borderLeft: "8px solid rgba(81,180,218,0.6)",
    borderTopLeftRadius: "0",
    boxShadow:
      "6px 6px 15px rgba(0,0,0,0.45), -6px -6px 15px rgba(255,255,255,0.05)",
    borderRadius: "12px",
    transform: "perspective(1000px) translateZ(0)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(38,48,68,0.8)] backdrop-blur-sm">
        <div
          className={`relative text-white p-6 w-[90%] max-h-[80%] overflow-y-auto rounded-lg`}
          style={baseStyle}
        >
          <button
            onClick={() => setPopupContent(null)}
            className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 
                       rounded-full p-2 text-white text-sm leading-none z-40"
          >
            <AiOutlineClose />
          </button>

          <h3
            className={`font-AllroundGothic font-bold mb-4 text-lg sm:text-xl`}
          >
            <span>{desc}</span>{" "}
            <span className="seer-title text-[24px]">{description}</span>
          </h3>

          <div className="space-y-3 ">
            {rows.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-1 gap-4 ">
                <p className="font-roboto text-sm sm:text-base leading-relaxed">
                  {pair[0]}
                </p>
                {pair[1] && (
                  <p className="font-roboto text-sm sm:text-base leading-relaxed">
                    {pair[1]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full flex justify-center z-30 pointer-events-none">
      <div
        className={`relative text-white p-6 ${popupStyles} 
                    overflow-y-auto transition-transform duration-300 ease-in-out scale-100 
                    pointer-events-auto animate-zoomOut`}
        style={baseStyle}
        onMouseEnter={() => setPopupContent(popupContent)}
        onMouseLeave={() => setPopupContent(null)}
      >
        <h3
          className={`font-AllroundGothic font-bold mb-4 
          ${
            index === 2
              ? "text-xl sm:text-2xl md:text-3xl"
              : "text-lg sm:text-xl md:text-2xl"
          }`}
        >
          <span>{desc}</span>{" "}
          <span className="seer-title text-[28px]">{description}</span>
        </h3>

        <div
          className={`space-y-3 ${
            index === 2 ? "flex flex-col items-center" : ""
          }`}
        >
          {rows.map((pair, idx) => (
            <div
              key={idx}
              className={`grid  ${
                index === 2
                  ? "grid-cols-1 max-w-[500px]"
                  : "grid-cols-1 md:grid-cols-2"
              } gap-4`}
            >
              <p className="font-roboto text-sm sm:text-base leading-relaxed">
                {pair[0]}
              </p>
              {pair[1] && (
                <p className="font-roboto text-sm sm:text-base leading-relaxed">
                  {pair[1]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SeerInsights = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      imageSrc: support,
      desc: "24/7",
      description: "Technical Support",
      description1:
        "We understand the perpetual demands of multi-store retailers. Our team of software engineers are on-call, round the clock, ensuring your business never stops, proactively monitoring critical processes and resolving issues in real time.",
      disablePopup: false,
      hoverText: [
        "Let our team help you plan a stress-free system upgrade/maintenance utilising our agile change management, release, and implementation methodology.",
        "We will manage vulnerabilities and mitigate risk to your software systems through our software update and patch management governance.",
        "Ensure that your users stay up to date with your systems with our training programs and self-serve knowledge base which lend to a productive workforce.",
      ],
    },
    {
      imageSrc: multi,
      desc: "",
      description: "Multi Domain Masters",
      description1:
        "Sapiens v2’s seasoned team has years of experience implementing and supporting the world’s most popular ERP platforms – Microsoft Dynamics NAV, Business Central and LS Retail across Asia-Pacific, we will partner with you from the get-go from planning, design through to implementation.",
      disablePopup: false,
      hoverText: [
        "Harness our cross-platform development expertise to scale and build value added extensions to your software suite, targeting diverse sales and customer engagement channels like web, mobile and desktop, or just simply user productivity, without reinventing the wheel.",
        "Whether it be complex system integrations or connecting diverse software ecosystems through the creation of APIs and scalable interfaces, our team will collaborate with you to develop and deliver your project ensuring adherence to timelines and budgets with demonstrable ROI.",
        "Empower you analytical thinkers and vision creators by making use of customised data insights built for your specific business drivers by our team of data scientists and delivered on the world leading Power BI application suite.",
      ],
    },
    {
      imageSrc: economial,
      desc: "",
      description: "Economical and Efficient",
      description1:
        "Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket.",
      disablePopup: false,
      hoverText: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 relative">
      <h2
        className="seer-title font-AllroundGothic font-bold text-center mb-5 text-white mt-5 
                   text-xl sm:text-2xl md:text-[2rem] leading-snug"
      >
        Unlock Potential. With Sapiens v2 Expertise.
      </h2>

      {!isMobile && popupContent && (
        <div className="fixed inset-0 bg-[rgba(38,48,68,0.20)] backdrop-blur-sm z-20 pointer-events-none"></div>
      )}

      <div className="relative flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-center pb-10  ">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            index={index}
            setPopupContent={setPopupContent}
            popupContent={popupContent}
            isMobile={isMobile}
          />
        ))}
        {popupContent && (
          <Popup
            key={popupContent.index}
            popupContent={popupContent}
            setPopupContent={setPopupContent}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
};

export default SeerInsights;

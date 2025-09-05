import React, { useState } from "react";
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
}) => {
  return (
    <div
      className="relative cursor-pointer shadow-lg border border-slate-200 
                 overflow-hidden w-full sm:w-[300px] md:w-[380px] lg:w-[560px] 
                 h-[432px] rounded-lg transition-all duration-300 transform 
                 hover:-translate-y-2 hover:scale-105"
      onMouseEnter={() =>
        !disablePopup &&
        setPopupContent({
          desc,
          description,
          description1,
          hoverText,
          index,
        })
      }
      onMouseLeave={() => setPopupContent(null)}
    >
      <img
        src={imageSrc}
        alt="Card"
        className="w-full h-[216px] object-cover"
      />

      <div className="bg-[#1d2939] text-white p-6 h-[216px]">
        <p className="font-AllroundGothic font-bold text-lg mb-2">
          <span>{desc}</span> <span className="card-title">{description}</span>
        </p>
        <p className="font-roboto text-sm sm:text-base leading-relaxed">
          {description1}
        </p>
      </div>
    </div>
  );
};

const Popup = ({ popupContent, setPopupContent }) => {
  if (!popupContent) return null;

  const { desc, description, description1, hoverText, index } = popupContent;
  const allTexts = [description1, ...(hoverText || [])];

  const rows = [];
  for (let i = 0; i < allTexts.length; i += 2) {
    rows.push([allTexts[i], allTexts[i + 1]]);
  }

  const popupStyles =
    index === 0
      ? // ? "max-w-[690px] h-[330px] "
        // : "max-w-[700px] h-[420px]";

        "max-w-[690px] h-[330px] mt-[40px]"
      : index === 1
      ? "max-w-[740px] h-[390px] mt-[15px]"
      : "max-w-[700px] h-[420px]";

  return (
    <div className="absolute top-0 left-0 w-full flex justify-center z-30 pointer-events-none">
      <div
        className={`bg-[#1d2939] text-white p-6 rounded-xl shadow-2xl ${popupStyles} overflow-y-auto border border-gray-600 transform transition-all duration-300 ease-in-out opacity-100 scale-100 pointer-events-auto mt-[6px]`}
        onMouseEnter={() => setPopupContent(popupContent)}
        onMouseLeave={() => setPopupContent(null)}
      >
        <p className="font-bold text-lg mb-2">
          {desc} <span className="card-title">{description}</span>
        </p>
        <div className="space-y-3">
          {rows.map((pair, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-sm leading-relaxed font-roboto ">{pair[0]}</p>
              {pair[1] && (
                <p className="text-sm leading-relaxed font-roboto">{pair[1]}</p>
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
      disablePopup: true,
      hoverText: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 relative">
      <h2
        className="card-title font-AllroundGothic font-bold text-center mb-5 text-white mt-5 
                   text-xl sm:text-2xl md:text-[2rem] leading-snug"
      >
        Don’t Sweat. With Sapiens v2 Support.
      </h2>

      <div className="relative flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-center pb-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            index={index}
            setPopupContent={setPopupContent}
          />
        ))}

        <Popup popupContent={popupContent} setPopupContent={setPopupContent} />
      </div>
    </div>
  );
};

export default SeerInsights;

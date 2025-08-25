import React, { useState } from "react";
import "./index.css";
import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const Card = ({ imageSrc, desc, description, previewText, hiddenText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-slate-50 shadow-gray-400">
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <p
          style={{ fontFamily: "roboto" }}
          className="text-white font-bold text-lg"
        >
          <span style={{ fontFamily: "roboto" }}>{desc}</span> {description}
        </p>
        <p style={{ fontFamily: "roboto" }} className="text-[#ffffff]">
          {previewText}
          {!isExpanded && hiddenText ? "..." : ""}
          {isExpanded && hiddenText && <span> {hiddenText}</span>}
        </p>
        {hiddenText && (
          <button
            onClick={toggleReadMore}
            className="text-blue-400 mt-2 underline hover:text-blue-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

const SeerInsights = () => {
  const cards = [
    {
      imageSrc: support,
      desc: "24 * 7",
      description: "Technical Support",
      previewText:
        "We understand the perpetual demands of multi-store retailers. Our team of software engineers are on-call, round the clock, ensuring your business never stops, proactively monitoring critical processes and resolving issues in real time.",
      hiddenText:
        " We will manage vulnerabilities and mitigate risk to your software systems through our software update and patch management governance. Let our team help you plan a stress-free system upgrade/maintenance utilising our agile change management, release, and implementation methodology. Ensure that your users stay up to date with your systems with our training programs and self-serve knowledge base which lend to a productive workforce.",
    },
    {
      imageSrc: multi,
      desc: "",
      description: "Multi Domain Masters",
      previewText:
        "Sapiens v2’s seasoned team has years of experience implementing and supporting the world’s most popular ERP platforms – Microsoft Dynamics NAV, Business Central and LS Retail across Asia-Pacific, we will partner with you from the get-go from planning, design through to implementation.",
      hiddenText:
        " Whether it be complex system integrations or connecting diverse software ecosystems through the creation of APIs and scalable interfaces, our team will collaborate with you to develop and deliver your project ensuring adherence to timelines and budgets with demonstrable ROI. Harness our cross-platform development expertise to scale and build value added extensions to your software suite, targeting diverse sales and customer engagement channels like web, mobile and desktop, or just simply user productivity, without reinventing the wheel. Empower you analytical thinkers and vision creators by making use of customised data insights built for your specific business drivers by our team of data scientists and delivered on the world leading Power BI application suite.",
    },
    {
      imageSrc: economial,
      desc: "",
      description: "Economical and Efficient",
      previewText:
        "Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket",
      hiddenText: "",
    },
  ];

  return (
    <div className="container mx-auto pt-4 my-[-80px] pb-20">
      <h2
        style={{ fontFamily: "AllroundGothic" }}
        className="font-bold text-center mb-5 text-white mt-5 fontSize"
      >
        Unlock Potential. With Sapiens v2 Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-40">
        {cards.map((card, index) => (
          <Card
            key={index}
            desc={card.desc}
            imageSrc={card.imageSrc}
            description={
              <span className="seer-description">{card.description}</span>
            }
            previewText={card.previewText}
            hiddenText={card.hiddenText}
          />
        ))}
      </div>
    </div>
  );
};

export default SeerInsights;

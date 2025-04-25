import React from "react";
import "./index.css";
import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const Card = ({ imageSrc, desc, description, description1 }) => (
  <div className="rounded-lg overflow-hidden shadow-lg border border-slate-50 shadow-gray-400">
    <img
      src={imageSrc}
      alt="Card Image"
      className="w-full h-52 object-cover "
    />
    <div className="p-6">
      <p
        style={{ fontFamily: "roboto" }}
        className="text-white font-bold text-lg"
      >
        <span style={{ fontFamily: "roboto" }}>{desc}</span> {description}
      </p>
      <p style={{ fontFamily: "roboto" }} className="text-[#ffffff]">
        {description1}
      </p>
    </div>
  </div>
);

const SeerInsights = () => {
  const cards = [
    {
      imageSrc: support,
      desc: "24/7",
      description: "Support Capability",
      description1:
        " We understand the perpetual demands of multi-store retailers. Our team of experts are on-call, round the clock, ensuring your business never stops.",
    },
    {
      imageSrc: multi,
      desc: "",
      description: "Multi Domain Masters",
      description1:
        "Sapiens V2’s seasoned team has years of experience supporting the world’s popular platforms - LS Retail, Business Central, Dynamics NAV, Azure, Microsoft .Net, Android and IOS",
    },
    {
      imageSrc: economial,
      desc: "",
      description: "Economical and Efficient",
      description1:
        "Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket",
    },
  ];

  return (
    <div className="container mx-auto pt-4 my-[-80px] pb-20">
      <h2
        style={{ fontFamily: "AllroundGothic" }}
        className="  font-bold text-center mb-5 text-white mt-5 fontSize"
      >
        Don’t Sweat. With Sapiens V2 Support.
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
            description1={card.description1}
          />
        ))}
      </div>
    </div>
  );
};

export default SeerInsights;

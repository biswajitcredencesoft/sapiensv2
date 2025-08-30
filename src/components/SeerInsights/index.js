import React, { useState } from "react";
import "./index.css";
import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const SeerInsights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      imageSrc: support,
      desc: "24 * 7",
      description: "Technical Support",
      paragraphs: [
        "We understand the perpetual demands of multi-store retailers. Our team of software engineers are on-call, round the clock, ensuring your business never stops, proactively monitoring critical processes and resolving issues in real time.",
        "We will manage vulnerabilities and mitigate risk to your software systems through our software update and patch management governance.",
        "Let our team help you plan a stress-free system upgrade/maintenance utilising our agile change management, release, and implementation methodology.",
        "Ensure that your users stay up to date with your systems with our training programs and self-serve knowledge base which lend to a productive workforce.",
      ],
    },
    {
      imageSrc: multi,
      desc: "",
      description: "Multi Domain Masters",
      paragraphs: [
        "Sapiens v2’s seasoned team has years of experience implementing and supporting the world’s most popular ERP platforms – Microsoft Dynamics NAV, Business Central and LS Retail across Asia-Pacific, we will partner with you from the get-go from planning, design through to implementation.",
        "Whether it be complex system integrations or connecting diverse software ecosystems through the creation of APIs and scalable interfaces, our team will collaborate with you to develop and deliver your project ensuring adherence to timelines and budgets with demonstrable ROI.",
        "Harness our cross-platform development expertise to scale and build value added extensions to your software suite, targeting diverse sales and customer engagement channels like web, mobile and desktop, or just simply user productivity, without reinventing the wheel.",
        "Empower you analytical thinkers and vision creators by making use of customised data insights built for your specific business drivers by our team of data scientists and delivered on the world leading Power BI application suite.",
      ],
    },
    {
      imageSrc: economial,
      desc: "",
      description: "Economical and Efficient",
      paragraphs: [
        "Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket.",
      ],
    },
  ];

  return (
    <div className="container mx-auto pt-4 my-[-80px] pb-20 bg-gray-900 min-h-screen">
      <h2
        style={{ fontFamily: "AllroundGothic" }}
        className="font-bold text-center mb-5 text-white mt-5 text-3xl"
      >
        Unlock Potential. With Sapiens v2 Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-40 items-start">
        {cards.map((card, index) => {
          const isFirstCard = index === 0;
          const isSecondCard = index === 1;
          const shouldExpand =
            (isFirstCard || isSecondCard) && hoveredIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg border border-slate-50 shadow-gray-400 flex flex-col transition-all duration-300 ${
                shouldExpand ? "h-auto" : "h-[450px]"
              }`}
              onMouseEnter={() =>
                (isFirstCard || isSecondCard) && setHoveredIndex(index)
              }
              onMouseLeave={() =>
                (isFirstCard || isSecondCard) && setHoveredIndex(null)
              }
            >
              <img
                src={card.imageSrc}
                alt="Card Image"
                className="w-full h-52 object-cover flex-shrink-0"
              />
              <div className="p-6 flex flex-col flex-1">
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white font-bold text-lg mb-2"
                >
                  <span style={{ fontFamily: "roboto" }}>{card.desc}</span>{" "}
                  <span
                    className="text-white text-[18px]"
                    style={{ fontFamily: "AllroundGothic" }}
                  >
                    {card.description}
                  </span>
                </p>

                <div
                  className="text-white transition-all duration-500 overflow-hidden"
                  style={{
                    fontFamily: "roboto",
                    maxHeight: shouldExpand ? "none" : "150px",
                  }}
                >
                  <div className={shouldExpand ? "" : "overflow-y-auto pr-2"}>
                    {card.paragraphs &&
                      (shouldExpand ? (
                        card.paragraphs.map((p, i) => (
                          <p
                            key={i}
                            className="mb-3 leading-relaxed text-[16px]"
                          >
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="leading-relaxed text-[16px]">
                          {card.paragraphs[0]}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeerInsights;

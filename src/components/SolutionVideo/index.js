import React, { useState } from "react";
import "./index2.css";
import ReactPlayer from "react-player";

import I9 from "../../assets/images/I9.png";
import I10 from "../../assets/images/I10.png";
import I11 from "../../assets/images/I11.png";

const cards = [
  {
    img: "/images/uploads/I9_white.svg",
    title: "UNIVERSALLY ADOPTABLE",
    description:
      "Regardless of your size and vertical, you can seamlessly and economically link your ERP to our service – thanks to our proprietary APIs and cloud infrastructure.",
  },
  {
    img: "/images/uploads/I10_white.svg",
    title: "ADAPTABLE TO ANY INVENTORY PROBLEM",
    description:
      "All your inventory decisions require prescience for what will sell, where and when. Our solution provides precisely this capability – alleviating manual effort, optimising stock levels and lifting the bottom line.",
  },
  {
    img: "/images/uploads/I11_white.svg",
    title: "POWERED BY PRESCIENT, ACCURATE A.I. ALGORITHMS",
    description:
      "Swathes of transactions are analysed at light-speed, along with parameters like promotions, door counts and more. Powerful, predictive formulae are automatically derived to drive your decisions for every SKU, at every store.",
  },
];

const SolutionVideo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="solution-video-container md:h-[600px] lg:h-[600px] sm:h-[1000px] ">
      <h2 className="heading"  style={{fontFamily:'AllroundGothic, sans-serif'}}>Predict. Prepare. Prosper. With Stock Seer.
      </h2>

      <div className="content-container">
        <div className="video-section">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=WBEzsF2eBYk"
            className="react-player"
             // playing={playing}
            controls={true}
          />
        </div>

        <div className="cards-section">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${hoveredCard === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-top-content">
                <div className="card-img">
                  <img src={card.img} alt={card.title} />
                </div>

                <p className="card-title lg:-mt-1 text-left ml-0 md:ml-16">
                  {card.title}
                </p>
              </div>

              <div className="card-bottom-content lg:mt-4 text-[#ffffff]">
               <p style={{ fontFamily: 'Roboto, sans-serif' }}>{card.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionVideo;

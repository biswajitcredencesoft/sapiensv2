import React, { useState, useEffect, useRef } from "react";
import ClientCard from "../ClientCard";
import ClientCard2 from "../ClientCard2";
import ClientCard3 from "../ClientCard3";
import ClientCard4 from "../ClientCard4";

import SeerLogo from "../../assets/images/client_animates.png";
// import SeerLogo2 from "../../assets/images/client_CUE.png";
import SeerLogo3 from "../../assets/images/client_glassons.png";
import SeerLogo4 from "../../assets/images/client_hallensteins.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ClientsCarousel = () => {
  const cards = [
    { component: <ClientCard key="1" />, imageUrl: SeerLogo },
    // { component: <ClientCard2 key="2" />, imageUrl: SeerLogo2 },
    { component: <ClientCard3 key="3" />, imageUrl: SeerLogo3 },
    { component: <ClientCard4 key="4" />, imageUrl: SeerLogo4 },
  ];

  const duplicateCards = (times) => {
    let duplicatedCards = [];
    for (let i = 0; i < times; i++) {
      duplicatedCards = [...duplicatedCards, ...cards];
    }
    return duplicatedCards;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const intervalRef = useRef(null);
  const cardCount = cards.length;
  const duplicatedCards = duplicateCards(500);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(handleNext, 7000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const getMiddleIndex = () => {
    return isMobile ? 0 : 1;
  };

  const computeTransform = () => {
    if (activeIndex >= cardCount * 7000) {
      setActiveIndex((prevIndex) => (prevIndex % cardCount) + cardCount);
    }
    if (activeIndex < 0) {
      setActiveIndex((prevIndex) => prevIndex + cardCount);
    }
    return `translateX(-${
      (activeIndex % (cardCount * 7000)) * (100 / (isMobile ? 1 : 3))
    }%)`;
  };

  return (
    <div className="carousel-container relative mb-10 bg-[#edeeff]" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
      <p style={{ fontFamily: 'AllroundGothic' }} className=" text-[#000000] text-center flex font-semibold align-center mt-14 justify-center text-xl md:text-3xl lg:text-3xl">
        Partners Predicting Preparing and Prospering with Sapiens V2.
      </p>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-200`}
          style={{ transform: computeTransform() }}
        >
          {duplicatedCards.map((card, index) => {
            const isMiddleCard =
              index % cardCount ===
              ((activeIndex % cardCount) + getMiddleIndex()) % cardCount;

            return (
              <div
                key={index}
                className={`flex-none ${
                  isMobile ? "w-full" : "w-full md:w-1/3"
                } px-2`}
              >
                {isMiddleCard ? (
                  <div
                    className={`${
                      isMobile ? "w-full" : "full-width-card"
                    } mt-16`}
                  >
                    {card.component}
                  </div>
                ) : (
                  <div
                    className={`${
                      isMobile
                        ? "w-full"
                        : "h-[190px] w-full md:w-[260px] mx-auto md:ml-[120px] mt-[300px] md:mt-[160px]"
                    } pr-4 flex justify-center items-center`}
                  >
                    <img
                      src={card.imageUrl}
                      alt={`Card ${index % cardCount}`}
                      className={`${
                        isMobile ? "w-full" : "w-[400px]"
                      } object-cover font-HouschkaPro`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full text-sm md:text-xl lg:mt-20 md:mt-4 mt-20 hover:transition-all hover:duration-150"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full text-sm md:text-xl lg:mt-20 md:mt-4 mt-20 hover:transition-all hover:duration-150"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ClientsCarousel;

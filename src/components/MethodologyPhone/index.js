import React, { useState, useRef, useEffect } from "react";

const originalAreas2 = [
  { coords: "700,100,70" },
  { coords: "1150,200,70" },
  { coords: "1250,400,70" },
  { coords: "1150,640,70" },
  { coords: "700,750,70" },
  { coords: "350,640,70" },
  { coords: "150,400,70" },
  { coords: "320,190,70" },
];

const MethodologyPhone = () => {
  const [activeArea2, setActiveArea2] = useState(null);
  const [areas2, setAreas2] = useState(originalAreas2);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const updateAreas2 = () => {
      if (imageRef2.current) {
        const { width, height } = imageRef2.current.getBoundingClientRect();
        const widthRatio = width / 1448;
        const heightRatio = height / 840;

        const newAreas = originalAreas2.map((area) => {
          const [x, y, r] = area.coords.split(",").map(Number);
          return {
            coords: `${x * widthRatio},${y * heightRatio},${r * widthRatio}`,
          };
        });

        setAreas2(newAreas);
      }
    };

    updateAreas2();
    window.addEventListener("resize", updateAreas2);
    return () => window.removeEventListener("resize", updateAreas2);
  }, []);

  const handleMouseEnter2 = (index) => {
    setActiveArea2(index);
  };

  const handleMouseLeave2 = () => {
    setActiveArea2(null);
  };

  const handleClick2 = (index) => {
    setActiveArea2(index);
  };

  const handleTouchStart2 = (index) => {
    setActiveArea2(index);
  };

  const handleTouchEnd2 = () => {
    setActiveArea2(null);
  };

  return (
    <div>
      <div className="w-full mx-auto relative pt-20 lg:mb-[-90px] mb-[-30px]">
        <div className="w-full mx-auto max-w-screen-3xl relative">
          <div className="flex flex-wrap gap-10 justify-center text-center relative">
            <div className="relative">
              <img
                ref={imageRef2}
                id="seer1"
                src="/images/uploads/Seer_Cycle_wording_desktop.svg"
                height={840}
                width={1000}
                alt="seer methodology"
                className="block"
              />
            </div>
            <div className="relative">
              <img
                ref={imageRef2}
                id="seer2"
                src="/images/uploads/Seer_Cycle-01_cycle_only.svg"
                height={840}
                width={1448}
                alt="seer methodology"
                useMap="#methodology"
                className="block"
              />
              <map name="methodology">
                {areas2.map((area, index) => (
                  <area
                    key={index}
                    shape="circle"
                    coords={area.coords}
                    alt={`area-${index + 1}`}
                    onMouseEnter={() => handleMouseEnter2(index)}
                    onMouseLeave={handleMouseLeave2}
                    onClick={() => handleClick2(index)}
                    onTouchStart={() => handleTouchStart2(index)}
                    onTouchEnd={handleTouchEnd2}
                  />
                ))}
              </map>
              {activeArea2 !== null && (
                <img
                  src={`/images/uploads/Seer_Cycle-0${activeArea2 + 2}_cycle_only.svg`}
                  height={840}
                  width={1448}
                  alt={`highlighted area ${activeArea2 + 1}`}
                  className="absolute top-0 left-0 transition-opacity duration-300"
                  style={{
                    opacity: 1,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyPhone;

import React, { useState, useRef, useEffect } from "react";

const originalAreas = [
  { coords: "700,100,70" },
  { coords: "1150,200,70" },
  { coords: "1250,400,70" },
  { coords: "1150,640,70" },
  { coords: "700,750,70" },
  { coords: "350,640,70" },
  { coords: "150,400,70" },
  { coords: "320,190,70" },
];

const RADIUS_MULTIPLIER = 2.5; // Adjust this multiplier to increase the hover area

const Methodology = () => {
  const [activeArea, setActiveArea] = useState(null);
  const [areas, setAreas] = useState(originalAreas);
  const imageRef = useRef(null);

  const updateAreas = () => {
    if (imageRef.current) {
      const { width, height } = imageRef.current.getBoundingClientRect();
      const widthRatio = width / 1448;
      const heightRatio = height / 840;

      const newAreas = originalAreas.map((area) => {
        const [x, y, r] = area.coords.split(",").map(Number);
        return {
          coords: `${x * widthRatio},${y * heightRatio},${r * widthRatio * RADIUS_MULTIPLIER}`,
        };
      });

      setAreas(newAreas);
    }
  };

  useEffect(() => {
    updateAreas();
    window.addEventListener("resize", updateAreas);
    return () => window.removeEventListener("resize", updateAreas);
  }, []);

  useEffect(() => {
    updateAreas();
  }, [imageRef.current]);

  const handleMouseEnter = (index) => {
    setActiveArea(index);
  };

  const handleMouseLeave = () => {
    setActiveArea(null);
  };

  const handleClick = (index) => {
    setActiveArea(index);
  };

  return (
    <div>
      <div className="w-full mx-auto mb-2">
        <div className="w-full mx-auto max-w-screen-3xl">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-center text-center relative">
            <div className="relative hidden md:block">
              <img
                id="seer"
                src="/images/uploads/Seer_Cycle_wording_desktop.svg"
                height={840}
                width={1000}
                alt="seer methodology"
                useMap="#methodology"
                className="block"
              />
            </div>
            <div className="relative block md:hidden">
              <img
                id="seer"
                src="/images/uploads/Seer_Cycle_wording_phone.svg"
                height={840}
                width={1000}
                alt="seer methodology"
                useMap="#methodology"
                className="block"
              />
            </div>
            <div className="relative py-4 px-4">
              <img
                ref={imageRef}
                id="seer"
                src="/images/uploads/Seer_Cycle-01_cycle_only.svg"
                height={840}
                width={1448}
                alt="seer methodology"
                useMap="#methodology"
                className="block"
                onLoad={updateAreas} // Update areas when the image is loaded
              />
              <map name="methodology">
                {areas.map((area, index) => (
                  <area
                    key={index}
                    shape="circle"
                    coords={area.coords}
                    alt={`area-${index + 1}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </map>
              {activeArea !== null && (
                <img
                  src={`/images/uploads/Seer_Cycle-0${activeArea + 2}_cycle_only.svg`}
                  height={840}
                  width={1448}
                  alt={`highlighted area ${activeArea + 1}`}
                  className={`absolute py-4 px-4 top-0 left-0 transition-opacity duration-300`}
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

export default Methodology;

// import React, { useEffect, useState } from "react";
// import "./AppOne.css"; // Import your CSS file for styling
// import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon from a library like react-icons

// const Circle = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const descriptions = [
//     "We extract your data into your tenancy in our cloud solution using our secure API's.",
//     "We annotate and enhance your data per your blueprint.",
//     "Using our Rapid Application Development environment, we build your application set according to your blueprint.",
//     "We release in a restricted deployment environment where you can use the solution to build confidence in Stock Seer and Seer insights.",
//     "We go live.",
//     "We repeat the process for new opportunities, creating a culture of innovation.",
//     "We understand your requirements and the opportunities within your business that give you the greatest return.",
//     "We craft and implementation blueprint that is customized to your exact needs and get your sign-off.",
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const calculateCirclePosition = (index, totalCircles) => {
//     const angle = (index / totalCircles) * 2 * Math.PI;
//     // const radius = 240;
//     let radius, x, y;
//     // const x = 200 + radius * Math.cos(angle);
//     // const y = 200 + radius * Math.sin(angle);
//     if (windowWidth <= 767) {
//       // Mobile view
//       radius = 130;
//       x = 100 + radius * Math.cos(angle);
//       y = 100 + radius * Math.sin(angle);
//     } else {
//       // Desktop and tablet view
//       radius = 240;
//       x = 200 + radius * Math.cos(angle);
//       y = 200 + radius * Math.sin(angle);
//     }
//     return { x, y };
//   };

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   const CircleArrow = ({ start, end, visible }) => {
//     if (!visible) return null;

//     const { x: startX, y: startY } = calculateCirclePosition(start, 8);
//     const { x: endX, y: endY } = calculateCirclePosition(end, 8);

//     return (
//       <FaArrowRight
//         className="arrow-icon"
//         style={{
//           position: "absolute",
//           top: startY - 5, // Adjust the position of the arrow icon
//           left: startX - 15, // Adjust the position of the arrow icon
//           transform: `rotate(${start * (360 / 8)}deg)`, // Rotate the arrow
//           width: "20px", // Adjust arrow width
//           height: "20px", // Adjust arrow height
//         }}
//       />
//     );
//   };

//   const arrows = Array.from({ length: 8 }, (_, index) => (
//     <CircleArrow
//       key={index}
//       start={index}
//       end={(index + 1) % 8}
//       visible={true}
//     />
//   ));

//   const circles = Array.from({ length: 8 }, (_, index) => {
//     const { x, y } = calculateCirclePosition(index, 8);
//     return (
//       <div
//         key={index}
//         className={`sub-circle ${hoveredIndex === index ? "hovered" : ""}`}
//         style={{ top: y, left: x }}
//         onMouseEnter={() => handleHover(index)}
//         onMouseLeave={handleLeave}
//       >
//         <div
//           key={index}
//           className={`smallCircle  ${hoveredIndex === index ? "hovered" : ""}`}
//           onMouseEnter={() => handleHover(index)}
//           onMouseLeave={handleLeave}
//         >
//           {/* 1 */}
//           {index == 6 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily:'Comfortaa, sans-serif', fontSize: "8px" }}
//               className="text-white lg:text-sm  text-center"
//             >
//               1.
//               <br /> Identify Opportunity
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 6 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               1.
//               <br /> Identify Opportunity
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 2 */}
//           {index == 7 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily: 'gothhic-book', fontSize: "7px" }}
//               className="text-white  text-center"
//             >
//               2.
//               <br /> Create your Blueprint
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 7 && windowWidth > 767 ? (
//             <p className="text-white text-sm  text-center" style={{fontFamily:'gothic-book'}} >
//               2.
//               <br /> Create your Blueprint
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 3 */}
//           {index == 0 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily: 'gothic-book', fontSize: "8px" }}
//               className="text-white text-center"
//             >
//               3.
//               <br /> Extract your Data
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 0 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               3.
//               <br /> Extract your Data
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 4 */}
//           {index == 1 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily: 'gothic-book', fontSize: "8px" }}
//               className="text-white  text-center"
//             >
//               4.
//               <br /> Enhance your Data
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 1 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               4.
//               <br /> Enhance your Data
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 5 */}
//           {index == 2 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily: 'gothic-book', fontSize: "7px" }}
//               className="text-white text-center"
//             >
//               5.
//               <br /> Implement your Algorithm
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 2 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               5.
//               <br /> Implement your Algorithm
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 6 */}
//           {index == 3 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily:'gothic-book', fontSize: "8px" }}
//               className="text-white text-center"
//             >
//               6.
//               <br /> Establish Confidence
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 3 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               6.
//               <br /> Establish Confidence
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 7 */}
//           {index == 4 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily:'gothic-book', fontSize: "8px" }}
//               className="text-white text-center"
//             >
//               7.
//               <br /> Go Live
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 4 && windowWidth > 767 ? (
//             <p className="text-white text-sm  text-center" style={{fontFamily:'gothic-book'}} >
//               7.
//               <br /> Go Live
//             </p>
//           ) : (
//             ""
//           )}
//           {/* 8 */}
//           {index == 5 && windowWidth <= 767 ? (
//             <p
//               style={{ fontFamily:'gothic-book', fontSize: "8px" }}
//               className="text-white  text-center"
//             >
//               8.
//               <br /> Refine and Repeat
//             </p>
//           ) : (
//             ""
//           )}
//           {index == 5 && windowWidth > 767 ? (
//             <p className="text-white text-sm text-center" style={{fontFamily:'gothic-book'}} >
//               8.
//               <br /> Refine and Repeat
//             </p>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="main-circle" onMouseLeave={handleLeave}>
//       {/* {arrows} */}
//       <div>
//         {windowWidth > 767 ? (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description text-lg px-20"  style={{fontFamily:'Comfortaa, sans-serif'}} >
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p
//                 className="description2 text-3xl font-bold  px-20"
//                 style={{ color: "#35435F", fontFamily:'gothic-book' }}
//               >
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         ) : (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description lg:text-lg md:text-lg text-xs lg:px-20 md:px-20 px-12 -mt-24"  style={{fontFamily:'roboto'}} >
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p
//                 style={{fontFamily:'roboto', color: "#35435F" }}
//                 className="description2 lg:text-3xl md:text-3xl text-lg font-bold  lg:px-20 md:px-20 -mt-28"
//               >
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Circle;












// import React, { useEffect, useState } from "react";
// import "./AppOne.css"; // Import your CSS file for styling
// import { ReactComponent as DottedArrow } from './dottedArrow.svg'

// const Circle = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const descriptions = [
//     "We extract your data into your tenancy in our cloud solution using our secure API's.",
//     "We annotate and enhance your data per your blueprint.",
//     "Using our Rapid Application Development environment, we build your application set according to your blueprint.",
//     "We release in a restricted deployment environment where you can use the solution to build confidence in Stock Seer and Seer insights.",
//     "We go live.",
//     "We repeat the process for new opportunities, creating a culture of innovation.",
//     "We understand your requirements and the opportunities within your business that give you the greatest return.",
//     "We craft and implementation blueprint that is customized to your exact needs and get your sign-off.",
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const calculateCirclePosition = (index, totalCircles) => {
//     const angle = (index / totalCircles) * 2 * Math.PI;
//     let radius, x, y;
//     if (windowWidth <= 767) {
//       // Mobile view
//       radius = 130;
//       x = 100 + radius * Math.cos(angle);
//       y = 100 + radius * Math.sin(angle);
//     } else {
//       // Desktop and tablet view
//       radius = 240;
//       x = 200 + radius * Math.cos(angle);
//       y = 200 + radius * Math.sin(angle);
//     }
//     return { x, y };
//   };

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   const CircleArrow = ({ start, end, visible }) => {
//     if (!visible) return null;

//     const { x: startX, y: startY } = calculateCirclePosition(start, 8);
//     const { x: endX, y: endY } = calculateCirclePosition(end, 8);

//     return (
//       <DottedArrow
//         style={{
//           position: "absolute",
//           top: (startY + endY) / 2,
//           left: (startX + endX) / 2,
//           transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`,
//         }}
//       />
//     );
//   };

//   const arrows = Array.from({ length: 8 }, (_, index) => (
//     <CircleArrow
//       key={index}
//       start={index}
//       end={(index + 1) % 8}
//       visible={true}
//     />
//   ));

//   const circles = Array.from({ length: 8 }, (_, index) => {
//     const { x, y } = calculateCirclePosition(index, 8);
//     return (
//       <div
//         key={index}
//         className={`sub-circle ${hoveredIndex === index ? "hovered" : ""}`}
//         style={{ top: y, left: x }}
//         onMouseEnter={() => handleHover(index)}
//         onMouseLeave={handleLeave}
//       >
//         <div
//           key={index}
//           className={`smallCircle  ${hoveredIndex === index ? "hovered" : ""}`}
//           onMouseEnter={() => handleHover(index)}
//           onMouseLeave={handleLeave}
//         >
//           {/* Circle content logic here */}
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="main-circle" onMouseLeave={handleLeave}>
//       {arrows}
//       <div>
//         {windowWidth > 767 ? (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description text-lg px-20" style={{ fontFamily:'Comfortaa, sans-serif' }}>
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p className="description2 text-3xl font-bold  px-20" style={{ color: "#35435F", fontFamily:'gothic-book' }}>
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         ) : (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description lg:text-lg md:text-lg text-xs lg:px-20 md:px-20 px-12 -mt-24" style={{ fontFamily:'roboto' }}>
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p className="description2 lg:text-3xl md:text-3xl text-lg font-bold lg:px-20 md:px-20 -mt-28" style={{ fontFamily:'roboto', color: "#35435F" }}>
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Circle;





// import React, { useEffect, useState } from "react";
// import "./AppOne.css"; // Import your CSS file for styling
// import { ReactComponent as DottedArrow } from './dottedArrow.svg'

// const Circle = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const descriptions = [
//     "We understand your requirements and the opportunities within your business that give you the greatest return.",
//     "We craft and implementation blueprint that is customized to your exact needs and get your sign-off.",
//     "We extract your data into your tenancy in our cloud solution using our secure API's.",
//     "We annotate and enhance your data per your blueprint.",
//     "Using our Rapid Application Development environment, we build your application set according to your blueprint.",
//     "We release in a restricted deployment environment where you can use the solution to build confidence in Stock Seer and Seer insights.",
//     "We go live.",
//     "We repeat the process for new opportunities, creating a culture of innovation.",
//   ];

//   const circleText = [
//     "1.\nIdentify\nOpportunity",
//     "2.\nCreate your\nBlueprint",
//     "3.\nExtract your\nData",
//     "4.\nEnhance your\nData",
//     "5.\nImplement your\nAlgorithm",
//     "6.\nEstablish\nConfidence",
//     "7.\nGo Live",
//     "8.\nRefine and\nRepeat",
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const calculateCirclePosition = (index, totalCircles) => {
//     const angle = (index / totalCircles) * 2 * Math.PI;
//     let radius, x, y;
//     if (windowWidth <= 767) {
//       // Mobile view
//       radius = 130;
//       x = 100 + radius * Math.cos(angle);
//       y = 100 + radius * Math.sin(angle);
//     } else {
//       // Desktop and tablet view
//       radius = 240;
//       x = 200 + radius * Math.cos(angle);
//       y = 200 + radius * Math.sin(angle);
//     }
//     return { x, y };
//   };

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   const CircleArrow = ({ start, end, visible }) => {
//     if (!visible) return null;

//     const { x: startX, y: startY } = calculateCirclePosition(start, 8);
//     const { x: endX, y: endY } = calculateCirclePosition(end, 8);

//     return (
//       <DottedArrow
//         style={{
//           position: "absolute",
//           top: (startY + endY) / 2,
//           left: (startX + endX) / 2,
//           transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`,
//         }}
//       />
//     );
//   };

//   const arrows = Array.from({ length: 8 }, (_, index) => (
//     <CircleArrow
//       key={index}
//       start={index}
//       end={(index + 1) % 8}
//       visible={true}
//     />
//   ));

//   const circles = Array.from({ length: 8 }, (_, index) => {
//     const { x, y } = calculateCirclePosition(index, 8);
//     return (
//       <div
//         key={index}
//         className={`sub-circle ${hoveredIndex === index ? "hovered" : ""}`}
//         style={{ top: y, left: x }}
//         onMouseEnter={() => handleHover(index)}
//         onMouseLeave={handleLeave}
//       >
//         <div
//           key={index}
//           className={`smallCircle ${hoveredIndex === index ? "hovered" : ""}`}
//           onMouseEnter={() => handleHover(index)}
//           onMouseLeave={handleLeave}
//         >
//           <p className="circle-text">{circleText[index]}</p>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="main-circle" onMouseLeave={handleLeave}>
//       {arrows}
//       <div>
//         {windowWidth > 767 ? (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description text-lg px-20" style={{ fontFamily:'Comfortaa, sans-serif' }}>
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p className="description2 text-3xl font-bold px-20" style={{ color: "#35435F", fontFamily:'gothic-book' }}>
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         ) : (
//           <div>
//             {circles}
//             {hoveredIndex !== null ? (
//               <div className="description lg:text-lg md:text-lg text-xs lg:px-20 md:px-20 px-12 -mt-24" style={{ fontFamily:'roboto' }}>
//                 {descriptions[hoveredIndex]}
//               </div>
//             ) : (
//               <p className="description2 lg:text-3xl md:text-3xl text-lg font-bold lg:px-20 md:px-20 -mt-28" style={{ fontFamily:'roboto', color: "#35435F" }}>
//                 SSR Methodology
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Circle;






import React, { useEffect, useState } from "react";
import "./AppOne.css"; 
import { ReactComponent as DottedArrow } from './dottedArrow.svg';

const Circle = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const descriptions = [

    "We extract your data into your tenancy in our cloud solution using our secure API's.",
    "We annotate and enhance your data per your blueprint.",
    "Using our Rapid Application Development environment, we build your application set according to your blueprint.",
    "We release in a restricted deployment environment where you can use the solution to build confidence in Stock Sapiens v2.",
    "We go live.",
    "We repeat the process for new opportunities, creating a culture of innovation.",
    "We understand your requirements and the opportunities within your business that give you the greatest return.",
    "We craft and implementation blueprint that is customized to your exact needs and get your sign-off.",
    
  ];

  const circleText = [
  

    "3.\nExtract your\nData",
    "4.\nEnhance your\nData",
    "5.\nImplement your\nAlgorithm",
    "6.\nEstablish\nConfidence",
    "7.\nGo Live",
    "8.\nRefine and\nRepeat",
    "1.\nIdentify\nOpportunity",
    "2.\nCreate your\nBlueprint",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const calculateCirclePosition = (index, totalCircles) => {
    const angle = (index / totalCircles) * 2 * Math.PI;
    let radius, x, y;
    if (windowWidth <= 767) {
      // Mobile view
      radius = 130;
      x = 100 + radius * Math.cos(angle);
      y = 100 + radius * Math.sin(angle);
    } else {
      // Desktop and tablet view
      radius = 240;
      x = 200 + radius * Math.cos(angle);
      y = 200 + radius * Math.sin(angle);
    }
    return { x, y };
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const CircleArrow = ({ start, end, visible }) => {
    if (!visible) return null;

    const { x: startX, y: startY } = calculateCirclePosition(start, 8);
    const { x: endX, y: endY } = calculateCirclePosition(end, 8);

    return (
      <DottedArrow
        style={{
          position: "absolute",
          top: (startY + endY) / 2,
          left: (startX + endX) / 2,
          transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`,
        }}
      />
    );
  };

  const arrows = Array.from({ length: 8 }, (_, index) => (
    <CircleArrow
      key={index}
      start={index}
      end={(index + 1) % 8}
      visible={true}
    />
  ));

  const circles = Array.from({ length: 8 }, (_, index) => {
    const { x, y } = calculateCirclePosition(index, 8);
    return (
      <div
        key={index}
        className={`sub-circle ${hoveredIndex === index ? "hovered" : ""}`}
        style={{ top: y, left: x }}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={handleLeave}
      >
        <div
          key={index}
          className={`smallCircle text-sm text-center ${hoveredIndex === index ? "hovered" : ""}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <p className="circle-text">{circleText[index]}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="main-circle" onMouseLeave={handleLeave}>
      {arrows}
      <div>
        {windowWidth > 767 ? (
          <div>
            {circles}
            {hoveredIndex !== null ? (
              <div className="description text-lg px-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
                {descriptions[hoveredIndex]}
              </div>
            ) : (
              <p className="description2 text-3xl font-bold px-20" style={{ color: "#35435F", fontFamily: 'AllroundGothic' }}>
                SSR Methodology
              </p>
            )}
          </div>
        ) : (
          <div>
            {circles}
            {hoveredIndex !== null ? (
              <div className="description lg:text-lg md:text-lg text-xs lg:px-20 md:px-20 px-12 -mt-24" style={{ fontFamily: 'roboto' }}>
                {descriptions[hoveredIndex]}
              </div>
            ) : (
              <p className="description2 lg:text-3xl md:text-3xl text-lg font-bold lg:px-20 md:px-20 -mt-28" style={{ fontFamily: 'roboto', color: "#35435F" }}>
                SSR Methodology
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Circle;



import React, { useState } from "react";
// import Person1 from "../../assets/images/Joshua.webp";
// import Person2 from "../../assets/images/Roland.webp";
// import Person3 from "../../assets/images/damien.webp";
import Person1 from "../../assets/images/Joshua1.svg";
import Person2 from "../../assets/images/Roland1.svg";
import Person3 from "../../assets/images/Damien1.svg";

import Person4 from "../../assets/images/Kanika.svg";
import Person5 from "../../assets/images/Vidhi.svg";
import Person6 from "../../assets/images/Shruti.svg";

import "./index.css";
const MeetTheTeam = () => {
  const details = [
    {
      image: Person1,
      name: "Joshua D’Silva",
      designation: "Founder",
      description:
        "Josh holds an accredited mechatronics and electronics engineering degree from the Australian National University, however, he has completed projects in domains as different as materials science and computer vision. Having gained an appreciation for deep-learning’s potency early in his career, he has since focused his versatile aptitudes towards the mastery of this discipline, and currently researches, designs and implements the algorithms at the core of Sapiens v2's solutions.",
    },
    {
      image: Person2,
      name: "Roland D’Silva",
      designation: "Founder",
      description:
        "With a degree in Mathematics and Computer Science, Roland has thrived at the juncture of software engineering and retail for 25+ years, having architected and managed complex implementations that have aligned technology with the customer's business goals. Roland has also been mentoring businesses and start-ups in their quest for market growth and is often the go-to person when complex issues need a sounding board.",
    },
    {
      image: Person5,
      name: "Vidhi Jamar",
      designation: "VP Sales",
      description:
        "Tasked with business development, Vidhi brings panache to her engagement with her customers and network.  Adept at identifying tangible workable business solutions that harness technology and in particular AI as an enabler she will help you reimagine your business potential and achieve measurable ROI. With deep dive insight into technologies both present and emerging she is an ally in your business journey. After work you may spot her chilling out at a classical music recital or at an award-winning winery.",
    },
    {
      image: Person3,
      name: "Damien Anselmi",
      designation: "Consultant",
      description:
        "A chartered accountant by qualification, Damien brings more than 35 years of retail technology experience to Sapiens v2, specialising in Data Design, Analytics, and Data Visualization. Damien's focus at Sapiens v2 is Data Development, and he is a key contributor to product strategy and design.",
    },
    {
      image: Person4,
      name: "Kanika Mathur",
      designation: "Lead Technical Consultant",
      description:
        "Kanika is the quintessential software geek with a penchant for all things technology. With her dedication for implementing sensible solutions using the talent and resource available with the customer, Kanika will ensure the end outcome aligns with the customer’s vision and goal. Kanika has unrivalled experience with the Microsoft technology stack and Business Central platforms. She is also a keen exponent of the classical Indian dance form.",
    },
    {
      image: Person6,
      name: "Shruti Wadhwa",
      designation: "Principal Advisor Projects",
      description:
        "Shruti’s background as a software engineer coupled with her business focused, people centric approach has allowed her to successfully lead and implement a myriad of projects across multiple verticals. As a people leader who communicates clearly and is an astute problem solver, the success of a project is all but guaranteed. When not working Shruti may be spotted trekking some picturesque trail on the planet.",
    },
  ];
  return (
    <div className="pb-16">
      <p
        style={{ fontFamily: "AllroundGothic" }}
        className="lg:text-5xl md:text-4xl text-[#000000] text-xl text-center font-bold lg:mt-4 md:mt-4 py-4"
      >
        Meet The Team
      </p>
      <div className="grid md:grid-cols-3 md:gap-16 lg:mt-10 md:mt-10 gap-5 mx-3 md:mx-10 justify-content-center ">
        {details.map((s, i) => {
          return (
            <div key={i} className="lg:w-full md:px-0 px-10  ">
              <div className="">
                <img src={s.image} className=" w-full mx-auto rounded-xl" />
              </div>
              <div className="text-center mt-3">
                <p
                  style={{ fontFamily: "AllroundGothic" }}
                  className="lg:text-4xl md:text-4xl text-2xl text-[#000000] font-bold pb-2"
                >
                  {s.name}
                </p>
                <p
                  style={{ fontFamily: "AllroundGothic" }}
                  className="text-lg text-gray-700 font-semibold pb-2 "
                >
                  {s.designation}
                </p>
                {/* <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    letterSpacing: "0.25px",
                    wordSpacing: "0px",
                  }}
                  className="text-justify text-[#000000] text-[17px] leading-[1.8]"
                >
                  {s.description}
                </p> */}

                {/* <p className="team-description">{s.description}</p> */}
                <p
                  className={`team-description ${
                    s.name === "Damien Anselmi" ? "damien-description" : ""
                  }`}
                >
                  {s.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetTheTeam;

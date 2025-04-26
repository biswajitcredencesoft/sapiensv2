import React, { useState } from "react";
import Person1 from "../../assets/images/Joshua.webp";
import Person2 from "../../assets/images/Roland.webp";
import Person3 from "../../assets/images/damien.webp";
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
        "With a degree in Mathematics and Computer Science, Roland has thrived at the juncture of software engineering and Retail for 25+ years, having architected and managed complex implementations that have aligned technology with the customer's business goals. Roland has also been mentoring businesses and start-ups in their quest for market growth and is often the go-to person when complex issues need a sounding board.",
    },
    {
      image: Person3,
      name: "Damien Anselmi",
      designation: "Consultant",
      description:
        "A chartered accountant by qualification, Damien brings more than 35 years of retail technology experience to Sapiens v2, specialising in Data Design, Analytics, and Data Visualization. Damien's focus at Sapiens v2 is Data Development, and he is a key contributor to product strategy and design.",
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
                <p
                  style={{ fontFamily: "AllroundGothic" }}
                  className="text-center text-[#000000] "
                >
                  <span style={{ fontFamily: "roboto" }}>
                    {" "}
                    {s.description}{" "}
                  </span>
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

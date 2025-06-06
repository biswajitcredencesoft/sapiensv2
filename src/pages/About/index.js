import React from "react";
import MeetTheTeam from "../../components/MeetTheTeam";
import Methodology from "../../components/Methodology";
import "./index.css";
import MethodologyPhone from "../../components/MethodologyPhone";
const index = () => {
  return (
    <div className="about ">
      <div className="bg-[#edeeff] pb-0 md:pb-10 md:pt-10 pt-0">
        <p className="text-left lg:text-xl md:text-xl text-[18px] px-6 md:px-20 pt-10 text-[#000000]">
          Notwithstanding the hype around AI in recent years, its quintessential 
          ability to discern patterns and relationships across untenably large and
          complex datasets is powerful.
       
          This clarity allows people to make confident decisions while alleviating
          cognitive limitations.
          
          Cognisant of this and the research that has underpinned AI globally, we
          embarked on creating Stock seer.
        </p>
        <MeetTheTeam />
      </div>
      <div className="">
        <Methodology />
      </div>

    </div>
  );///
};

export default index;

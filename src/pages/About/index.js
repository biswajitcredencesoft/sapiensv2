import React from "react";
import { Helmet } from "react-helmet-async";
import MeetTheTeam from "../../components/MeetTheTeam";
import Methodology from "../../components/Methodology";
import "./index.css";
import MethodologyPhone from "../../components/MethodologyPhone";
const index = () => {
  return (
    <div className="about ">
      <Helmet>
        <title>About — Sapiens v2</title>
        <meta name="description" content="About Sapiens v2 — our mission to apply AI for better retail decisions." />
        <link rel="canonical" href="https://sapiensv2.com/about" />
        <meta property="og:title" content="About — Sapiens v2" />
        <meta property="og:description" content="About Sapiens v2 — our mission to apply AI for better retail decisions." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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

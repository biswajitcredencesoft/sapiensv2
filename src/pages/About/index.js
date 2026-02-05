import React from "react";
import { Helmet } from "react-helmet-async";
import MeetTheTeam from "../../components/MeetTheTeam";
import Methodology from "../../components/Methodology";
import "./index.css";
import MethodologyPhone from "../../components/MethodologyPhone";
const index = () => {
  return (
    <div className="about ">
      {/* <Helmet>
        <title>About — Sapiens v2</title>
        <meta name="description" content="About Sapiens v2 — our mission to apply AI for better retail decisions." />
        <link rel="canonical" href="https://sapiensv2.com/about" />
        <meta property="og:title" content="About — Sapiens v2" />
        <meta property="og:description" content="About Sapiens v2 — our mission to apply AI for better retail decisions." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}

      <Helmet>
        <title>Meet Sapiens v2: NZ-Based AI Demand Forecasting Experts</title>
        <meta
          name="description"
          content="Learn about Sapiens v2, an NZ-based company providing AI-powered demand forecasting, LS Central, and Business Central services to global retailers."
        />
        <link rel="canonical" href="https://sapiensv2.com/about" />
        <meta
          property="og:title"
          content="Meet Sapiens v2: NZ-Based AI Demand Forecasting Experts"
        />
        <meta
          property="og:description"
          content="An NZ-based company providing AI-powered demand forecasting and retail ERP services globally."
        />
        <meta
          property="og:image"
          content="https://www.sapiensv2.com/images/team-or-hq.jpg"
        />
        <meta property="og:url" content="https://sapiensv2.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Sapiens v2 - NZ AI Experts" />
        <meta
          name="twitter:description"
          content="Learn how our NZ-based team is transforming retail with AI and LS Central services."
        />
        <meta
          name="twitter:image"
          content="https://www.sapiensv2.com/images/team-or-hq.jpg"
        />
      </Helmet>

      <div className="bg-[#edeeff] pb-0 md:pb-10 md:pt-10 pt-0">
        <p className="text-left lg:text-xl md:text-xl text-[18px] px-6 md:px-20 pt-10 text-[#000000]">
          Notwithstanding the hype around AI in recent years, its quintessential
          ability to discern patterns and relationships across untenably large
          and complex datasets is powerful. This clarity allows people to make
          confident decisions while alleviating cognitive limitations. Cognisant
          of this and the research that has underpinned AI globally, we embarked
          on creating Stock seer.
        </p>
        <MeetTheTeam />
      </div>
      <div className="">
        <Methodology />
      </div>
    </div>
  ); ///
};

export default index;

import React from "react";
import { Helmet } from "react-helmet-async";
import SeerInsights from "../../components/SeerInsights";
import SolutionVideo from "../../components/SolutionVideo";
import "./index.css";

const Solution = () => {
  return (
    <div className="SolutionContainer">
      {/* <Helmet>
        <title>Solutions — Sapiens v2</title>
        <meta name="description" content="Sapiens v2 Solutions — AI services to automate retail inventory, forecasting and returns." />
        <link rel="canonical" href="https://sapiensv2.com/solutions" />
        <meta property="og:title" content="Solutions — Sapiens v2" />
        <meta property="og:description" content="Sapiens v2 Solutions — AI services to automate retail inventory, forecasting and returns." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}

        <Helmet>
            <title>AI Demand Planning Software & LS Central Support | Sapiens v2</title>
            <meta 
              name="description" 
              content="AI demand forecasting and planning tools for retail and hospitality. Expert LS Central and Business Central 24/7 support, development, customisation and integration." 
            />
            <link rel="canonical" href="https://sapiensv2.com/solutions" />
            <meta property="og:title" content="AI Demand Planning Software & LS Central Support | Sapiens v2" />
            <meta property="og:description" content="AI demand forecasting and planning tools for retail and hospitality with 24/7 LS Central support." />
            <meta property="og:url" content="https://sapiensv2.com/solutions" />
            <meta name="keywords" content="Demand forecasting software, demand planning tools, LS Central support, Business Central support, LS Central technical support, demand planning solutions, supply chain forecasting software, LS Central POS support, LS Central implementation support, 24/7 Business Central support, demand forecasting tools" />
            <meta name="twitter:card" content="summary_large_image"/>
        </Helmet>
      
      <SolutionVideo />
      <SeerInsights />
    </div>
  );
};

export default Solution;

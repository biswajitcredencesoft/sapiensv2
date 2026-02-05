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
        <title>
          Introducing Stock Seer: The AI Demand Forecaster Built for ANZ Retail
        </title>
        <meta
          name="description"
          content="Achieve max forecast accuracy with Stock Seer, Sapiens v2's machine learning demand prediction tool. Built for granular SKU management across NZ and AUS."
        />
        <link rel="canonical" href="https://sapiensv2.com/solutions" />
        <meta
          property="og:title"
          content="Introducing Stock Seer: AI Demand Forecasting for ANZ"
        />
        <meta
          property="og:description"
          content="Maximize accuracy with machine learning demand prediction. Purpose-built for retail SKU management in New Zealand and Australia."
        />
        <meta
          property="og:image"
          content="https://www.sapiensv2.com/images/stock-seer-dashboard.jpg"
        />
        <meta property="og:url" content="https://sapiensv2.com/solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stock Seer: AI Demand Forecaster for ANZ Retail"
        />
        <meta
          name="twitter:description"
          content="ML-powered demand prediction for granular SKU management across NZ and AUS."
        />
        <meta
          name="twitter:image"
          content="https://www.sapiensv2.com/images/stock-seer-dashboard.jpg"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Stock Seer",
            "operatingSystem": "Web-based",
            "applicationCategory": "BusinessApplication",
            "publisher": {
              "@type": "Organization",
              "name": "Sapiens v2"
            },
            "description": "Machine learning demand prediction tool for granular SKU management in NZ and AUS retail.",
            "screenshot": "https://www.sapiensv2.com/images/stock-seer-dashboard.jpg"
          }`}
        </script>
      </Helmet>
      <SolutionVideo />
      <SeerInsights />
    </div>
  );
};

export default Solution;

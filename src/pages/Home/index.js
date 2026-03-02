import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import ClientsCarousel from "../../components/ClientsCarousel";
import HeroSection from "../../components/HeroSection";
import VideoSection from "../../components/VideoSection";
import Demo from "../../components/Demos/demo";
import ErrorBoundary from "../../components/ErrorBoundary";
import "./index.css";

const Home = () => {
  const demoRef = useRef(null);
  const offset = -200; // Adjust this value as needed

  const scrollToDemo = () => {
    // Guard against calling before the demo element is mounted
    if (!demoRef.current) return;
    const rect = demoRef.current.getBoundingClientRect();
    const top = rect.top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="HomePageContainer bg-[#edeeff]">
      <Helmet>
        {/* <title>Sapiens v2 — AI Solutions for Retail</title>
        <meta name="description" content="AI-powered solutions to help retailers reduce shrinkage, automate returns and make smarter decisions." />
        <link rel="canonical" href="https://sapiensv2.com/" />
        <meta property="og:title" content="Sapiens v2 — AI Solutions for Retail" />
        <meta property="og:description" content="AI-powered solutions to help retailers reduce shrinkage, automate returns and make smarter decisions." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" /> */}

        <title>AI Demand Planning & Forecasting Software for Retail | Sapiens v2</title>
        <meta  name="description"  content="AI demand planning software that eliminates stockouts and overstock for retailers. Accurate demand forecasting and supply chain planning for multi-store retail."  />
        <link rel="canonical" href="https://sapiensv2.com/" />
        <meta property="og:title" content="Stock Seer by Sapiens v2 — AI Demand Planning Software for Retail" />
        <meta property="og:description" content="AI demand planning software that eliminates stockouts and overstock for retailers." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="keywords" content="Demand planning software, demand forecasting software, AI demand forecasting, retail demand planning" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <HeroSection scrollToDemo={scrollToDemo} />
      <ClientsCarousel />
      <ErrorBoundary>
        <VideoSection />
      </ErrorBoundary>
      <div ref={demoRef}>
        <Demo />
      </div>
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import ClientsCarousel from "../../components/ClientsCarousel";
import HeroSection from "../../components/HeroSection";
import VideoSection from "../../components/VideoSection";
import Demo from "../../components/Demos/demo";
import "./index.css";

const Home = () => {
  const demoRef = useRef(null);
  const offset = -200; // Adjust this value as needed

  const scrollToDemo = () => {
    const top = demoRef.current.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="HomePageContainer bg-[#edeeff]">
      <HeroSection scrollToDemo={scrollToDemo} />
      <ClientsCarousel />
      <VideoSection />
      <div ref={demoRef}>
        <Demo />
      </div>
    </div>
  );
};

export default Home;

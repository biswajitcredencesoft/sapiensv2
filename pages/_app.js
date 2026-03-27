import { useEffect, useState } from "react";
import Head from "next/head";

import "../src/index.css";
import "../src/fonts.css";
import "../src/App.css";
import "../src/components/Navbar/index.css";
import "../src/components/ResponsiveNav/index.css";
import "../src/components/Footer/index.css";
import "../src/components/HeroSection/index.css";
import "../src/components/ClientsCarousel/index.css";
import "../src/components/VideoSection/index.css";
import "../src/components/Demos/index.css";
import "../src/components/MeetTheTeam/index.css";
import "../src/components/SeerInsights/index.css";
import "../src/components/SolutionVideo/index2.css";
import "../src/components/ClientCard/index.css";
import "../src/components/ClientCard2/index.css";
import "../src/components/ClientCard3/index.css";
import "../src/components/ClientCard4/index.css";
import "../src/pages/Home/index.css";
import "../src/pages/About/index.css";
import "../src/pages/Solution/index.css";
import "../src/pages/Contact/index.css";
import "../src/pages/Blog/index.css";

import Navbar from "../src/components/Navbar";
import ResponsiveNav from "../src/components/ResponsiveNav";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }) {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  useEffect(() => {
    setShowResponsiveNav(false);
  }, [Component]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="AppContainer min-h-screen pb-[100px]">
        <Navbar
          setShowResponsiveNav={setShowResponsiveNav}
          showResponsiveNav={showResponsiveNav}
        />
        <ResponsiveNav
          setShowResponsiveNav={setShowResponsiveNav}
          showResponsiveNav={showResponsiveNav}
        />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

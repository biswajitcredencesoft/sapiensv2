import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ResponsiveNav from "./components/ResponsiveNav";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/caseStudies";
import ReactDOM from "react-dom/client";

export default function App() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
    <BrowserRouter>
      <div className="AppContainer min-h-screen pb-[100px]">
        <Navbar
          setShowResponsiveNav={setShowResponsiveNav}
          showResponsiveNav={showResponsiveNav}
        />
        <ResponsiveNav
          setShowResponsiveNav={setShowResponsiveNav}
          showResponsiveNav={showResponsiveNav}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/solutions" element={<Solution />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/caseStudies" element={<CaseStudies />} />
        </Routes>
        <Footer
          setShowResponsiveNav={setShowResponsiveNav}
          showResponsiveNav={showResponsiveNav}
        />
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

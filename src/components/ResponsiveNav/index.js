import React from 'react';
import Navbar from '../Navbar';
import './index.css';
import { Link } from "react-router-dom";

const ResponsiveNav = ({ setShowResponsiveNav, showResponsiveNav }) => {

  const closeMenu = () => {
    setShowResponsiveNav(false);
  };

  return (
    <div className="responsiveMenu" style={showResponsiveNav ? { opacity: "1", transform: 'translateX(0px)', display: "block" } : null}>
      <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} responsiveNav={true} />
      <ul className="responsiveMenuNavbarLinks">
        <li className="NavbarLink">
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/caseStudies" onClick={closeMenu}>Case Studies</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;

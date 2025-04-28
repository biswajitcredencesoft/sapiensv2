import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Footer = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  const location = useLocation();
  return (
    <div className="FooterContainer bottom-0 left-0 right-0 absolute">
      <span style={{ fontFamily: "AllroundGothic" }}>
        ©2025<span style={{ fontFamily: "serif" }}></span> Sapiens v2 Ltd
      </span>
      <ul className="NavbarLinks">
        <li className="NavbarLink">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Home
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/solutions"
            className={
              location.pathname === "/solutions"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Solutions
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/caseStudies"
            className={
              location.pathname === "/caseStudies"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Case Studies
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            About Us
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/blog"
            className={
              location.pathname === "/blog"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Blog
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

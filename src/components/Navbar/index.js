import React from "react";

import { RiMenu2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="NavbarContainer ">
      <div className="NavbarLogo  seer-logo">
        <img src="/images/uploads/Sv2_logo_bluepurple.svg" alt="Logo" />
      </div>
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
      {!responsiveNav ? (
        <RiMenu2Fill
          size={30}
          onClick={() => {
            setShowResponsiveNav(true);
          }}
        />
      ) : (
        <ImCross
          size={30}
          onClick={() => {
            setShowResponsiveNav(false);
          }}
        />
      )}
      {/* <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} /> */}
    </div>
  );
};

export default Navbar;

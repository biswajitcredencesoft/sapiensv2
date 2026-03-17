import React from 'react';
import Link from "next/link";
import Navbar from '../Navbar';

const ResponsiveNav = ({ setShowResponsiveNav, showResponsiveNav }) => {

  const closeMenu = () => {
    setShowResponsiveNav(false);
  };

  return (
    <div className="responsiveMenu" style={showResponsiveNav ? { opacity: "1", transform: 'translateX(0px)', display: "block" } : null}>
      <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} responsiveNav={true} />
      <ul className="responsiveMenuNavbarLinks">
        <li className="NavbarLink">
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="NavbarLink">
          <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
        </li>
        <li className="NavbarLink">
          <Link href="/case-studies" onClick={closeMenu}>Case Studies</Link>
        </li>
        <li className="NavbarLink">
          <Link href="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li className="NavbarLink">
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
        </li>
        <li className="NavbarLink">
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;

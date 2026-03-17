import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="FooterContainer bottom-0 left-0 right-0 absolute">
      <span style={{ fontFamily: "AllroundGothic" }}>
        ©2025<span style={{ fontFamily: "serif" }}></span> Sapiens v2 Ltd
      </span>
      <ul className="NavbarLinks">
        <li className="NavbarLink">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Home
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            href="/solutions"
            className={
              pathname === "/solutions"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Solutions
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            href="/case-studies"
            className={
              pathname === "/case-studies"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Case Studies
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            About Us
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Blog
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            href="/contact"
            className={
              pathname === "/contact"
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

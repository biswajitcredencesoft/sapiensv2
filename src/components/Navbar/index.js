import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { RiMenu2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Navbar = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  const router = useRouter();
  const pathname = router.pathname;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="NavbarContainer ">
      <div className="NavbarLogo  seer-logo">
        <Image
          src="/images/uploads/Sv2_logo_bluepurpleOne.svg"
          alt="Logo"
          width={220}
          height={60}
          style={{ fontFamily: "HouschkaPro" }}
        />
      </div>
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

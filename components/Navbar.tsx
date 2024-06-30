"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30 bg-white shadow-md lg:shadow-none">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="lg:hidden">
        <FaBars className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center lg:flex lg:flex-row lg:gap-12 absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 z-10`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              onClick={handleLinkClick}
              className="block regular-16 text-black cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="tel:+91-9653810555"
            className="block regular-16 border border-[#2b5876] rounded-full p-2 text-[#4e4376] flex items-center cursor-pointer transition-all hover:font-bold"
          >
            <FaPhone className="mr-2" /> +91-9653810555
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

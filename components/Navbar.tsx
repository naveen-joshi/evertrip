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

  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul
        className={`h-full lg:gap-12 items-center lg:flex ${isMenuOpen ? "flex flex-col gap-4 p-4 absolute top-16 left-0 right-0 bg-white shadow-md lg:static lg:p-0 z-10 h-[260px]" : "hidden"} lg:flex-row`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black flex flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="tel:+91-9653810555"
          className="regular-16 border border-[#2b5876] rounded-full p-2 text-[#4e4376] flex flex-center items-center cursor-pointer transition-all hover:font-bold"
        >
          <FaPhone className="mr-2"></FaPhone>+91-9653810555
        </Link>
      </ul>

      <FaBars
        className="w-8 h-8 inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;

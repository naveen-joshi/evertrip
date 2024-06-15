import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex items-center">
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

      <FaBars className="w-8 h-8 inline-block cursor-pointer lg:hidden" />
    </nav>
  );
};

export default Navbar;

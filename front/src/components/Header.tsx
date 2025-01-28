import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { TbPokeball } from "react-icons/tb";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl text-accent-default hover:text-accent-hover font-semibold transform transition-all flex items-center gap-2">
            POcKETCG <span className="text-terciary"><TbPokeball /></span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;

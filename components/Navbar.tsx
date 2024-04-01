"use client";

import logo from "@/public/skooldio-logo.png";
import Image from "next/image";
import hamburger from "@/public/hamburger.svg";
import { createContext, useState } from "react";
import { SideBar, SideBarItem } from "./SideBar";
import { BiHome } from "react-icons/bi";

const Navbar = () => {
  const [isTabOpen, setIsTabOpen] = useState(false);

  const handleMenuClick = () => {
    setIsTabOpen(!isTabOpen);
  };

  return (
    <>
      <nav className="z-10 w-full bg-primary relative">
        <div className="md:mx-16 flex text-white items-center justify-between p-6">
          <a href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-full h-12 object-contain"
            />
          </a>
          <button
            className="md:hidden mr-2 w-10 h-10"
            onClick={() => handleMenuClick()}
          >
            <Image src={hamburger} alt="menu-icon" />
          </button>
          {isTabOpen && (
            <SideBar isTabOpen={isTabOpen} setIsTabOpen={setIsTabOpen}>
              <SideBarItem icon={<BiHome />} text="Home" path="/" />
              <SideBarItem icon={<BiHome />} text="Program" path="/program" />
              <SideBarItem
                icon={<BiHome />}
                text="Promotion"
                path="/promotion"
              />
              <SideBarItem icon={<BiHome />} text="Contact" path="/contact" />
            </SideBar>
          )}
          <div className="hidden md:flex gap-8 text-base">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/program">Program</a>
            </span>
            <span>
              <a href="/promotion">Promotion</a>
            </span>
            <span>
              <a href="/contact">Contact</a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

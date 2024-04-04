"use client";
import { useState } from "react";

import Image from "next/image";

import logo from "@/public/doctorq-logo2.png";
import { SideBar, SideBarItem } from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneFund } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { MdHome } from "react-icons/md";

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
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <SideBar isTabOpen={isTabOpen} setIsTabOpen={setIsTabOpen}>
            <SideBarItem icon={<MdHome />} text="Home" path="/" />
            <SideBarItem
              icon={<AiTwotoneFund />}
              text="Program"
              path="/program"
            />
            <SideBarItem
              icon={<IoIosPricetag />}
              text="Promotion"
              path="/promotion"
            />
            <SideBarItem icon={<FaPhone />} text="Contact" path="/contact" />
          </SideBar>

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

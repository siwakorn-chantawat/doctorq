"use client";
import { useState } from "react";

import Image from "next/image";

import logo from "@/public/doctorq-logo2.png";
import { SideBar, SideBarItem } from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  const toggleSidebar = () => {
    setIsTabOpen(!isTabOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 w-full bg-primary">
        <div className="md:mx-16 flex text-white items-center justify-between p-6">
          <a href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-full h-10 object-contain"
              priority
            />
          </a>
          <button
            className="md:hidden w-10 h-10"
            onClick={() => toggleSidebar()}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <SideBar isTabOpen={isTabOpen} setIsTabOpen={setIsTabOpen}>
            {links.map((link) => (
              <SideBarItem
                key={link.path}
                icon={link.icon}
                path={link.path}
                text={link.name}
                setIsTabOpen={setIsTabOpen}
              />
            ))}
          </SideBar>

          <ul className="hidden md:flex gap-8 text-base">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname ? "text-secondary" : undefined
                  }`}
                  onClick={() => {
                    setActivePage(link.name);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { ReactNode, useState, useContext, createContext } from "react";
import Image from "next/image";
import logo from "@/public/doctorq-logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";

type SideBarProps = {
  children: ReactNode;
  isTabOpen: boolean;
  setIsTabOpen: (active: boolean) => void;
};

type SideBarItemProps = {
  icon: any;
  text: string;
  path: string;
};

export const SideBar = ({
  children,
  isTabOpen,
  setIsTabOpen,
}: SideBarProps) => {
  return (
    <aside
      className={`h-screen absolute top-0 right-0 bottom-0 overflow-x-hidden duration-200 ease-in-out transition-all ${
        isTabOpen ? "w-full" : "w-0"
      }`}
    >
      <nav className="h-full flex flex-col bg-primary shadow-sm">
        <div className="p-4 pt-6 pb-6 flex justify-between items-center">
          <button
            className="p-1.5 rounded-lg"
            onClick={() => setIsTabOpen(false)}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>
          <Image
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all ${
              isTabOpen ? "w-28" : "w-0"
            }`}
          />
        </div>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
};

export const SideBarItem = ({ icon, text, path }: SideBarItemProps) => {
  return (
    <a href={path}>
      <li
        className={`relative flex items-center py-6 px-3 my-1
    font-bold text-2xl rounded-md cursor-pointer
    transition-colors`}
      >
        {icon}
        <span className="ml-3">{text}</span>
      </li>
    </a>
  );
};

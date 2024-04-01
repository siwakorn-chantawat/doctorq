import React, { ReactNode, useState, useContext, createContext } from "react";
import Image from "next/image";
import logo from "@/public/skooldio-logo.png";
import { LuChevronLast } from "react-icons/lu";

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
      className={`h-screen absolute top-0 right-0 bottom-0 ${
        isTabOpen ? "w-64" : "w-0"
      }`}
    >
      <nav className="h-full flex flex-col bg-primary border-l shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            className="p-1.5 rounded-lg"
            onClick={() => setIsTabOpen(false)}
          >
            <LuChevronLast className="text-3xl" />
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
        className={`relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors`}
      >
        {icon}
        <span className="ml-3">{text}</span>
      </li>
    </a>
  );
};

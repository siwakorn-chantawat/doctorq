import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@/public/doctorq-logo2.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

type SideBarProps = {
  children: ReactNode;
  isTabOpen: boolean;
  setIsTabOpen: (active: boolean) => void;
};

type SideBarItemProps = {
  icon: any;
  text: string;
  path: string;
  setIsTabOpen: (active: boolean) => void;
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
          <Image
            priority
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all ${
              isTabOpen ? "w-24" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg"
            onClick={() => setIsTabOpen(false)}
          >
            <IoClose className="text-4xl pr-2" />
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
};

export const SideBarItem = ({
  icon,
  text,
  path,
  setIsTabOpen,
}: SideBarItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={path} onClick={() => setIsTabOpen(false)}>
      <li
        className={`relative flex items-center justify-start py-6 px-3 my-1
    font-semibold text-lg rounded-md cursor-pointer
    transition-colors
    `}
      >
        <span>{icon}</span>
        <span
          className={`ml-3 ${path === pathname ? "text-secondary" : undefined}`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
};

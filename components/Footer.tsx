import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaPhone, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 bottom-0 mt-8 bg-primary w-full h-50 px-4 pb-4 text-white">
      <div className="flex flex-col gap-2 text-md md:gap-6 ">
        <Link
          href="https://www.facebook.com/doctorqTRT"
          className="flex items-center justify-evenly"
        >
          <FaSquareFacebook /> Doctor Q Clinic
        </Link>
        <Link href="/" className="flex items-center justify-evenly">
          <FaTiktok /> @doctorqclinic
        </Link>
        <Link href="/" className="flex items-center justify-evenly">
          <FaPhone />
          <span>08-1234-5678</span>
        </Link>
        <Link href="/" className="flex items-center justify-evenly">
          LINE OA: @doctorqclinic
        </Link>
      </div>
      <p className="text-sm text-center">
        Copyright &copy; 2024 All Rights Reserved
      </p>
    </footer>
  );
};

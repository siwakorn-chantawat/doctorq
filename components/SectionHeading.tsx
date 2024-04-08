import React, { ReactNode } from "react";
import { BsDashLg } from "react-icons/bs";

type SectionHeadingProps = {
  children: ReactNode; // Define the type for children
  // Add any other props your component expects
};
export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="flex gap-8 items-center justify-center mt-10 mb-10  text-white text-3xl bg-primary shadow-xl px-2 py-1 rounded-2xl">
      <BsDashLg /> {children} <BsDashLg />
    </h2>
  );
};

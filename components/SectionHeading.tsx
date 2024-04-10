import React, { ReactNode } from "react";
import { BsDashLg } from "react-icons/bs";

type SectionHeadingProps = {
  children: ReactNode; // Define the type for children
  // Add any other props your component expects
};
export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2
      className="flex flex-col underline underline-offset-[12px] decoration-[6px] decoration-secondary items-center justify-center 
    mt-10 mb-10 text-primary font-extrabold text-3xl "
    >
      {children}
    </h2>
  );
};

import React, { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode; // Define the type for children
  toWhite: boolean; // Add any other props your component expects
};
export const SectionHeading = ({ children, toWhite }: SectionHeadingProps) => {
  return (
    <h2
      className={`flex flex-col underline underline-offset-[12px] decoration-[6px] decoration-secondary items-center justify-center 
    mt-12 mb-10 md:mb-14 font-extrabold text-3xl md:text-5xl md:underline-offset-[20px]  ${
      toWhite ? "text-white" : "text-primary"
    }`}
    >
      {children}
    </h2>
  );
};

import React, { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode; // Define the type for children
  // Add any other props your component expects
};
export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mt-12 mb-10 uppercase text-secondary text-4xl md:text-5xl text-center">
      {children}
    </h2>
  );
};

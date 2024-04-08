import React, { ReactNode } from "react";

type SectionDividerProps = {
  children: ReactNode;
};
export const SectionDivider = ({ children }: SectionDividerProps) => {
  return <section className="mx-4 mb-24 mt-24">{children}</section>;
};

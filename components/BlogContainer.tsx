import React, { ReactNode } from "react";

type childrenProps = {
  children: ReactNode;
};
export const BlogContainer = ({ children }: childrenProps) => {
  return <div className="mt-10">{children}</div>;
};

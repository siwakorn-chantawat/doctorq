import React, { ReactNode } from "react";

type childrenProps = {
  children: ReactNode;
};
export const Container = ({ children }: childrenProps) => {
  return <div className=" bg-white/95 p-4 -mt-4">{children}</div>;
};

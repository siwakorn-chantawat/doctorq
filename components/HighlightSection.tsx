import React from "react";
import { SectionHeading } from "./SectionHeading";

import highlight1 from "@/public/oldman1.jpg";
import { Card } from "./Card";
import { SectionDivider } from "./SectionDivider";
import { hilightCardsData } from "@/lib/data";

export const HighlightSection = () => {
  return (
    <SectionDivider>
      <SectionHeading>Blog</SectionHeading>
      <div className="m-2 rounded-2xl">
        <div className="grid grid-cols-1 grid-rows-4 gap-10 mx-4">
          {hilightCardsData.map((card, index) => (
            <React.Fragment key={index}>
              <Card {...card} imageURL={highlight1} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionDivider>
  );
};

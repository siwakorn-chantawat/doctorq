import React from "react";
import { SectionHeading } from "./SectionHeading";

import highlight1 from "@/public/oldman1.jpg";
import { HighlightCard } from "./HighlightCard";
import { SectionDivider } from "./SectionDivider";
import { hilightCardsData } from "@/lib/data";

export const Highlight = () => {
  return (
    <SectionDivider>
      <SectionHeading>Highlight</SectionHeading>
      <div className="m-2 rounded-2xl">
        <div className="grid grid-cols-1 grid-rows-4 gap-10 mx-4">
          {hilightCardsData.map((card, index) => (
            <React.Fragment key={index}>
              <HighlightCard {...card} imageURL={highlight1} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionDivider>
  );
};

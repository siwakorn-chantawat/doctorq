import React from "react";
import { SectionHeading } from "./SectionHeading";

import highlight1 from "@/public/oldman1.jpg";
import { HighlightCard } from "./HighlightCard";
import { SectionDivider } from "./SectionDivider";

export const Highlight = () => {
  return (
    <SectionDivider>
      <SectionHeading>Highlight</SectionHeading>
      <div className="flex gap-2">
        <HighlightCard imageURL={highlight1} />
      </div>
    </SectionDivider>
  );
};

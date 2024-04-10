import React from "react";
import { SectionHeading } from "./SectionHeading";
import { SectionDivider } from "./SectionDivider";

import MainCarousel from "./MainCarousel";

export const HighlightSection = () => (
  <SectionDivider>
    <SectionHeading> ข้อมูลสุขภาพ </SectionHeading>
    <div className="my-2 mx-2 md:mx-24">
      <MainCarousel />
    </div>
  </SectionDivider>
);

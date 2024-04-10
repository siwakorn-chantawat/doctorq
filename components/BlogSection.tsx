import React from "react";
import { SectionHeading } from "./SectionHeading";
import { SectionDivider } from "./SectionDivider";

import MainCarousel from "./MainCarousel";
import SeeAll from "./SeeAll";

export const BlogSection = () => (
  <SectionDivider>
    <div className="bg-white p-4">
      <SectionHeading> ข้อมูลสุขภาพ </SectionHeading>
      <div className="my-2 mx-2 md:mx-12">
        <SeeAll />
        <MainCarousel />
      </div>
    </div>
  </SectionDivider>
);

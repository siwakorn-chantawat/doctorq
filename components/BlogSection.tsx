import React from "react";
import { SectionHeading } from "./SectionHeading";

import MainCarousel from "./MainCarousel";
import SeeAll from "./SeeAll";
import { Container } from "./Container";

export const BlogSection = () => (
  <Container>
    <SectionHeading toWhite={false}> ข้อมูลสุขภาพ </SectionHeading>
    <div className="my-2 mx-2 md:mx-12">
      <SeeAll />
      <MainCarousel />
    </div>
  </Container>
);

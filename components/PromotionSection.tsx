import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import first from "@/public/doctor q fb post-3.png";
import second from "@/public/doctor q fb post-1_new.jpg";
import third from "@/public/doctor q fb post-2_new.jpg";
import Image from "next/image";

import { BsDashLg } from "react-icons/bs";
import { SectionHeading } from "./SectionHeading";

export default function PromotionSection() {
  return (
    <>
      <SectionHeading> แพ็คเกจและโปรโมชั่น</SectionHeading>
      <div className="flex flex-col gap-8 justify-center h-full mx-4 md:flex-row">
        <div className="group flex gap-4 mb-4">
          <div className="group-hover:bg-secondary transition-all shadow-md bg-primary w-12 min-h-full"></div>
          <Image
            src={first}
            alt="test"
            className="w-auto h-full overflow-hidden object-contain rounded-lg shadow-xl"
          />
        </div>
        <div className="group flex gap-4 mb-4">
          <div className="group-hover:bg-secondary transition-all shadow-md bg-primary w-12 min-h-full"></div>
          <Image
            src={second}
            alt="test"
            className="w-auto h-full overflow-hidden object-contain rounded-lg"
          />
        </div>
        <div className="group flex gap-4 mb-4">
          <div className="group-hover:bg-secondary transition-all shadow-md bg-primary w-12 min-h-full"></div>
          <Image
            src={third}
            alt="test"
            className="w-auto h-full overflow-hidden object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

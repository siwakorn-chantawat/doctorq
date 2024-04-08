import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import second from "@/public/doctor q fb post-3.png";
import Image from "next/image";

import { BsDashLg } from "react-icons/bs";

export default function PromotionSection() {
  return (
    <>
      <div className="relative mb-24 bg-gradient-to-b from-primary to-primary/85 h-full">
        <h2
          className="absolute left-8 right-8 top-5 flex gap-8 items-center justify-center
           text-white font-bold text-3xl px-2 py-2 rounded-2xl"
        >
          <BsDashLg /> Promotion <BsDashLg />
        </h2>
        <AspectRatio ratio={1 / 1} className="mx-4">
          <Image
            src={second}
            alt="test"
            className="w-full object-cover absolute bottom-0 left-0 right-0 top-20"
          />
        </AspectRatio>
        <AspectRatio ratio={1 / 1} className="mx-4">
          <Image
            src={second}
            alt="test"
            className="w-full object-cover absolute bottom-0 left-0 right-0 top-20"
          />
        </AspectRatio>
        <AspectRatio ratio={1 / 1} className="mx-4">
          <Image
            src={second}
            alt="test"
            className="w-full object-cover absolute bottom-0 left-0 right-0 top-20"
          />
        </AspectRatio>
      </div>
    </>
  );
}

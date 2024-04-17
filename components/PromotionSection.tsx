import React from "react";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SectionHeading } from "./SectionHeading";
import { PromotionImagesData } from "@/lib/data";

export default function PromotionSection() {
  return (
    <>
      <SectionHeading toWhite={true}>แพ็คเกจและโปรโมชั่น</SectionHeading>
      <div
        className="mx-4 mb-16 md:mx-14 lg:mx-20 lg:flex-row
      "
      >
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {PromotionImagesData.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="group flex gap-4 mb-4">
                  <Image
                    src={card.imageURL}
                    alt={card.alt}
                    className="w-auto h-full overflow-hidden object-contain rounded-lg shadow-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
          <div className="mt-4 flex flex-col gap-4 items-center justify-center">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </>
  );
}

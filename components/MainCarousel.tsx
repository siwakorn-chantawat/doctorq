import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { hilightCardsData } from "@/lib/data";
import highlight1 from "@/public/oldman1.jpg";
import { NewBlogCard } from "./NewBlogCard";
import { ChevronsRightIcon } from "lucide-react";
import Link from "next/link";

export default function MainCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {hilightCardsData.map((card) => (
          <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/4">
            <NewBlogCard {...card} imageURL={highlight1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
      <div className="mt-4 flex flex-col gap-4 items-center justify-center">
        <CarouselDots />
      </div>
    </Carousel>
  );
}

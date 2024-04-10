import React from "react";
import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageURL: StaticImageData;
  id: number;
};
export const Card = ({ ...card }: CardProps) => {
  return (
    <div
      className="bg-primary flex flex-col gap-4 w-full shadow-sm
    "
    >
      <Image
        loading="lazy"
        src={card.imageURL}
        alt="image"
        className="w-full max-h-[500px] object-cover"
      />

      <div className="mt-4 flex flex-col gap-2 text-white mx-4 my-2">
        <h6 className="text-semibold line-clamp-1 ">{card.title}</h6>
        <p className="line-clamp-2 text-bodytext break-all">
          {card.description}
        </p>
        <Link
          href={`blogs/${card.id}`}
          className="bg-secondary text-primary text-semibold rounded-2xl mx-auto mt-4 mb-2 px-4 py-2
          hover:bg-secondary/80 active:bg-secondary/90 hover:scale-105 active:scale-100 transition-all"
        >
          More Detail
        </Link>
      </div>
    </div>
  );
};

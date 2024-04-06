import React from "react";
import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

type HighlightCardProps = {
  title: string;
  description: string;
  imageURL: StaticImageData;
  id: number;
};
export const HighlightCard = ({ ...card }: HighlightCardProps) => {
  return (
    <div className="bg-primary flex flex-col gap-4 w-full rounded-2xl shadow-black shadow-sm">
      <AspectRatio ratio={4 / 3}>
        <Image
          loading="lazy"
          src={card.imageURL}
          alt="image"
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </AspectRatio>
      <div className="mt-4 flex flex-col gap-2 text-white mx-4 my-2">
        <h6 className="text-semibold line-clamp-2 ">{card.title}</h6>
        <p className="line-clamp-2 text-bodytext">{card.description}</p>
        <Link
          href={`blogs/${card.id}`}
          className="bg-secondary text-primary rounded-2xl mx-auto my-4 px-4 py-2
          hover:bg-secondary/80 active:bg-secondary/90 hover:scale-105 active:scale-100 transition-all"
        >
          More Detail
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageURL: StaticImageData;
  id: number;
};

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const NewBlogCard = ({ ...card }: CardProps) => {
  return (
    <Card className="text-primary group">
      <Link href={`blogs/${card.id}`}>
        <Image
          src={card.imageURL}
          alt="image"
          loading="lazy"
          className="w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="truncate pt-1">{card.title}</CardTitle>
          <CardDescription className="line-clamp-2 pt-2">
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end gap-2 items-center font-bold">
          <div className="bg-secondary w-8 h-[2.5px]"></div>
          <span className="group-hover:text-secondary group-active:text-secondary-600">
            อ่านเพิ่มเติม
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

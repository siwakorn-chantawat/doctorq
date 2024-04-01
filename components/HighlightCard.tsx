import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const HighlightCard = ({ imageURL }: any) => {
  return (
    <div className="bg-primary flex flex-col gap-4 w-full">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={imageURL}
          alt="image"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col gap-2 text-white mx-4 my-2">
        <h5>HIFU เทคโนโลยียกกระชับผิว</h5>
        <p>
          Doublo S Hifu เทคโนโลยียกกระชับผิว Hifu เทคโนโลยียกกระชับผิว
          ที่มีประสิทธิภาพสูง พร้อมทั้งช่วยป้องกันความหย่อนคล้อยของผิวหนัง
          บริเวณใบหน้า ลำคอ ใต้คาง
        </p>
        <button className="border border-secondary my-2 text-white px-4 py-2">
          <a href="#">More Detail</a>
        </button>
      </div>
    </div>
  );
};

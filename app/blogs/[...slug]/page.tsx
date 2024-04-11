import { Container } from "@/components/Container";
import Direction from "@/components/Direction";
import GoldLine from "@/components/GoldLine";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";

import { hilightCardsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type paramsProps = {
  params: {
    slug: number;
  };
};
const getBlog = (slug: number) => {
  const selectedBlog = hilightCardsData[slug - 1];

  // const response = await fetch('URL')
  // if (!response.ok){
  //   throw new Error("cannot fetch blog")
  // }
  return selectedBlog; //response.json()
};

export default async function Blog({ params }: paramsProps) {
  const blog = await getBlog(params.slug);
  return (
    <Container>
      <Direction params={params} />
      <div className="flex flex-col">
        <div className="mt-4 mb-8 mx-2">
          <h2 className={`font-extrabold text-3xl md:text-5xl`}>
            {blog.title}
            <GoldLine className="w-full" />
          </h2>
        </div>

        <div className="flex flex-col px-4">
          <p>{blog.description}</p>
        </div>
      </div>
    </Container>
  );
}

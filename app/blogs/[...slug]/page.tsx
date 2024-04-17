import Direction from "@/components/Direction";
import GoldLine from "@/components/GoldLine";

import { hilightCardsData } from "@/lib/data";
import Image from "next/image";
import blogimage from "@/public/oldman1.jpg";
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
    <>
      <Direction params={params} />
      <div className="flex flex-col sm:mx-4 md:mx-8 lg:mx-40 xl:mx-96">
        <div className="mt-4 mb-4">
          <h2
            className={`text-secondary-600 text-center font-extrabold text-3xl md:text-5xl`}
          >
            {blog.title}
            <GoldLine className="w-full" />
          </h2>
        </div>

        <Image
          src={blogimage}
          alt="blogimage"
          className="w-full h-auto xl:h-96 object-contain"
        />

        <div className="flex flex-col gap-4 mt-4">
          <p>{blog.description}</p>
        </div>
      </div>
    </>
  );
}

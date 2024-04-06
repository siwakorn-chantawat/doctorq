import { SectionDivider } from "@/components/SectionDivider";
import { hilightCardsData } from "@/lib/data";
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
    <SectionDivider>
      Blog Name : {blog.title}
      Blog Description: {blog.description}
    </SectionDivider>
  );
}

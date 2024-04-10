import { BlogContainer } from "@/components/WhiteContainer";
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
    <>
      <p className="text-primary text-xl">
        <Link href={"/"}>Home</Link>
        <span>&gt; </span>
        <Link href={"/blogs"}>Blogs</Link>
        <span>&gt; </span>
        {params.slug}
      </p>
      <BlogContainer>
        <h5 className="bg-primary text-secondary px-4 py-2 mb-4">
          {blog.title}
        </h5>
        <div className="flex flex-col bg-primary/5 px-4">
          <p>{blog.description}</p>
        </div>
      </BlogContainer>
    </>
  );
}

import { hilightCardsData } from "@/lib/data";

import React, { Suspense } from "react";

import highlight1 from "@/public/oldman1.jpg";
import { NewBlogCard } from "@/components/NewBlogCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { SectionHeading } from "@/components/SectionHeading";

// async function getBlogs() {
//     const response = await fetch('')

//     if(!response.ok){
//         throw new Error('cannot fetch blogs')
//     }
//     return response.json()
// }

export default function Blogs() {
  // const blogs = await getBlogs()

  return (
    <div className="m-2 rounded-2xl">
      <SectionHeading toWhite={false}>บล็อก</SectionHeading>
      <div
        className="gap-10 mx-4 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 
        lg:grid-cols-3 xl:grid-cols-4"
      >
        <Suspense fallback={<SkeletonCard />}>
          {hilightCardsData.map((card, index) => (
            <React.Fragment key={index}>
              <NewBlogCard
                title={card.title}
                description={card.description}
                imageURL={highlight1}
                id={card.id}
              />
            </React.Fragment>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

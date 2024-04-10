import { SectionHeading } from "@/components/SectionHeading";
import { hilightCardsData } from "@/lib/data";

import React from "react";

import highlight1 from "@/public/oldman1.jpg";
import { NewBlogCard } from "@/components/NewBlogCard";
import { Container } from "@/components/Container";

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
    <Container>
      <SectionHeading toWhite={false}>บล็อก</SectionHeading>
      <div className="m-2 rounded-2xl">
        <div className="gap-10 mx-4 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2">
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
        </div>
      </div>
    </Container>
  );
}

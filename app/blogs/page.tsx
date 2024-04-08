import { Card } from "@/components/Card";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { hilightCardsData } from "@/lib/data";

import React from "react";

import highlight1 from "@/public/oldman1.jpg";
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
    <SectionDivider>
      <SectionHeading>All Blogs</SectionHeading>
      <div className="m-2 rounded-2xl">
        <div className="grid grid-cols-1 grid-rows-4 gap-10 mx-4">
          {hilightCardsData.map((card, index) => (
            <React.Fragment key={index}>
              <Card
                title={card.title}
                description={card.description}
                imageURL={highlight1}
                id={card.id}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionDivider>
  );
}

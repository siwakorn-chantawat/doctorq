import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

type paramsProps = {
  params: {
    slug: number;
  };
};

export default function Direction({ params }: paramsProps) {
  return (
    <Breadcrumb className="my-4 font-bold">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">หน้าหลัก</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/blogs">ข้อมูลสุขภาพ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* <BreadcrumbItem>
          <BreadcrumbPage>{params.slug}</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

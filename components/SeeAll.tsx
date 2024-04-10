import { ChevronsRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SeeAll() {
  return (
    <Link
      href="/blogs"
      className="flex items-center justify-end my-2 hover:text-secondary transition-all text-primary gap-2 text-xl font-semibold"
    >
      <span> ดูทั้งหมด</span>
      <ChevronsRightIcon />
    </Link>
  );
}

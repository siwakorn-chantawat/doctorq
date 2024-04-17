import React from "react";
import { SectionDivider } from "./SectionDivider";

export default function ProfileSection() {
  return (
    <SectionDivider>
      <div className="flex flex-col justify-center gap-4 mx-auto md:flex-row">
        <p className="bg-white/25 rounded-md text-white px-4 py-2 text-xl font-medium text-wrap">
          มีประสบการณ์รักษาด้วยฮอร์โมนเพศชายทดแทน
          <span className="text-secondary"> &ldquo;มากกว่า 5 ปี&rdquo;</span>
        </p>
        <p className="bg-white/25 rounded-md text-white px-4 py-2 text-xl font-medium">
          เทรนนิ่งโดยตรงกับผู้เชี่ยวชาญด้านฮอร์โมนจาก{" "}
          <span className="text-secondary">อเมริกา</span>
        </p>
        <p className="bg-white/25 rounded-md text-white px-4 py-2 text-xl font-medium">
          รักษามาแล้วทั้งคนไทยและคนต่างชาติ{" "}
          <span className="text-secondary">
            &ldquo;มากกว่า 50 ประเทศทั่วโลก&rdquo;
          </span>
        </p>
      </div>
    </SectionDivider>
  );
}

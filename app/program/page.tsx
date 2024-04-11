import { Container } from "@/components/Container";

import { SectionHeading } from "@/components/SectionHeading";

export default function Program() {
  return (
    <Container>
      <SectionHeading toWhite={false}>โปรแกรม</SectionHeading>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h6>
            การให้ฮอร์โมนเพศชายทดแทน TRT (Testoserone Replacement Therapy)
          </h6>
          <li>เหมาะสำหรับผู้ที่มีอายุ 40 ปีขึ้นไปที่มีอาการฮอร์โมนเพศชายตก</li>
          <li>
            ใช้เพื่อเพิ่มปริมาณฮอร์โมนให้อยู่ในระดับที่เหมาะสมและช่วยเสริมสร้างความแข็งแรงทั้งทางด้านร่างกาย,
            อารมณ์และจิตใจ
          </li>
          <li>การรักษาที่แนะนำมี 2 แบบ 1.ยาฉีด 2.ยาทา</li>
        </div>
        <div className="flex flex-col gap-2">
          <h6>การกระตุ้นสร้างเทสโทสเตอโรน (HCG Mono-therapy)</h6>
          <ol className="">
            <li>
              เหมาะสำหรับผู้ที่มีอายุไม่มาก หรือผู้ทียังไม่อยากใช้เทสโทสเตอโรน
            </li>
            <li>
              รักษาด้วยการฉัดฮอร์โมนเพื่อกระตุ้นการสร้างเทสโทสเตอโรนที่อัณฑะ
            </li>
            <li>ผลข้างเคียงน้อยกว่าการใช้เทสโทสเตอโรน</li>
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <h6>การใช้เทสโทสเตอโรนเพื่อสร้างกล้าม (Testoserone Cycle Program)</h6>
          <li>
            เหมาะสำหรับผู้ทีต้องการใช้ฮอร์โมนเพื่อกระตุ้น
            "การสร้างกล้ามเป็นหลัก"
          </li>
          <li>ผู้ใช้ควรผ่านการออกกำลังกายมาสักระยะนึงแล้ว</li>
          <li>
            ควรใช้ในเวลาไม่เกิน 6 เดือน
            เพื่อลดผลข้างเคียงและหลังหยัดใช้จะต้องมีการใช้ยากระตุ้นเพื่อให้ร่างกายกลับมาปกติ
          </li>
        </div>
      </div>
    </Container>
  );
}

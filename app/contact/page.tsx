import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";
import map from "@/public/map dr.q.png";
import GoogleMap from "@/components/GoogleMap";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <Container>
      <SectionHeading toWhite={false}>ติดต่อ</SectionHeading>
      <div className="flex flex-col md:flex-row  justify-center mx-2 md:mx-4 xl:mx-40">
        <div className="flex flex-col divide-y-2 divide-solid divide-primary-300 gap-4 py-6 px-4 border-2 border-primary-300/95">
          <h4 className="text-xl pb-4">แผนที่และที่อยู่</h4>
          <GoogleMap />
          <Image
            src={map}
            alt="doctorq map"
            className="pt-4 w-auto h-auto lg:h-96 object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 py-6 px-4 border-2 border-primary-300/95">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl pb-4">ข้อมูลสำหรับติดต่อ</h4>
            <p className="text-lg">
              179/1 ม.1 ต.บางขุนกอง อ.บางกรวย จ.นนทบุรี <br />
              11130 ประเทศไทย
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <Link href={"tel:0639031416"}>
              <h5 className=" flex items-center gap-2 text-lg text-primary font-extrabold">
                <FaPhoneAlt />
                06-3903-1416
              </h5>
            </Link>

            <Link href={"https://m.me/doctorqTRT"}>
              <h5 className="flex items-center gap-2 text-lg text-primary font-extrabold">
                <FaFacebookMessenger />
                Doctor Q Clinic
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

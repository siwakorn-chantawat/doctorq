import hero from "@/public/hero.png";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import second from "@/public/doctor q fb post-3.png";
import LineAddButton from "./LineAddFriend";
import Link from "next/link";
import addline from "@/public/line-add-friend.png";

function Hero() {
  return (
    <header>
      <Image
        priority
        src={hero}
        alt="hero image"
        className="md:h-2/3 w-full object-cover"
      />

      <div className="mx-4 mt-4 mb-8 bg-white/55 shadow-lg h-full">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={second}
            alt="test"
            className="w-full  h-full object-cover"
          />
        </AspectRatio>
        <div className="flex flex-col gap-2 text-primary pt-8 pb-12 text-wrap text-center px-2">
          <h2 className="text-4xl">
            Doctor Q Clinic <br />
          </h2>
          <h4 className="pt-2 text-2xl">
            ให้ความรู้สุขภาพทั่วไปและฮอร์โมนเพศชาย โดยแพทย์ประสบการณ์การดูแลกว่า
          </h4>
          <span className="ml-3 text-6xl text-secondary font-extrabold text-center pt-10">
            100+ เคส
          </span>
          <Link href={"https://line.me/ti/p/%40@doctorqclinic"}>
            <Image src={addline} alt="addline" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;

import hero from "@/public/hero.png";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import frontclinic from "@/public/frontclinic.jpeg";

function Hero() {
  return (
    <header>
      <Image
        priority
        src={hero}
        alt="hero image"
        className="md:h-2/3 w-full object-cover"
      />

      <div className="mx-4 mt-4 mb-8 bg-white/55 shadow-md h-full">
        <Image
          src={frontclinic}
          alt="test"
          className="w-full h-auto object-cover hover:grayscale-[0.4] transition-all"
        />

        <div className="flex flex-col gap-2 text-primary pt-8 pb-10 px-2">
          <h2 className="pl-4 pr-2 pt-6 pb-2 text-4xl leading-snug font-black text-primary-700">
            คลินิกปรับสภาพฮอร์โมน ให้ความรู้สุขภาพทั่วไปและฮอร์โมนเพศชาย <br />
            โดยแพทย์ประสบการณ์การดูแลมากว่า
          </h2>
          <span className="mx-4 text-6xl text-secondary font-extrabold text-center py-4 bg-primary shadow-md">
            100+ เคส
          </span>
        </div>
      </div>
    </header>
  );
}

export default Hero;

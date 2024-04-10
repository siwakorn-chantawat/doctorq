import hero from "@/public/hero.png";
import Image from "next/image";

import frontclinic from "@/public/frontclinic.jpeg";

function Hero() {
  return (
    <header>
      <Image
        priority
        src={hero}
        alt="hero image"
        className="md:h-2/3 lg:h-[600px] w-full object-cover"
      />

      <div
        className="flex flex-col mx-4 mt-4 mb-8 bg-white/90 shadow-md h-full
      md:flex md:flex-row-reverse"
      >
        <Image
          src={frontclinic}
          alt="test"
          className="w-full md:w-2/5 h-auto object-cover hover:grayscale-[0.4] transition-all"
        />

        <div className="flex flex-col gap-2 text-primary pt-8 pb-10 px-2">
          <h2 className="pl-4 pr-2 pt-2 pb-4 text-4xl leading-snug font-black ">
            คลินิกปรับสภาพฮอร์โมน ให้ความรู้สุขภาพทั่วไปและฮอร์โมนเพศชาย <br />
            โดยแพทย์ประสบการณ์การดูแลมากว่า
          </h2>
          <span
            className="mx-4 text-6xl text-secondary font-extrabold text-center py-4 bg-primary shadow-md
          hover:scale-105 transition-all"
          >
            100+ เคส
          </span>
        </div>
      </div>
    </header>
  );
}

export default Hero;

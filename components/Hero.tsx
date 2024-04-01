import hero from "@/public/hero.png";
import Image from "next/image";
function Hero() {
  return (
    <header>
      <Image
        src={hero}
        alt="hero image"
        className="md:h-96 w-full object-cover"
      />
    </header>
  );
}

export default Hero;

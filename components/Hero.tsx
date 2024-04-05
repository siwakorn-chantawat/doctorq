import hero from "@/public/hero.png";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
function Hero() {
  return (
    <header>
      <AspectRatio ratio={16 / 9}>
        <Image
          priority
          src={hero}
          alt="hero image"
          className="md:h-96 w-full object-cover"
        />
      </AspectRatio>
    </header>
  );
}

export default Hero;

import Hero from "@/components/Hero";
import { HighlightSection } from "@/components/HighlightSection";

import PromotionSection from "@/components/PromotionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PromotionSection />
      <HighlightSection />
    </>
  );
}

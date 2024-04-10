import Hero from "@/components/Hero";
import { HighlightSection } from "@/components/HighlightSection";
import LineButtonComponent from "@/components/LineAddFriend";
import ProfileSection from "@/components/ProfileSection";

import PromotionSection from "@/components/PromotionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <PromotionSection />
      <HighlightSection />
    </>
  );
}

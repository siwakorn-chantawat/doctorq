import { BlogSection } from "@/components/BlogSection";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";

import PromotionSection from "@/components/PromotionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <PromotionSection />
      <BlogSection />
    </>
  );
}

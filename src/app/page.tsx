import { Approach } from "@/components/Approach";
import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Slider } from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] max-[1000px]:gap-[80px]">
      <Hero />
      <Slider />
      <Approach />
      <OurStory />
      <ContactUsSection />
    </div>
  );
}

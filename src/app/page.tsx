import { AboutSection } from "@/components/landing/AboutSection";
import { AppSection } from "@/components/landing/AppSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { PedagogySection } from "@/components/landing/PedagogySection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SpacesSection } from "@/components/landing/SpacesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AppSection />
        <AboutSection />
        <PedagogySection />
        <SpacesSection />
        <TestimonialsSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

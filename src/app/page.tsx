import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import OrbsBackground from "@/components/OrbsBackground";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";

// Below-the-fold sections are code-split (lazy). Hero stays eager.
const CrmSms = dynamic(() => import("@/components/CrmSms"));
const SocialAI = dynamic(() => import("@/components/SocialAI"));
const WebAI = dynamic(() => import("@/components/WebAI"));
const EngineN8N = dynamic(() => import("@/components/EngineN8N"));
const BookkeepingCFO = dynamic(() => import("@/components/BookkeepingCFO"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FullStack = dynamic(() => import("@/components/FullStack"));
const PremiumAddon = dynamic(() => import("@/components/PremiumAddon"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  return (
    <>
      <OrbsBackground />
      <Nav />
      <Hero />
      <StatsBar />
      <CrmSms />
      <SocialAI />
      <WebAI />
      <EngineN8N />
      <BookkeepingCFO />
      <HowItWorks />
      <Testimonials />
      <FullStack />
      <PremiumAddon />
      <FinalCTA />
      <footer>
        <p>© 2026 Smart Scale AI · All rights reserved</p>
      </footer>
    </>
  );
}

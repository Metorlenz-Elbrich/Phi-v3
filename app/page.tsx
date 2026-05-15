import { Hero } from "@/features/hero/Hero";
import { TrustStrip } from "@/features/trust/TrustStrip";
import { Services } from "@/features/services/Services";
import { Process } from "@/features/process/Process";
import { Showcase } from "@/features/showcase/Showcase";
import { Security } from "@/features/security/Security";
import { Projects } from "@/features/projects/Projects";
import { FinalCta } from "@/features/cta/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <Showcase />
      <Security />
      <Projects />
      <FinalCta />
    </>
  );
}

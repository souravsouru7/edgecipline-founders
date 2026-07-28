import {
  SideRail,
  FounderHero,
  FounderShowcase,
  FounderComparison,
  ProfessionalHighlights,
  FounderContact,
  Footer,
} from "@/components/founders";
import { founders } from "@/data/founders";

export default function HomePage() {
  return (
    <>
      <SideRail />
      <main className="lg:pl-20">
        <FounderHero founders={founders} />
        <FounderShowcase founders={founders} />
        <FounderComparison founders={founders} />
        <ProfessionalHighlights />
        <FounderContact founders={founders} />
        <Footer />
      </main>
    </>
  );
}

import SectionAbout from "@/components/pages/home/SectionAbout";
import SectionContact from "@/components/pages/home/SectionContact";
import SectionHero from "@/components/pages/home/SectionHero";
import SectionLanguages from "@/components/pages/home/SectionLanguages";
import SectionPortfolio from "@/components/pages/home/SectionPortfolio";
import Header from "@/components/ui/Header";

export default function LocalePage() {
  return (
    <>
      <Header animationDelayInSeconds={1.8} />
      <SectionHero />
      <SectionAbout />
      <SectionLanguages />
      <SectionPortfolio />
      <SectionContact />
    </>
  );
}

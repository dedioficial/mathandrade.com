import SectionAbout from "@/components/pages/home/SectionAbout";
import SectionHero from "@/components/pages/home/SectionHero";
import SectionLanguages from "@/components/pages/home/SectionLanguages";
import SectionPortfolio from "@/components/pages/home/SectionPortfolio";

export default function LocalePage() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionLanguages />
      <SectionPortfolio />
    </>
  );
}

import SectionAbout from "@/components/pages/home/SectionAbout";
import SectionHero from "@/components/pages/home/SectionHero";
import SectionLanguages from "@/components/pages/home/SectionLanguages";
import SectionPortfolio from "@/components/pages/home/SectionPortfolio";
import initTranslations from "@/locales/i18n";

interface LocalePageProps {
  params: Promise<{ locale: "en" | "pt" }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <>
      <SectionHero t={t} />
      <SectionAbout t={t} />
      <SectionLanguages t={t} />
      <SectionPortfolio t={t} />
    </>
  );
}

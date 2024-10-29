import SectionHero from "@/components/pages/home/SectionHero";
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
    </>
  );
}

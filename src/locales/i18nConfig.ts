const i18nConfig = {
  locales: ["en", "pt"],
  defaultLocale: "en",
};

export function testLanguage(locale?: string): LocaleParam["locale"] {
  if (!locale) return "en";

  return (
    i18nConfig.locales.includes(locale) ? locale : "en"
  ) as LocaleParam["locale"];
}

export default i18nConfig;

export type LocaleParam = { locale: "en" | "pt" };

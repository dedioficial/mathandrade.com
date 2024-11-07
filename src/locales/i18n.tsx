import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cookies } from "next/headers";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig, { testLanguage } from "./i18nConfig";

export default async function initTranslations(namespaces: string[]) {
  const cookie = await cookies();

  const locale = testLanguage(cookie.get("NEXT_LOCALE")?.value);

  const i18nInstance = createInstance();

  i18nInstance.use(initReactI18next);

  i18nInstance.use(
    resourcesToBackend((language: string, namespace: string) => {
      if (language !== locale) return;
      return import(`@/locales/${language}/${namespace}.json`);
    })
  );

  await i18nInstance.init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}

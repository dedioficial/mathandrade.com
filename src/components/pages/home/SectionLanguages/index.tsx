import initTranslations from "@/locales/i18n";
import LanguageArticle from "./LanguageArticle";
import languaguesList from "./languagesList";
import CSS from "./style.module.css";

const SectionLanguages = async () => {
  const { t } = await initTranslations(["home"]);

  const languagesContents = [
    {
      title: "Front-End",
      paragraph: t("languages.frontend.paragraph"),
      list: languaguesList.front,
      listAriaLabel: t("languages.frontend.listAriaLabel"),
    },
    {
      title: "Back-End",
      paragraph: t("languages.backend.paragraph"),
      list: languaguesList.back,
      listAriaLabel: t("languages.backend.listAriaLabel"),
    },
  ];

  return (
    <>
      <section role="region" id="languages" className={CSS.section}>
        <h2 className="sr-only">{t("languages.heading")}</h2>

        {languagesContents.map((content, i) => (
          <LanguageArticle
            first={i === 0}
            key={content.title}
            {...content}
            stars={t("languages.stars")}
          />
        ))}
      </section>
    </>
  );
};

export default SectionLanguages;

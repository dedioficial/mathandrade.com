import { TFunction } from "@/locales/types";
import LanguageArticle from "./LanguageArticle";
import languaguesList from "./languagesList";
import CSS from "./style.module.css";

export interface SectionLanguagesProps {
  t: TFunction;
}

const SectionLanguages = ({ t }: SectionLanguagesProps) => {
  const languagesContents = [
    {
      title: "Front-End",
      paragraph: t("languages.frontend.paragraph"),
      list: languaguesList.front,
    },
    {
      title: "Back-End",
      paragraph: t("languages.backend.paragraph"),
      list: languaguesList.back,
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

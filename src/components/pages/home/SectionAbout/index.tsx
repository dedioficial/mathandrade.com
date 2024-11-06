import Socials from "@/components/ui/Socials";
import initTranslations from "@/locales/i18n";

const SectionAbout = async () => {
  const { t } = await initTranslations(["home"]);

  return (
    <>
      <section id="about" className="bg-primary text-white">
        <div className="max-w-4xl text-center flex flex-col gap-10 m-auto px-4">
          <h2>{t("about.heading")}</h2>
          <p>{t("about.paragraph")}</p>

          <Socials className="text-white md:!ms-[unset] !text-4xl" />
        </div>
      </section>
    </>
  );
};

export default SectionAbout;

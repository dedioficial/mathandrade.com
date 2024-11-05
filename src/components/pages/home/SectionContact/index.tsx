import Socials from "@/components/ui/Socials";
import initTranslations from "@/locales/i18n";
import ContactForm from "./ContactForm";

const SectionContact = async () => {
  const { t } = await initTranslations(["contactForm"]);

  return (
    <section id="contact" className="flex flex-col gap-16 px-10">
      <div className="flex flex-col gap-10 m-auto px-4 max-w-5xl items-center">
        <h2 className="max-w-xl text-center">{t("heading")}</h2>

        <Socials className="m-auto !text-3xl" />
      </div>

      <ContactForm
        translation={{
          name: {
            label: t("name.label"),
            placeholder: t("name.placeholder"),
          },
          email: {
            label: t("email.label"),
            placeholder: t("email.placeholder"),
          },
          subject: {
            label: t("subject.label"),
            placeholder: t("subject.placeholder"),
          },
          button: t("send"),
          success: {
            title: t("success.title"),
            message: t("success.message"),
          },
          error: {
            title: t("error.title"),
            message: t("error.message"),
          },
          formAria: t("formAriaLabel"),
        }}
      />
    </section>
  );
};

export default SectionContact;

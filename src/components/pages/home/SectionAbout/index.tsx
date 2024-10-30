import Socials from "@/components/ui/Socials";
import { TFunction } from "@/locales/types";

export interface SectionAboutProps {
  t: TFunction;
}

const SectionAbout = ({ t }: SectionAboutProps) => {
  return (
    <>
      <section role="region" id="about" className="bg-primary text-white py-24">
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

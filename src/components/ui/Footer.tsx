import initTranslations from "@/locales/i18n";
import Image from "next/image";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Socials from "./Socials";

const Footer = async () => {
  const { t } = await initTranslations(["footer"]);

  return (
    <>
      <footer className="py-24 text-center bg-primary flex flex-col gap-10 text-white">
        <Image
          alt="Matheus Andrade's logo"
          src="/images/logo/white.png"
          width={76}
          height={100}
          className="m-auto"
        />

        <Socials className="!text-white !text-4xl m-auto" />

        <p
          className="flex flex-col items-center gap-2 m-auto"
          aria-label={`${t("madeAria")} NextJS, TypeScript and Tailwind`}
        >
          <span aria-hidden>{t("made")}</span>
          <span aria-hidden className="flex gap-2 items-center">
            <RiNextjsLine
              title="NextJS"
              key="NextJS"
              aria-label="NextJS"
              className="text-[1.4em]"
            />
            <SiTypescript
              title="TypeScript"
              key="TypeScript"
              aria-label="TypeScript"
              className="text-[1.1em]"
            />
            <RiTailwindCssFill
              title="Tailwind"
              key="Tailwind"
              aria-label="Tailwind"
              className="text-[1.3em]"
            />
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;

import { TFunction } from "@/locales/types";
import Image from "next/image";
import { FaRegHand } from "react-icons/fa6";
import NameSplitted from "./NameSplitted";
import CSS from "./style.module.css";

export interface SectionHeroProps {
  t: TFunction;
}

const SectionHero = ({ t }: SectionHeroProps) => {
  return (
    <>
      <section
        role="region"
        className={`flex flex-col py-32 max-md:pb-24 min-h-screen gap-12 justify-center items-center ${CSS.header}`}
      >
        <Image
          src="/images/profile-picture-matheus-n-andrade.png"
          width={200}
          height={200}
          alt={t("hero.profileImgAlt")}
          className={`rounded-full ${CSS.avatar} max-md:h-[150px] max-md:w-[150px] w-auto h-auto`}
          priority
        />

        <div className="flex flex-col gap-6 items-center">
          <p className="text-[40px] max-lg:text-2xl text-muted">
            <span>{t("hero.hello")}</span>
            <span className={`ms-2 ${CSS.hand_hello}`}>
              <FaRegHand aria-label={t("hero.handHelloLabel")} />
            </span>
          </p>

          <NameSplitted />

          <p className="text-[40px] max-lg:text-2xl text-muted bg-white bg-opacity-70 backdrop-blur-sm leading-relaxed flex gap-3 max-md:gap-1 items-center justify-center w-fit m-auto">
            <span aria-hidden>{"{"}</span>
            <span className="mx-3 d-inline-block">{t("hero.developer")}</span>
            <span aria-hidden>{"}"}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionHero;

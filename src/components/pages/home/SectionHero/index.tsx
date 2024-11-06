import initTranslations from "@/locales/i18n";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { FaRegHand } from "react-icons/fa6";
import NameSplitted from "./NameSplitted";
import { sectionHeroAnimations } from "./animations";
import CSS from "./style.module.css";

const SectionHero = async () => {
  const { t } = await initTranslations(["home"]);

  const imageAnimation = sectionHeroAnimations.image;
  const firstParagraphAnimation = sectionHeroAnimations.firstParagraph;
  const nameAnimation = sectionHeroAnimations.name;
  const secondParagraphAnimation = sectionHeroAnimations.secondParagraph;

  return (
    <>
      <section
        className={`flex flex-col py-32 max-md:py-20 min-h-screen gap-12 justify-center items-center relative`}
      >
        <motion.div
          className={CSS.header_background}
          aria-label="hidden"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.8,
          }}
        ></motion.div>

        <motion.div {...imageAnimation}>
          <Image
            src="/images/profile-picture-matheus-n-andrade.png"
            width={200}
            height={200}
            alt={t("hero.profileImgAlt")}
            className={`rounded-full ${CSS.avatar} max-md:h-[150px] max-md:w-[150px] w-auto h-auto`}
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-6 items-center">
          <motion.p
            className="text-[40px] max-lg:text-2xl text-muted"
            {...firstParagraphAnimation}
          >
            <span>{t("hero.hello")}</span>
            <span className={`ms-2 ${CSS.hand_hello}`}>
              <FaRegHand aria-label={t("hero.handHelloLabel")} />
            </span>
          </motion.p>

          <motion.div {...nameAnimation}>
            <NameSplitted />
          </motion.div>

          <motion.p
            {...secondParagraphAnimation}
            className="text-[40px] max-lg:text-2xl text-muted bg-white bg-opacity-70 backdrop-blur-sm leading-relaxed flex gap-3 max-md:gap-1 items-center justify-center w-fit m-auto"
          >
            <span aria-hidden>{"{"}</span>
            <span className="mx-3 d-inline-block">{t("hero.developer")}</span>
            <span aria-hidden>{"}"}</span>
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default SectionHero;

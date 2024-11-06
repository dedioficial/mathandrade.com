import initTranslations from "@/locales/i18n";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Socials = async ({ className }: { className?: string }) => {
  const { t } = await initTranslations(["socials"]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      alt: t("github"),
      href: "https://github.com/dedioficial",
    },
    {
      icon: <FaLinkedinIn />,
      alt: t("linkedin"),
      href: "https://www.linkedin.com/in/math-andrade/",
    },
    {
      icon: <FaInstagram />,
      alt: t("instagram"),
      href: "https://www.instagram.com/deadmat94/",
    },
  ];

  return (
    <>
      <ul
        className={`flex gap-2 items-center justify-center md:ms-auto text-primary text-xl ${className}`}
        aria-label={t("socialsAriaLabel")}
      >
        {socialLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              aria-label={link.alt}
              className="rubberBand inline-block"
              title={link.alt}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Socials;

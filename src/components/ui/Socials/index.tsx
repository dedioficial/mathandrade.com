import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
const socialLinks = [
  {
    icon: <FaGithub />,
    alt: "Check my GitHub",
    href: "https://github.com/dedioficial",
  },
  {
    icon: <FaLinkedinIn />,
    alt: "Check my Linkedin",
    href: "https://www.linkedin.com/in/math-andrade/",
  },
];

const Socials = () => {
  return (
    <>
      <ul className="flex gap-2 items-center justify-center order-2 md:ms-auto">
        {socialLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              aria-label={link.alt}
              className="text-primary text-xl rubberBand inline-block"
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
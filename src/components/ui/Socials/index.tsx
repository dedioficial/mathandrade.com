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

const Socials = ({ className }: { className?: string }) => {
  return (
    <>
      <ul
        className={`flex gap-2 items-center justify-center md:ms-auto text-primary text-xl ${className}`}
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

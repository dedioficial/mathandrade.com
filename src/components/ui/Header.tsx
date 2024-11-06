import initTranslations from "@/locales/i18n";
import Image from "next/image";
import Navbar from "./Navbar";
import { navLinks } from "./Navbar/linksList";
import Socials from "./Socials";

const Header = async () => {
  const { t } = await initTranslations(["nav"]);

  const navLinksList = navLinks.map((link) => {
    link.title = t(link.title);
    return link;
  });

  return (
    <>
      <header className="flex max-md:grid max-md:grid-cols-3 py-6 px-4 max-md:px-10 w-full max-w-7xl m-auto items-center gap-6 absolute top-0 left-0 right-0 max-md:gap-y-0">
        <Image
          src="/images/logo/blue.png"
          alt="Matheus Andrade logo"
          height={80}
          width={61.05}
          className="max-md:!w-[36.63px] max-md:!h-[48px] order-1"
          priority
          style={{
            width: "auto",
            height: "auto",
          }}
        />

        <Navbar navLinks={navLinksList} />

        <Socials className="order-2" />
      </header>
    </>
  );
};

export default Header;

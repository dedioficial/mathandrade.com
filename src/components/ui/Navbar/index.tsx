"use client";

import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../Button";

export type navLink = {
  title: string;
  href: string;
};

export interface NavbarProps {
  navLinks: navLink[];
}

const Navbar = ({ navLinks }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);

  const handleOpenNav = () => {
    if (!navRef.current) return;

    const navElement = navRef.current;
    const attribute = "data-open";

    if (navElement.getAttribute(attribute) !== null) {
      navElement.style.height = "0px";
      navElement.removeAttribute(attribute);
      return;
    }

    const height = navElement?.scrollHeight;

    navElement.style.height = height + "px";
    navElement.setAttribute(attribute, "true");
  };

  return (
    <>
      <button
        className="ms-auto md:hidden text-primary cursor-pointer text-2xl order-3"
        onClick={handleOpenNav}
        aria-controls="navlist"
      >
        <FaBars />
      </button>

      <nav
        id="nav"
        ref={navRef}
        className={`overflow-hidden max-md:h-0 md:!h-auto max-md:col-span-3 transition-all duration-300 group order-4 max-md:backdrop-blur-[2px] bg-white bg-opacity-70`}
      >
        <ul
          className="md:flex max-md:grid max-md:grid-cols-2 gap-4 items-center max-md:py-5"
          id="navlist"
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="max-md:scale-0 max-md:group-[[data-open]]:scale-100 transition-all duration-700"
            >
              <Button
                asLink
                href={link.href}
                aria-label={link.title}
                className="max-md:!text-sm"
              >
                {link.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

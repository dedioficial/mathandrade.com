"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode } from "react";

type ButtonOrLink = ButtonHTMLAttributes<HTMLButtonElement> &
  LinkHTMLAttributes<HTMLAnchorElement>;

export interface ButtonProps extends ButtonOrLink {
  children: ReactNode;
  fnMode?: boolean;
  asLink?: boolean;
  href?: string;
  target?: string;
}

const Button = ({
  children,
  className,
  fnMode = true,
  asLink = false,
  href,
  ...props
}: ButtonProps) => {
  const commonClasses = `px-4 py-2 flex gap-2 rounded-full items-center justify-center bg-gray-100 text-center hover:bg-gray-300 transition-all text-black ${className}`;

  const commonChildren = (
    <>
      {fnMode && (
        <span className="text-blue-400" aria-hidden>
          fn
        </span>
      )}
      <span>
        {children}
        {fnMode && (
          <span className="text-blue-400" aria-hidden>
            ()
          </span>
        )}
      </span>
    </>
  );

  if (asLink)
    return (
      <Link href={href!} className={commonClasses} {...props}>
        {commonChildren}
      </Link>
    );

  return (
    <>
      <button className={commonClasses} {...props}>
        {commonChildren}
      </button>
    </>
  );
};

export default Button;

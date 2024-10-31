import Button from "@/components/ui/Button";
import Image from "next/image";
import { ReactNode } from "react";

export interface PortfolioCardProps {
  src: string;
  href: string;
  title: string;
  description: string;
  button?: string;
  icons?: ReactNode[];
}

const PortfolioCard = ({
  src,
  href,
  title,
  description,
  button,
  icons,
}: PortfolioCardProps) => {
  return (
    <>
      <li
        role="article"
        className="bg-white rounded shadow-xl p-12 flex items-center flex-col gap-10 text-gray-700 border"
        aria-label={`${title}`}
      >
        <Image
          src={src}
          alt={`${title} logo`}
          width={244}
          height={70}
          className="max-h-[70px] h-auto w-auto aspect-[244/70]"
          title={`${title}`}
        />

        {icons && (
          <ul
            className="flex gap-2 text-xl rounded bg-sky-100 p-2"
            aria-label="List of tecnologies used in this project"
          >
            {icons.map((icon, index) => (
              <li key={index}>{icon}</li>
            ))}
          </ul>
        )}

        <p className="text-muted text-base text-center grow flex items-center">
          {description}
        </p>

        <Button asLink href={href} target="_blank">
          {button}
        </Button>
      </li>
    </>
  );
};

export default PortfolioCard;

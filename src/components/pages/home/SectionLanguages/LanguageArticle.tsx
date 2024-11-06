import { ReactNode } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import CSS from "./style.module.css";

export interface LanguageArticleProps {
  stars: string;
  first: boolean;
  title: string;
  paragraph: string;
  list: Map<string, { title: string; stars: number; icon?: ReactNode }>;
  listAriaLabel: string;
}

const LanguageArticle = ({
  title,
  paragraph,
  first,
  list,
  listAriaLabel,
  stars,
}: LanguageArticleProps) => {
  return (
    <>
      <div className={first ? CSS.front : CSS.back}>
        <article
          className={`md:p-12 px-6 flex flex-col gap-12 max-md:gap-6 max-w-[640px] text-center ${
            first ? "items-end md:text-end ms-auto" : "items-start md:text-left"
          }`}
        >
          <h2 className={`${first ? "" : "!text-white"} w-full`}>{title}</h2>

          <p
            className={`text-base md:min-h-20 flex ${
              first ? "!text-secondary" : "!text-white"
            }`}
          >
            {paragraph}
          </p>

          <ul
            className="grid grid-cols-3 max-md:grid-cols-2 max-md:gap-4 gap-10 w-full"
            aria-label={listAriaLabel}
          >
            {[...list].map(([, item]) => {
              return (
                <li
                  key={item.title}
                  className={`bg-white border ${
                    first ? "backdrop-blur-sm bg-opacity-80" : ""
                  }  shadow-md rounded p-4 gap-4 h-full w-full flex flex-col items-center justify-center text-center`}
                  title={item.title}
                  aria-label={`${item.title} - ${item.stars} ${stars}`}
                >
                  <span className="text-4xl" aria-hidden>
                    {item.icon}
                  </span>

                  <div className="flex gap-1 items-center" aria-hidden>
                    {Array(item.stars)
                      .fill(null)
                      .map((_, i) => (
                        <FaStar className="text-yellow-400" key={i} />
                      ))}

                    {Array(5 - item.stars)
                      .fill(null)
                      .map((_, i) => (
                        <FaRegStar className="text-yellow-400" key={i} />
                      ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </>
  );
};

export default LanguageArticle;

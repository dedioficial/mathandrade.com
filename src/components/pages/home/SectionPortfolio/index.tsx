import { TFunction } from "@/locales/types";
import { FaRegHandPointDown } from "react-icons/fa6";
import PortfolioCard from "./PortfolioCard";
import portfolioList from "./portfolioList";
import CSS from "./style.module.css";

export interface SectionPortfolioProps {
  t: TFunction;
}

const SectionPortfolio = ({ t }: SectionPortfolioProps) => {
  return (
    <>
      <section role="region" id="portfolio" className="pt-0 bg-gray-50">
        <div className="bg-primary text-white py-24 -mb-10">
          <div className="max-w-4xl text-center flex flex-col gap-10 m-auto px-4 ">
            <h2 className="!text-white">{t("portfolio.heading")}</h2>
            <p>{t("portfolio.paragraph")}</p>

            <div className={CSS.hand} aria-hidden>
              <FaRegHandPointDown />
            </div>
          </div>
        </div>

        <ul className="grid  max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 m-auto gap-4 max-md:gap-6 px-6 max-w-7xl">
          {portfolioList.map(({ description, ...portfolio }) => (
            <PortfolioCard
              key={portfolio.title}
              {...portfolio}
              description={t(description)}
              button={t(portfolio.button ?? "portfolio.button")}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default SectionPortfolio;

import languaguesList from "../SectionLanguages/languagesList";
import { PortfolioCardProps } from "./PortfolioCard";

const portfolioList: PortfolioCardProps[] = [
  {
    title: "Streamar",
    description: "portfolio.descriptions.streamar",
    src: "/images/portfolio/streamar-logo.png",
    href: "https://www.streamar.com.br/",
    icons: [
      languaguesList.front.get("angular")?.icon,
      languaguesList.front.get("typescript")?.icon,
      languaguesList.front.get("bootstrap")?.icon,
      languaguesList.back.get("php")?.icon,
      languaguesList.back.get("mysql")?.icon,
      languaguesList.back.get("firebase")?.icon,
    ],
  },
  {
    title: "Food Delivery Web App",
    description: "portfolio.descriptions.italifood",
    src: "/images/portfolio/italifood-logo.png",
    href: "https://restaurante.mathandrade.com/",
    icons: [
      languaguesList.front.get("reactjs")?.icon,
      languaguesList.front.get("javascript")?.icon,
      languaguesList.front.get("bootstrap")?.icon,
      languaguesList.back.get("php")?.icon,
      languaguesList.back.get("lumen")?.icon,
      languaguesList.back.get("mysql")?.icon,
      languaguesList.back.get("firebase")?.icon,
    ],
    button: "portfolio.checkDemo",
  },
  {
    title: "ABN Serralheria",
    description: "portfolio.descriptions.abn",
    src: "/images/portfolio/abn-logo.png",
    href: "https://www.abnserralheria.com.br/",
    icons: [
      languaguesList.front.get("angular")?.icon,
      languaguesList.front.get("typescript")?.icon,
      languaguesList.front.get("bootstrap")?.icon,
      languaguesList.back.get("php")?.icon,
      languaguesList.back.get("mysql")?.icon,
    ],
  },
];

export default portfolioList;

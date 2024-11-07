import Footer from "@/components/ui/Footer";
import initTranslations from "@/locales/i18n";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
}

export async function generateMetadata() {
  const { t } = await initTranslations(["home"]);

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      type: "website",
      url: "https://www.mathandrade.com/",
      images: [
        {
          url: "https://www.mathandrade.com/images/open-graph/profile-picture-1200.jpg",
          width: 1200,
          height: 1200,
        },
        {
          url: "https://www.mathandrade.com/images/open-graph/profile-picture-500.png",
          width: 500,
          height: 500,
        },
      ],
      locale: t("metadata.opengraph.locale"),
      siteName: t("metadata.title"),
    },
  };
}

export default async function RootLayout({ children }: LayoutProps) {
  const { t } = await initTranslations(["home"]);

  return (
    <html lang={t("htmlLang")}>
      <body className={`${poppinsFont.className} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

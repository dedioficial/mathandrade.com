import Header from "@/components/ui/Header";
import initTranslations from "@/locales/i18n";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/ui/Footer";

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
  };
}

export default async function RootLayout({ children }: LayoutProps) {
  const { t } = await initTranslations(["home"]);

  return (
    <html lang={t("htmlLang")}>
      <body className={`${poppinsFont.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

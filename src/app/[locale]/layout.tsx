import initTranslations from "@/locales/i18n";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <html lang={t("htmlLang")}>
      <body className={`${poppinsFont.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

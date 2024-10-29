import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus N. Andrade // Desenvolvedor FullStack",
  description: "Developer | NextJS | React | TypeScript | JavaScript | PHP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${poppinsFont.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

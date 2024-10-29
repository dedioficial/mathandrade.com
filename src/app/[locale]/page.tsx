interface HomeParams {
  locale: "en" | "pt";
}

export default async function LocalePage({ params }: { params: HomeParams }) {
  const { locale } = await params;

  const currentLocale = locale || "en";

  return <>Hello {currentLocale}</>;
}

import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stratos Digital — Software studio for ambitious teams",
  description:
    "We help ambitious companies design, build, and scale digital systems — Web Apps, Mobile, Cloud, AI integration. From MVP to products serving hundreds of thousands.",
  keywords: [
    "software development",
    "IT consulting",
    "Next.js",
    "react",
    "thailand",
    "bangkok",
    "B2B",
    "enterprise",
  ],
  openGraph: {
    title: "Stratos Digital — Software studio for ambitious teams",
    description:
      "Web Apps · Mobile · Cloud · AI. From idea to launch in 8 weeks.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

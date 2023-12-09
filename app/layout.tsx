import type { Metadata } from "next";
import { dir } from "i18next";

import { Inter } from "next/font/google";
import "./globals.css";

const languages = ["vi", "en"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiTrust",
  description: "Decentralized asset management protocol",
};

function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={lng}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;

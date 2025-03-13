import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Academy - Conhecimento que Transforma",
  description:
    "A Global Academy, parte da Global Services Corporation, oferece conhecimento de alto nível para impulsionar carreiras e negócios.",
  openGraph: {
    type: "website",
    url: "https://academy.globalsc.ao",
    title: "Global Academy - Conhecimento que Transforma",
    description:
      "A Global Academy, parte da Global Services Corporation, oferece conhecimento de alto nível para impulsionar carreiras e negócios.",
    images: [
      {
        url: "/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Global Academy - O Conhecimento que Transforma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://academy.globalsc.ao",
    title: "Global Academy - Conhecimento que Transforma",
    description:
      "A Global Academy, parte da Global Services Corporation, oferece conhecimento de alto nível para impulsionar carreiras e negócios.",
    images: ["/seo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

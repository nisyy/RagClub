import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://ragclubprod.vercel.app";
const siteDescription =
  "身近にアートを感じられるカフェ。大阪・東大阪にあるギャラリーカフェ。コーヒー・パフェ・焼き菓子・アート作品の展示販売・スペースレンタル。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CAFE RUG CLUB | ギャラリーカフェ 東大阪",
    template: "%s | CAFE RUG CLUB",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "CAFE RUG CLUB",
    title: "CAFE RUG CLUB | ギャラリーカフェ 東大阪",
    description: siteDescription,
    images: [
      {
        url: "/og-logo.png",
        width: 1080,
        height: 1080,
        alt: "CAFE RUG CLUB ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAFE RUG CLUB | ギャラリーカフェ 東大阪",
    description: siteDescription,
    images: ["/og-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

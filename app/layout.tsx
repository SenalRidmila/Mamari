import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import CookieConsent from "../components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAMARI Foreign Employment Agency | Sri Lanka Manpower to Global Jobs",
  description: "Mamari Foreign Employment Agency is a top-rated manpower recruitment agency in Sri Lanka, providing highly skilled and semi-skilled Sri Lankan workers for international jobs in Israel, Europe, and the Middle East.",
  keywords: "Foreign employment agency Sri Lanka, Sri Lanka manpower agency, jobs in Israel for Sri Lankans, overseas recruitment Sri Lanka, Mamari foreign employment, construction jobs Israel, Elpitiya employment agency, migrate from Sri Lanka",
  openGraph: {
    title: "MAMARI Foreign Employment Agency",
    description: "Your Gateway to Global Careers. Trusted Sri Lankan manpower recruitment agency.",
    url: "https://mamariforeign.lk",
    siteName: "Mamari Foreign Employment",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

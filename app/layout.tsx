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
  title: "Mamari Foreign Employment Agency | Sri Lanka to Global Jobs",
  description: "Mamari Foreign Employment Agency provides highly skilled and semi-skilled Sri Lankan workers to international employers, primarily in Israel. Trusted manpower recruitment in Sri Lanka.",
  keywords: "Foreign employment agency Sri Lanka, jobs in Israel for Sri Lankans, overseas recruitment Sri Lanka, Mamari foreign employment, construction jobs Israel",
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

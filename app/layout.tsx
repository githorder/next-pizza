import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { Header } from "@/components/shared";

const nunito = localFont({
  src: "./assets/fonts/Nunito.ttf",
  variable: "--font-nunito",
  weight: "400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Next Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${nunito.className} antialiased`}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

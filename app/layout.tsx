import localFont from "next/font/local";

import "./globals.css";

const nunito = localFont({
  src: "./assets/fonts/Nunito.ttf",
  variable: "--font-nunito",
  weight: "400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}

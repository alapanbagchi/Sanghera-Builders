import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://use.typekit.net/caf5gjf.css"></link>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/caf5gjf.css"
        ></link>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

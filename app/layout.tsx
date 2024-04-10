import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { anuphan } from "@/lib/font";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Doctor Q Clinic | คลินิกปรับสภาพฮอร์โมน",
  description: "Doctor Q Clinic | Testoserone Replacement Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-primary/10 font-sans antialiased",
          anuphan.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { MobileNavbarContext } from "@/components/ui-layout/mobile-navbar/mobile-navbar-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyzion",
  description: "Empresa de desenvolvimento de websites e aplicativos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileNavbarContext>{children}</MobileNavbarContext>
      </body>
    </html>
  );
}

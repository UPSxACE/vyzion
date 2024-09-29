import { MobileNavbarProvider } from "@/components/ui-layout/mobile-navbar/mobile-navbar-provider";
import { Toaster } from "@/components/ui/sonner";
import { InitialLoadProvider } from "@/hooks/initial-load/initial-load-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JumpBackButton from "@/components/ui-layout/go-back-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyzion",
  description: "Empresa de desenvolvimento de websites e aplicativos.",
  openGraph: {
    images: [
      {
        url: "http://vyzion.pt/preview.png",
        secureUrl: "https://vyzion.pt/preview.png",
        width: 1891,
        height: 915,
        alt: "Preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <InitialLoadProvider>
          <MobileNavbarProvider>{children}</MobileNavbarProvider>
        </InitialLoadProvider>
        <JumpBackButton />
        <Toaster richColors />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import localFont from "next/font/local";
import Header from "@/components/navigation/Header";
import { useState } from "react";
import MobileHeader from "@/components/navigation/MobileHeader";

const minesweeperfont = localFont({
  src: "../../public/fonts/mine-sweeper.otf",
  variable: "--font-minesweeper",
});

const andaluzia = localFont({
  src: "../../public/fonts/Andaluzia.ttf",
  variable: "--font-andaluzia",
});

const metalurdo = localFont({
  src: "../../public/fonts/Metalurdo.ttf",
  variable: "--font-metalurdo",
});

const forward = localFont({
  src: "../../public/fonts/Forward.ttf",
  style: "normal",
  variable: "--font-forward",
});

const brokenConsole = localFont({
  src: "../../public/fonts/brokenConsoleBold.ttf",
  variable: "--font-brokenConsole",
});

const lexendDeca = localFont({
  src: "../../public/fonts/LexendDecaRegular.ttf",
  variable: "--font-lexendDeca",
});

const overpassMono = localFont({
  src: "../../public/fonts/OverpassMono-VariableFont_wght.ttf",
  variable: "--font-overpassMono",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clark's Website",
  description:
    "Clark Brace's personal website. Showcasing projects and anything else I want to share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${minesweeperfont.variable} ${brokenConsole.variable} ${lexendDeca.variable} ${overpassMono.variable}`}
    >
      <body>
        <div>
          <div className="lg:hidden">
            <MobileHeader />
          </div>
          <div className="hidden lg:block">
            <Header />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

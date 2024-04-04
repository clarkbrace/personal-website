import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import localFont from "@next/font/local";

export const minesweeperfont = localFont({
  src: "../../public/fonts/mine-sweeper.otf",
  variable: "--font-minesweeper",
});

export const andaluzia = localFont({
  src: "../../public/fonts/Andaluzia.ttf",
  variable: "--font-andaluzia",
});

export const metalurdo = localFont({
  src: "../../public/fonts/Metalurdo.ttf",
  variable: "--font-metalurdo",
});

export const forward = localFont({
  src: "../../public/fonts/Forward.ttf",
  style: "normal",
  variable: "--font-forward",
});

export const brokenConsole = localFont({
  src: "../../public/fonts/brokenConsoleBold.ttf",
  variable: "--font-brokenConsole",
});

export const lexendDeca = localFont({
  src: "../../public/fonts/LexendDecaRegular.ttf",
  variable: "--font-lexendDeca",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clark's Website",
  description:
    "Clark Brace's personal website. Showcasing projects, art, and anything else I want to share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${metalurdo.variable} ${forward.variable} ${minesweeperfont.variable} ${brokenConsole.variable} ${lexendDeca.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

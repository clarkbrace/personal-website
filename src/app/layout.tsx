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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

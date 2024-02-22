import Image from "next/image";
import MainNavigation from "@/components/MainNavigation";
import Link from "next/link";
import minesweeper from "./minesweeper/page";

export default function Home() {
  return (
    <main>
      <>
        <MainNavigation></MainNavigation>
        <Link href="\minesweeper">Minesweeper</Link>
      </>
    </main>
  );
}

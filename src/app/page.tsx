import Image from "next/image";
import MainNavigation from "@/components/MainNavigation";
import Link from "next/link";
import minesweeper from "./minesweeper/page";
import HomePageDropDowns from "@/components/HomePageDropDowns";


export default function Home() {
  return (
    <main>
      <>
        <MainNavigation>
          <HomePageDropDowns></HomePageDropDowns>
        </MainNavigation>
      </>
    </main>
  );
}

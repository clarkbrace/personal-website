import MainNavigation from "@/components/MainNavigation";
import { metalurdo, andaluzia } from "./layout";
import CodingSkils from "@/components/CodingSkils";
import PersonalSummary from "@/components/PersonalSummary";

export default function Home() {
  return (
    <main>
      <>
        <MainNavigation></MainNavigation>
        <div className={`text-5xl p-3 w-full text-center`}>
          Welcome to <span className={`${andaluzia.className}`}>Clark's</span>{" "}
          Website
        </div>
        <div className="flex flex-nowrap">
          <PersonalSummary />
          <CodingSkils />
        </div>
      </>
    </main>
  );
}

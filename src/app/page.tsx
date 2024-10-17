import MainNavigation from "@/components/MainNavigation";
import CodingSkils from "@/components/CodingSkills";
import PersonalSummary from "@/components/PersonalSummary";
import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";

export default function Home() {
  return (
    <main>
      <>
        <MainNavigation></MainNavigation>
        <DesktopDefaultPageFormat>
          <div className="max-w-screen-2xl">
            <div
              className={`text-5xl p-5 w-full text-center font-brokenConsole`}
            >
              Welcome to Clark&apos;s Website
            </div>
          </div>
          <div className="flex justify-center">
            <PersonalSummary />
            {/* <CodingSkils /> */}
          </div>
        </DesktopDefaultPageFormat>
      </>
    </main>
  );
}

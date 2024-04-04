import MainNavigation from "@/components/MainNavigation";
import CodingSkils from "@/components/CodingSkills";
import PersonalSummary from "@/components/PersonalSummary";

export default function Home() {
  return (
    <main>
      <>
        <MainNavigation></MainNavigation>
        <div className="flex justify-center">
          <div className="max-w-screen-2xl">
            <div>
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
          </div>
        </div>
      </>
    </main>
  );
}

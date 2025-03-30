import Link from "next/link";
import NavBar from "./NavigationDropdown/NavBar";
import SocialMediaButtons from "../SocialMedia";
import { WebsiteMainNavigationData } from "@/app/data/SiteStructure";

export default function Header() {
  return (
    <nav
      className="bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen 
    p-4 drop-shadow-xl top-0 z-10 rounded-b-3xl  "
    >
      <div className="flex flex-row">
        <div className="flex flex-col w-2/12">
          <Link href={"/"} className="flex relative">
            <div className="flex-grow aspect-square bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat max-h-36 min-h-20 "></div>
          </Link>
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-white drop-shadow-md text-center font-overpassMono text-8xl pb-10">
            <span className="text-BodyBlue">Clark</span> <span className="text-white">Brace</span>
          </h1>
          <NavBar MainNavigationData={WebsiteMainNavigationData} />
        </div>
        <div className="flex w-2/12 justify-end">
          <SocialMediaButtons />
        </div>
      </div>
    </nav>
  );
}

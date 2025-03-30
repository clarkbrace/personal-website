import Link from "next/link";
import React from "react";
import SocialMediaButtons from "../SocialMedia";
import MobileHeaderLeftNav from "./MobileHeaderLeftNav";

export default function MobileHeader() {
  return (
    <nav
      className="bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen 
    p-4 drop-shadow-xl top-0 z-10 rounded-b-3xl"
    >
      <div className="flex flex-row justify-between">
        

        <div className="flex flex-col items-center">
          <Link href={"/"} className="flex relative">
            <div className="flex-grow aspect-square bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat max-h-38 min-h-[6.5rem]"></div>
          </Link>
          <h1 className="text-white drop-shadow-md text-center font-overpassMono text-3xl pb-4 pt-4">
            <div className="text-BodyBlue">Clark</div> <div className="text-white">Brace</div>
          </h1>
        </div>

        <MobileHeaderLeftNav />
      </div>
    </nav>
  );
}


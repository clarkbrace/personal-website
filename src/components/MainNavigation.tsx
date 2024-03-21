import Link from "next/link";
import React from "react";
import SocialMediaButtons from "./SocialMedia";
import HomePageDropDowns from "./HomePageDropDowns";

const MainNavigation = () => {
  return (
    <div className="flex flex-nowrap bg-cyan-400 drop-shadow-md rounded-b-lg p-10 border border-black">
      <Link href={"/"} className="">
        <img
          src="/CBLogosvg.svg"
          className="h-full border border-black flex-shrink-0"
        ></img>
      </Link>

      <div className="h-full w-full max-w-3/4">
        <HomePageDropDowns></HomePageDropDowns>
      </div>
      <SocialMediaButtons />
    </div>
  );
};

export default MainNavigation;

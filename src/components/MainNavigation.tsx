import Link from "next/link";
import React from "react";
import SocialMediaButtons from "./SocialMedia";
import HomePageDropDowns from "./MainNavDropDowns";

const MainNavigation = () => {
  return (
    <div className="flex flex-nowrap bg-zinc-400 drop-shadow-md p-5 h-36 border-b-8 border-zinc-500 bg-main-nav-pattern">
      <Link href={"/"} className=" aspect-square h-full">
        <div className="h-full bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat"></div>
      </Link>

      <div className="w-full">
        <HomePageDropDowns></HomePageDropDowns>
      </div>

      <div className="h-full">
        <SocialMediaButtons />
      </div>
    </div>
  );
};

export default MainNavigation;

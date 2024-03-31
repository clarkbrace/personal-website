import Link from "next/link";
import React from "react";
import SocialMediaButtons from "./SocialMedia";
import HomePageDropDowns from "./MainNavDropDowns";

const MainNavigation = () => {
  return (
    <div className="flex flex-nowrap bg-cyan-400 drop-shadow-md rounded-b-lg p-5  h-36">
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

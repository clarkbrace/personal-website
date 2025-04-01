"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileHeaderLeftNav from "./MobileHeaderLeftNav";
import MobileMenu from "./mobilemenu";
import { WebsiteMainNavigationData } from "@/app/data/SiteStructure";

export default function MobileHeader() {
  const [open, setOpenNavMenu] = useState(false);

  return (
    // Add toggle with state here
    <nav
      className="bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen 
    p-4 drop-shadow-xl top-0 z-10 rounded-b-3xl font-overpassMono w-screen"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center w-1/5 border-2 ">
          <Link href={"/"} className="flex relative w-full">
            <div className="flex border-2 flex-grow aspect-square bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat"></div>
          </Link>
        </div>

        <h1 className="flex justify-center drop-shadow-md text-center font-overpassMono text-4xl pb-4 pt-4 border-2 w-3/5 flex-wrap h-min">
          <span className="flex flex-shrink-0 border-2 text-BodyBlue px-1">Clark</span>
          <span className="border-2 text-white px-1">Brace</span>
        </h1>

        <div className="w-1/5">
          <MobileHeaderLeftNav />
        </div>
      </div>

      <div>
        <MobileMenu NavigationData={WebsiteMainNavigationData} />
      </div>
    </nav>
  );
}

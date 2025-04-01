"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileHeaderLeftNav from "./MobileHeaderLeftNav";
import MobileMenu from "./MobileNavigationMenu";
import { WebsiteMainNavigationData } from "@/app/data/SiteStructure";

export default function MobileHeader() {
  const [open, setOpenNavMenu] = useState(false);

  return (
    <header
      className="bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen 
    p-4 drop-shadow-xl top-0 z-10 rounded-b-3xl font-overpassMono w-screen"
    >
      {!open ? (
        <MobileHeaderContent setOpenNavMenu={setOpenNavMenu} />
      ) : (
        <MobileMenu NavigationData={WebsiteMainNavigationData} setOpenNavMenu={setOpenNavMenu} />
      )}
    </header>
  );
}

interface MobileHeaderContentProps {
  setOpenNavMenu: (value: boolean) => void;
}

function MobileHeaderContent({ setOpenNavMenu }: MobileHeaderContentProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col items-center w-1/4">
        <Link href={"/"} className="flex relative w-full max-h-36 ">
          <div className="fle  flex-grow aspect-square bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat"></div>
        </Link>
      </div>

      <h1 className="flex justify-center drop-shadow-md text-center font-overpassMono text-7xl pb-4 pt-4w-1/2 flex-wrap h-min">
        <span className="flex flex-shrink-0 text-BodyBlue px-1">Clark</span>
        <span className="text-white px-1">Brace</span>
      </h1>

      <div className="w-1/4">
        <MobileHeaderLeftNav setOpenNavMenu={setOpenNavMenu} />
      </div>
    </div>
  );
}

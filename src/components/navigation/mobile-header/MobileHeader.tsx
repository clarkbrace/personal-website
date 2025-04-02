"use client";
import React, { useState } from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import { WebsiteMainNavigationData } from "@/app/data/SiteStructure";
import MobileHeaderContent from "./MobileHeaderContent";

export default function MobileHeader() {
  const [open, setOpenNavMenu] = useState(false);

  return (
    <nav
      className="bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen 
    p-4 drop-shadow-xl top-0 z-10 rounded-b-3xl font-overpassMono w-screen"
    >
      {open ? (
        <MobileNavigationMenu
          NavigationData={WebsiteMainNavigationData}
          setOpenNavMenu={setOpenNavMenu}
        />
      ) : (
        <MobileHeaderContent setOpenNavMenu={setOpenNavMenu} />
      )}
    </nav>
  );
}

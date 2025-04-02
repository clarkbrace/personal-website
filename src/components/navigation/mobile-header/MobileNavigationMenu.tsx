"use client";

import { MainNavigationData } from "../DropdownStructure";
import MobilePageLink from "./MobileNavigationLink";
import MobileNestedDropDown from "./MobileNestedDropDown";

interface MobileMenuProps {
  NavigationData: MainNavigationData;
  setOpenNavMenu: (value: boolean) => void;
}

export default function MobileNavigationMenu({ NavigationData, setOpenNavMenu }: MobileMenuProps) {
  return (
    <div className="flex w-full justify-center flex-col items-center">
      <div
        className="absolute right-4 top-4 bg-hamburgerSymbol bg-contain aspect-square hover:scale-105 h-16 bg-no-repeat"
        onClick={() => setOpenNavMenu(false)}
      ></div>
      {NavigationData.mainNavItems.map((navigationItem) => {
        switch (navigationItem.type) {
          case "pagelink":
            return <MobilePageLink pageLink={navigationItem} card_depth={0} />;
          case "dropdown":
            return <MobileNestedDropDown dropdown={navigationItem} card_depth={0} />;
        }
      })}
    </div>
  );
}

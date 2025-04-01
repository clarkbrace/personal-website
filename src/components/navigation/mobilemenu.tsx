"use client";
import Link from "next/link";
import {
  DropDown,
  MainNavigationData,
  PageLink,
} from "./NavigationDropdown/DropdownStrcture";
import { useState } from "react";
import { div } from "motion/react-client";

interface MobileMenuProps {
  NavigationData: MainNavigationData;
}

export default function MobileMenu({ NavigationData }: MobileMenuProps) {
  return (
    <div className="flex w-full justify-center border-2 flex-col items-center">
      {NavigationData.mainNavItems.map((navigationItem) => {
        switch (navigationItem.type) {
          case "pagelink":
            return <MobilePageLink pageLink={navigationItem} card_depth={0} />;
          case "dropdown":
            return <MobileDropDown dropdown={navigationItem} card_depth={0} />;
        }
      })}
    </div>
  );
}

interface LinkCardProps {
  pageLink: PageLink;
  card_depth: number;
}

function MobilePageLink({ pageLink, card_depth }: LinkCardProps) {
  return (
    <Link href={pageLink.href}>
      {/* // Look into trade offs between passing all data vs only needed. (by
      reference may be better here actually) */}
      <MobileNavigationCard dropDownItem={pageLink} card_depth={card_depth} />
    </Link>
  );
}

interface NavigationCardProps {
  dropDownItem: PageLink | DropDown;
  card_depth: number;
}

function MobileNavigationCard({
  dropDownItem: dropDownItem,
  card_depth,
}: NavigationCardProps) {
  const baseTextSize = 18; // In px
  const minTextSize = 6;
  const fontSize = Math.max(minTextSize, baseTextSize - card_depth * 3);

  var extraTextContent: string;
  switch (dropDownItem.type) {
    case "dropdown":
      extraTextContent = " ⟩";
      break;
    default:
      extraTextContent = "";
      break;
  }

  return (
    <div
      className={`text-nowrap font-${dropDownItem.font}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {dropDownItem.label + extraTextContent}
    </div>
  );
}

// TODO Move to septate files after!!

interface DropDownProps {
  dropdown: DropDown;
  card_depth: number;
}

function MobileDropDown({ dropdown, card_depth }: DropDownProps) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <MobileNavigationCard dropDownItem={dropdown} card_depth={card_depth} />
      </div>

      {open && (
        <div className="pl-6">
          {dropdown.dropDownItems.map((dropdownItem) => {
            switch (dropdownItem.type) {
              case "pagelink":
                return (
                  <MobilePageLink
                    pageLink={dropdownItem}
                    card_depth={card_depth + 1}
                  />
                );
              case "dropdown":
                return (
                  <MobileDropDown
                    dropdown={dropdownItem}
                    card_depth={card_depth + 1}
                  />
                );
            }
          })}
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import { DropDown } from "../DropdownStructure";
import MobileNavigationCard from "./MobileNavigationCard";
import MobilePageLink from "./MobileNavigationLink";

interface DropDownProps {
  dropdown: DropDown;
  card_depth: number;
}
export default function MobileNestedDropDown({ dropdown, card_depth }: DropDownProps) {
  const [open, setOpen] = useState(false);
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
                return <MobilePageLink pageLink={dropdownItem} card_depth={card_depth + 1} />;
              case "dropdown":
                return <MobileNestedDropDown dropdown={dropdownItem} card_depth={card_depth + 1} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { easeInOut } from "motion";
import { DropDown, PageLink } from "../DropdownStructure";

interface Props {
  navigationElements: (DropDown | PageLink)[];
  first?: boolean;
}

export default function DropDownMenu({ navigationElements, first }: Props) {
  return (
    navigationElements.length > 0 && (
      <div
        className={`absolute text-lg  ${
          first ? "left-1/2 -translate-x-1/2 " : ""
        } text-lg font-overpassMono border-8 rounded-lg`}
      >
        {navigationElements?.map((item) => {
          switch (item.type) {
            case "pagelink":
              return (
                <Link href={item.href}>
                  <DropDownCard selectorElement={item} />
                </Link>
              );
            case "dropdown":
              return <DropDownSubMenu dropDown={item} />;
          }
        })}
      </div>
    )
  );
}

interface DropDownSubMenuProps {
  dropDown: DropDown;
}

function DropDownSubMenu({ dropDown }: DropDownSubMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropDownCard selectorElement={dropDown} />
      <AnimatePresence>
        {open && (
          <div className="absolute top-[-8px] right-0">
            <SlideOutAnimation>
              <DropDownMenu navigationElements={dropDown.dropDownItems} />
            </SlideOutAnimation>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface DropDownCardProps {
  selectorElement: DropDown | PageLink;
}

function DropDownCard({ selectorElement }: DropDownCardProps) {
  return (
    <div
      className={`${selectorElement.font} bg-white p-2 border hover:bg-slate-400 text-nowrap ${selectorElement.font}`}
    >
      {selectorElement.label}
    </div>
  );
}

interface SlideOutAnimationProps {
  children: React.ReactNode;
}

function SlideOutAnimation({ children }: SlideOutAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.1, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
}

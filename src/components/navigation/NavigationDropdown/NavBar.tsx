"use client";
import Link from "next/link";
import DropDownMenu from "./DropDown";
import {
  MainNavigationData,
  DropDown,
  PageLink,
} from "@/components/navigation/NavigationDropdown/DropdownStrcture";
import { useState } from "react";
import { AnimatePresence, easeOut, motion } from "motion/react";

interface siteStrcutreProps {
  MainNavigationData: MainNavigationData;
}

export default function NavBar({ MainNavigationData }: siteStrcutreProps) {
  return (
    <div className="flex place-content-between">
      {MainNavigationData.mainNavItems.map((mainNavElement) => {
        switch (mainNavElement.type) {
          case "pagelink":
            return <MainNavLink pageLink={mainNavElement} />;
          case "dropdown":
            return <MainNavDropDown dropDown={mainNavElement} />;
        }
      })}
    </div>
  );
}

interface MainNavLinkProps {
  pageLink: PageLink;
}

const MainNavLink = (props: MainNavLinkProps) => {
  return (
    <Link href={props.pageLink.href}>
      <MainNavHeader label={props.pageLink.label} />
    </Link>
  );
};

interface MainNavDropDownProps {
  dropDown: DropDown;
}

const MainNavDropDown = (props: MainNavDropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MainNavHeader label={props.dropDown.label} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.1, ease: easeOut }}
          >
            <div className="absolute h-[20px] w-full"></div>
            <div
              className="w-0 h-0 translate-y-1 absolute left-1/2 -translate-x-1/2 
                        border-l-[30px] border-l-transparent
                        border-b-[20px] 
                        border-r-[30px] border-r-transparent"
            ></div>
            <div className="translate-y-[20px]">
              <DropDownMenu navigationElements={props.dropDown.dropDownItems} first={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MainNavHeaderProps {
  label: string;
  children?: React.ReactNode;
}
const MainNavHeader = ({ label, children }: MainNavHeaderProps) => {
  return (
    <div className="relative">
      <h1 className=" font-overpassMono text-3xl px-2 pt-1 rounded-lg bg-gray-100 text-BodyBlue text-center border-2">
        {label}
        <div className="">{children}</div>
      </h1>
    </div>
  );
};

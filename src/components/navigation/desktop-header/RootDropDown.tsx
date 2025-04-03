"use client";
import { useState } from "react";
import { DropDown } from "../DropdownStructure";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import NestedDropDown from "./NestedDropDown";
import RootNavigationCard from "./RootNavigationCard";

interface MainNavDropDownProps {
  dropDown: DropDown;
}

export default function RootNavigationDropDown({ dropDown }: MainNavDropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <RootNavigationCard label={dropDown.label} />
      <AnimatePresence>
        {open && (
          <VerticalSlideAnimation>
            <div className="absolute h-[20px] w-full"></div>
            <UpwardArrow />
            <div className="translate-y-[20px]">
              <NestedDropDown navigationElements={dropDown.dropDownItems} first={true} />
            </div>
          </VerticalSlideAnimation>
        )}
      </AnimatePresence>
    </div>
  );
}

interface VerticalSlideAnimationProps {
  children: React.ReactNode;
}

const UpwardArrow = () => {
  return (
    <div
      className="w-0 h-0 translate-y-1 absolute left-1/2 -translate-x-1/2 
                          border-l-[30px] border-l-transparent
                          border-b-[20px] 
                          border-r-[30px] border-r-transparent"
    ></div>
  );
};

const VerticalSlideAnimation = ({ children }: VerticalSlideAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.1, ease: easeInOut }}
    >
      {children}
    </motion.div>
  );
};

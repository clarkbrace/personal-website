import { AnimatePresence, easeInOut, motion } from "motion/react";
import  NestedDropDownCard  from "./NestedDropDownCard";
import NestedDropDown from "./NestedDropDown";
import { useState } from "react";
import { DropDown } from "../DropdownStructure";

interface NestedDropDownProps {
  dropDown: DropDown;
}

export default function NestedDropDownElement({ dropDown }: NestedDropDownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NestedDropDownCard selectorElement={dropDown} />
      <AnimatePresence>
        {open && (
          <div className="absolute top-[-8px] right-0">
            <SlideOutAnimation>
              <NestedDropDown navigationElements={dropDown.dropDownItems} />
            </SlideOutAnimation>
          </div>
        )}
      </AnimatePresence>
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

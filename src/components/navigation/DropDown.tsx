"use client";
import { Children, useState } from "react";
import DropDownItem from "./DropDownItem";
import { DropDownMenuItem } from "../../../types";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { easeInOut, easeOut } from "motion";

interface Props {
  title: string;
  dropDownItems?: DropDownMenuItem[];
  dropDownLink?: string;
}

export default function DropDown(props: Props) {
  const [open, setOpen] = useState(false);

  const showDropDown = open && props.dropDownItems;

  return (
    <div
      className="flex flex-col items-center font-overpassMono px-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={props.dropDownLink ? props.dropDownLink : ""}>
        <h1 className="text-3xl px-2 pt-0.5 rounded-lg bg-gray-100 text-BodyBlue text-center">
          {props.title}
        </h1>
      </Link>

      <AnimatePresence>
        {showDropDown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.1, ease: easeOut }}
            className={`absolute`}
          >
            <div className={`flex flex-col items-center pt-12`}>
              <div
                className="w-0 h-0 translate-y-1 
                        border-l-[30px] border-l-transparent
                        border-b-[20px] 
                        border-r-[30px] border-r-transparent"
              ></div>
              <div className="border-8 rounded-lg">
                {props.dropDownItems &&
                  props.dropDownItems.map((dropDownMenuItem) => (
                    <DropDownItem DropDownItem={dropDownMenuItem} key={dropDownMenuItem.label} />
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const DropdownPanel = {};

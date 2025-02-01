"use client";
import { useState } from "react";
import DropDownItem from "./DropDownItem";
import { DropDownMenuItem } from "../../../types";

interface Props {
  title: string;
  dropDownItems?: DropDownMenuItem[];
}

export default function DropDown(props: Props) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className="flex flex-col items-center font-overpassMono px-2"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <h1 className="text-3xl px-2 pt-0.5 rounded-lg bg-gray-100 text-BodyBlue text-center">
        {props.title}
      </h1>

      {props.dropDownItems && props.dropDownItems.length > 0 && (
        <div
          className={`absolute transition-all ease-in-out duration-200 ${
            showDropDown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className={`flex flex-col items-center pt-12`}>
            <div
              className="w-0 h-0 
                        border-l-[25px] border-l-transparent
                        border-b-[18px] 
                        border-r-[25px] border-r-transparent"
            ></div>
            <div className="border-8 rounded-lg">
              {props.dropDownItems &&
                props.dropDownItems.map((dropDownMenuItem) => (
                  <DropDownItem DropDownItem={dropDownMenuItem} key={dropDownMenuItem.label} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

interface Props {
  dropDownName: string;
  links?: { label: string; href: string; font?: string }[];
}

const DropDownMenu = (props: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div>
        <h1 className="text-xl px-2 pt-1 bg-gray-300 text-center text-dropDown flex items-center justify-center drop-shadow-md font-brokenConsole border-4 border-gray-700 ">
          {props.dropDownName}
        </h1>
        <div className="mt-2 ">
          <ol
            className={`absolute left-1/2  -translate-x-1/2 top-full border-gray-700 border-4 text-dropDownItem transition-all  ${
              showDropDown && props.links
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            {props.links &&
              props.links.map((link, index) => (
                <li
                  key={index}
                  className="bg-gray-300 hover:drop-shadow hover:bg-gray-400 text-base"
                >
                  <Link href={link.href} className={`${link.font} text-sm`}>
                    <div className="border p-1">{link.label}</div>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

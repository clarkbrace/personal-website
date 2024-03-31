"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

interface Props {
  dropDownName: string;
  links?: { label: string; href: string }[];
}

const DropDownMenu = (props: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const bold = "bold";
  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div>
        <h1 className="text-xl px-1 border-b-4 bg-gradient-to-b from-transparent to-green-700 border-yellow-600 rounded-b-lg text-center text-dropDown flex items-center justify-center drop-shadow-md">
          {props.dropDownName}
        </h1>
        <div className="mt-2">
          <ol
            className={`absolute left-1/2 transform -translate-x-1/2 top-full border border-yellow-500 text-dropDownItem transition-all duration-200 ${
              showDropDown
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            {props.links &&
              props.links.map((link, index) => (
                <li
                  key={index}
                  className="bg-yellow-700 hover:drop-shadow hover:bg-yellow-800 text-base"
                >
                  <div className="border p-1">
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

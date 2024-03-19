"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

interface Props {
  dropDownName: string;
  links: { label: string; href: string }[];
}

const DropDownMenu = (props: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const bold = "bold";
  return (
    <div
      className="flex flex-col relative border-black "
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div>
        <h1 className="px-1 border border-x-4 border-b-4 border-black rounded-b-lg  bg-white text-center text-dropDown flex items-center justify-center">
          {props.dropDownName}
        </h1>

        <ol
          className={`${
            showDropDown ? "block" : "hidden"
          } absolute   border border-yellow-500 bg-gray-500 text-dropDownItem `}
        >
          {props.links.map((link, index) => (
            <li
              key={index}
              className="bg-yellow-700 hover:drop-shadow hover:bg-yellow-800 "
            >
              <div className="border p-1">
                <Link href={link.href}>{link.label}</Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DropDownMenu;

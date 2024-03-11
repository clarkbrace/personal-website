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
    <>
      <div
        className="flex flex-col mx-10"
        onMouseEnter={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
      >
        <h1 className="border border-black bg-white text-center">
          {props.dropDownName}
        </h1>

        {showDropDown && (
          <ol className="border border-red bg-gray-500">
            {props.links.map((link, index) => (
              <li key={index} className="hover:font-bold">
                <Link href={link.href}>{link.label}</Link>  
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;

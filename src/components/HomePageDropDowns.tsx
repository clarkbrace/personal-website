import React from "react";
import DropDownMenu from "./DropDownMenu";
import Link from "react";

const HomePageDropDowns = () => {
  const projectsDropDown = [
    { label: "MineSweeper", href: "/minesweeper" },
    { label: "MineSweeper2", href: "/minesweeper" },
    { label: "MineSweeper3", href: "/minesweeper" },
    { label: "MineSweeper4", href: "/minesweeper" },
    { label: "MineSweeper5", href: "/minesweeper" },
  ];

  return (
    <div className="flex flex-nowrap justify-center">
      <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
      <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
            <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
    </div>
  );
};

export default HomePageDropDowns;

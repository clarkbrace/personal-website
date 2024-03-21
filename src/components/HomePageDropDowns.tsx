import React from "react";
import DropDownMenu from "./DropDownMenu";
import Link from "react";

const HomePageDropDowns = () => {
  const projectsDropDown = [{ label: "MineSweeper", href: "/minesweeper" }];

  const aboutMe = [{ label: "Resume", href: "/resume" }];

  return (
    <div className="flex flex-nowrap place-content-evenly">
      <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
      <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
      <DropDownMenu dropDownName="About Me" links={aboutMe}></DropDownMenu>
    </div>
  );
};

export default HomePageDropDowns;

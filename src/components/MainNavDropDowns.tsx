import React from "react";
import DropDownMenu from "./DropDownMenu";
import Link from "react";

const HomePageDropDowns = () => {
  const projectsDropDown = [
    { label: "MineSweeper", href: "/minesweeper", font: "font-minesweeper" },
    { label: "Cinemigos", href: "/cinemigos", font: "font-lexandDeca" },
  ];
  const aboutMe = [{ label: "Resume", href: "/resume" }];
  const blog = undefined;

  return (
    <div className="flex flex-nowrap place-content-evenly">
      <DropDownMenu dropDownName="Blog" links={blog}></DropDownMenu>
      <DropDownMenu
        dropDownName="Projects"
        links={projectsDropDown}
      ></DropDownMenu>
      <DropDownMenu dropDownName="About Me" links={aboutMe}></DropDownMenu>
    </div>
  );
};

export default HomePageDropDowns;

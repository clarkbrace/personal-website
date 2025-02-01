import { DropDownMenuItem } from "../../../types";
import DropDown from "./DropDown";

export default function NavBar() {
  return (
    <div className="flex place-content-between">
      <DropDown title={"Blog"} />
      <DropDown title={"Projects"} dropDownItems={projects} />
      <DropDown title={"About Me"} dropDownItems={aboutMe} />
    </div>
  );
}

const projects: DropDownMenuItem[] = [
  {
    label: "MineSweeper",
    refrence: "/minesweeper",
    styling: "font-minesweeper text-red",
  },
  { label: "Cinemigos", refrence: "/cinemigos", styling: "font-lexandDeca" },
];

const aboutMe: DropDownMenuItem[] = [{ label: "Resume", refrence: "/resume" }];

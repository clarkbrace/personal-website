import React from "react";

interface Props {
  setOpenNavMenu: (value: boolean) => void;
}

function MobileHeaderLeftNav({ setOpenNavMenu }: Props) {
  return (
    <div className="flex flex-col justify-between items-end">
      <div
        className="bg-hamburgerSymbol bg-contain aspect-square hover:scale-105 h-16 bg-no-repeat"
        onClick={() => setOpenNavMenu(true)}
      ></div>
      <a href="https://www.linkedin.com/in/clark-brace" target="_blank" className="">
        <div className="bg-linkedinLogo bg-contain aspect-square hover:scale-105 h-16"></div>
      </a>

      <a href="https://www.github.com/clarkbrace" target="_blank" className="">
        <div className="bg-githubLogo bg-contain aspect-square hover:scale-105 h-16"></div>
      </a>
    </div>
  );
}

export default MobileHeaderLeftNav;

import React from "react";
import MobileMainNavDropdown from "./MobileMainNavDropdown";

function MobileHeaderLeftNav() {
  return (
    <div className="flex flex-col justify-between items-center">
      <MobileMainNavDropdown />
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

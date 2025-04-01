"use client";

import { useState } from "react";

function MobileMainNavDropdown() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {menuOpen ? (
        <></>
      ) : (
        <div
          className="bg-hamburgerSymbol bg-contain aspect-square hover:scale-105 h-16 bg-no-repeat"
          onClick={() => setMenuOpen(true)}
        ></div>
      )}
    </div>
  );
}

export default MobileMainNavDropdown;

const dropDownPanel = (closeMenu: () => {}) => {
  return <div className="flex flex-col"></div>;
};

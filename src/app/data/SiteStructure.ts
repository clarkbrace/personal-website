import { MainNavigationData, DropDown, PageLink } from "@/components/navigation/DropdownStructure";

export const WebsiteMainNavigationData: MainNavigationData = {
  mainNavItems: [
    {
      type: "pagelink",
      label: "Blog",
      href: "/blog",
    },
    {
      type: "dropdown",
      label: "Projects",
      dropDownItems: [
        { type: "pagelink", label: "Minesweeper", href: "/minesweeper", font: "font-minesweeper" },
        { type: "pagelink", label: "Cinemigos", href: "/cinemigos", font: "font-lexandDeca" },
      ],
    },
    {
      type: "dropdown",
      label: "About Me",
      dropDownItems: [{ type: "pagelink", label: "Resume", href: "/resume" }],
    },
  ],
};

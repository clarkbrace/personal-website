import { MainNavigationData, DropDown, PageLink } from "@/components/navigation/DropdownStructure";

export const DummyMainNav: MainNavigationData = {
  mainNavItems: [
    {
      type: "pagelink",
      label: "TEST Blog",
      href: "/blog",
    },
    {
      type: "dropdown",
      label: "TEST Projects",
      dropDownItems: [
        { type: "pagelink", label: "Minesweeper", href: "/minesweeper", font: "font-minesweeper" },
        { type: "pagelink", label: "Cinemigos", href: "/cinemigos", font: "font-lexandDeca" },
        {
          type: "dropdown",
          label: "Test",
          dropDownItems: [
            {
              type: "dropdown",
              label: "Test 2",
              dropDownItems: [
                { type: "pagelink", href: "./", label: "blob" },
                { type: "pagelink", href: "./", label: "blob" },
                { type: "pagelink", href: "./", label: "blob" },
                { type: "pagelink", href: "./", label: "blob" },
                {
                  type: "dropdown",
                  label: "Test 3",
                  dropDownItems: [
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                    { type: "pagelink", label: "result", href: "./" },
                  ],
                },
                { type: "pagelink", href: "./", label: "blob" },
                { type: "pagelink", href: "./", label: "blob" },
                {
                  type: "dropdown",
                  label: "Test 3",
                  dropDownItems: [{ type: "pagelink", label: "result", href: "./" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      label: "TEST About Me",
      dropDownItems: [{ type: "pagelink", label: "Resume", href: "/resume" }],
    },
  ],
};

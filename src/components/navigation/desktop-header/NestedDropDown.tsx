import { DropDown, PageLink } from "../DropdownStructure";
import NestedDropDownElement from "./NestedDropDownElement";
import NestedNavigationLink from "./NestedNavigationLink";

interface Props {
  navigationElements: (DropDown | PageLink)[];
  first?: boolean;
}

export default function NestedDropDown({ navigationElements, first }: Props) {
  return (
    navigationElements.length > 0 && (
      <div
        className={`absolute text-lg  ${
          first ? "left-1/2 -translate-x-1/2 " : ""
        } text-lg font-overpassMono border-8 rounded-lg`}
      >
        {navigationElements?.map((navigationElement) => {
          switch (navigationElement.type) {
            case "pagelink":
              return <NestedNavigationLink navigationElement={navigationElement} />;
            case "dropdown":
              return <NestedDropDownElement dropDown={navigationElement} />;
          }
        })}
      </div>
    )
  );
}

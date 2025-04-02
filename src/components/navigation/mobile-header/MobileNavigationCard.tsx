import { PageLink, DropDown } from "../DropdownStructure";

interface NavigationCardProps {
  dropDownItem: PageLink | DropDown;
  card_depth: number;
}

export default function MobileNavigationCard({
  dropDownItem: dropDownItem,
  card_depth,
}: NavigationCardProps) {
  const baseTextSize = 30; // In px
  const minTextSize = 6;
  const fontSize = Math.max(minTextSize, baseTextSize - card_depth * 3);

  var extraTextContent: string;
  switch (dropDownItem.type) {
    case "dropdown":
      extraTextContent = " ⟩";
      break;
    default:
      extraTextContent = "";
      break;
  }

  return (
    <div
      className={`text-nowrap font-${dropDownItem.font} ${
        dropDownItem.type === "pagelink" ? "underline" : ""
      }`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {dropDownItem.label + extraTextContent}
    </div>
  );
}

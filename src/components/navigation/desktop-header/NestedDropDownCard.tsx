import { DropDown, PageLink } from "../DropdownStructure";

interface NestedDropDownCardProps {
  selectorElement: DropDown | PageLink;
}
export default function NestedDropDownCard({ selectorElement }: NestedDropDownCardProps) {
  return (
    <div
      className={`${selectorElement.font} bg-white p-2 border hover:bg-slate-400 text-nowrap ${selectorElement.font}`}
    >
      {selectorElement.label}
    </div>
  );
}

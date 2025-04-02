import Link from "next/link";
import { PageLink } from "../DropdownStructure";
import NestedDropDownCard from "./NestedDropDownCard";

interface NestedNavigationLinkProps {
  navigationElement: PageLink;
}

export default function NestedNavigationLink({ navigationElement }: NestedNavigationLinkProps) {
  return (
    <Link href={navigationElement.href}>
      <NestedDropDownCard selectorElement={navigationElement} />
    </Link>
  );
}

import Link from "next/link";
import { PageLink } from "../DropdownStructure";
import MobileNavigationCard from "./MobileNavigationCard";

interface LinkCardProps {
  pageLink: PageLink;
  card_depth: number;
}

export default function MobilePageLink({ pageLink, card_depth }: LinkCardProps) {
  return (
    <Link href={pageLink.href}>
      <MobileNavigationCard dropDownItem={pageLink} card_depth={card_depth} />
    </Link>
  );
}

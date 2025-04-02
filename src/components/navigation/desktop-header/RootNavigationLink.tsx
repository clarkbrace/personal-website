import Link from "next/link";
import { PageLink } from "../DropdownStructure";
import RootNavigationCard from "./RootNavigationCard";

interface RootNavigationLinkProps {
  pageLink: PageLink;
}

export default function RootNavigationLink(props: RootNavigationLinkProps) {
  return (
    <Link href={props.pageLink.href}>
      <RootNavigationCard label={props.pageLink.label} />
    </Link>
  );
}

import { DropDownMenuItem } from "../../../types";
import Link from "next/link";

interface Props {
  DropDownItem: DropDownMenuItem;
}

export default function DropDownItem(props: Props) {
  return (
    <Link href={props.DropDownItem.refrence}>
      <div
        className={`${props.DropDownItem.styling} bg-white p-2 border hover:bg-slate-400`}
      >
        {props.DropDownItem.label}
      </div>
    </Link>
  )
  
}

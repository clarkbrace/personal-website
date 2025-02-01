import React from "react";
import { BlogPost } from "../../types";
import getFormattedDate from "../../lib/getFormattedDate";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/blog/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{getFormattedDate(date)}</p>
    </li>
  );
}

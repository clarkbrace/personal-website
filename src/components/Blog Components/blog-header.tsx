import React from "react";
import DateFormatter from "./date-formatter";

interface Props {
  title: string;
  date: string;
}

function BlogHeader({ title, date }: Props) {
  return (
    <div className="flex flex-col flex-grow">
      <h1 className={"text-5xl w-full font-bold text-center pb-2 font-sans"}>{title}</h1>
      <div className="px-40">
        <DateFormatter dateString={date} />
        <hr className={"mt-1"} />
      </div>
    </div>
  );
}

export default BlogHeader;

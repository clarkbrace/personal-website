import Link from "next/link";
import React from "react";

function BlogFooter() {
  return (
    <div className="px-40">
      <hr />
      <Link href={"/blog"}>
        <text className="hover:underline">← Other Posts</text>
      </Link>
    </div>
  );
}

export default BlogFooter;

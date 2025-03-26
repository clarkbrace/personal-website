import Link from "next/link";
import React from "react";
import DateFormatter from "./date-formatter";
import PostPreviewImage from "./post-preview-image";

interface Props {
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  date: string;
}

const PostPreview = ({ title, slug, coverImage, excerpt, date }: Props) => {
  return (
    <div className="mb-16 flex max-w-4xl">
      <div className="flex flex-row">
        <PostPreviewImage coverImage={coverImage} />
        <div className="flex flex-col justify-evenly">
          <div>
            <Link href={`/blog/${slug}`}>
              <h2 className="text-3xl hover:underline mb-2">{title}</h2>
            </Link>
            <DateFormatter dateString={date} />
          </div>
          <hr />
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;

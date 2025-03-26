import React from "react";
import Image from "next/image";

interface Props {
  coverImage: string;
}

function PostPreviewImage({ coverImage }: Props) {
  return (
    <div className={"rounded-2xl  overflow-hidden mr-10"}>
      <Image
        className={""}
        src={coverImage}
        alt={"Blog post cover image"}
        width={150}
        height={150}
      />
    </div>
  );
}

export default PostPreviewImage;

import Link from "next/link";
import React from "react";

const SocialMediaButtons = () => {
  return (
    <div className="flex flex-col border border-black">
      <a href="www.linkedin.com/in/clark-brace" target="_blank">
        <img
          src="/linkedin.svg"
          alt="LinkedIn Link Button"
          width="50"
          height="50"
        ></img>
      </a>
      <a href="https://github.com/clarkbrace" target="_blank">
        <img
          src="/github.svg"
          alt="GitHub Link Button "
          width="50"
          height="50"
        />
      </a>
    </div>
  );
};

export default SocialMediaButtons;

import React from "react";

const SocialMediaButtons = () => {
  return (
    <div className="flex flex-col h-1/2">
      <a
        href="www.linkedin.com/in/clark-brace"
        target="_blank"
        className="aspect-square h-full"
      >
        <div className="bg-linkedinLogo bg-contain aspect-square hover:scale-105"></div>
      </a>

      <a
        href="https://github.com/clarkbrace"
        target="_blank"
        className="aspect-square h-full"
      >
        <div className="bg-githubLogo bg-contain aspect-square hover:scale-105"></div>
      </a>
    </div>
  );
};

export default SocialMediaButtons;

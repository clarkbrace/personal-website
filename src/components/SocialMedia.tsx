import React from "react";

const SocialMediaButtons = () => {
  return (
    <div className="flex flex-col max-h-20 flex-shrink">
      <a
        href="https://www.linkedin.com/in/clark-brace"
        target="_blank"
        className="aspect-square h-full p-0.5"
      >
        <div className="bg-linkedinLogo bg-contain aspect-square hover:scale-105"></div>
      </a>

      <a
        href="https://www.github.com/clarkbrace"
        target="_blank"
        className="aspect-square h-full p-0.5"
      >
        <div className="bg-githubLogo bg-contain aspect-square hover:scale-105"></div>
      </a>
    </div>
  );
};

export default SocialMediaButtons;

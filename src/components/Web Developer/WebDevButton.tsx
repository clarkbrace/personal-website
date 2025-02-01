import Link from "next/link";
import React from "react";

export interface Props {
  buttonText: string;
  source: string;
  openInNewTab?: boolean;
}

const WebDevButton = ({ source, buttonText, openInNewTab }: Props) => {
  return (
    <Link
      href={source}
      target={`${openInNewTab ? "_blank" : ""}`}
      className="hover:scale-105"
    >
      <div className="flex w-[300px] h-[50px] bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen items-center justify-center rounded-lg">
        <h1 className="font-overpassMono text-white text-2xl pt-1">
          {buttonText}
        </h1>
      </div>
    </Link>
  );
};

export default WebDevButton;

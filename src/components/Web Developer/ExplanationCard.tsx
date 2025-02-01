import React from "react";

export interface Props {
  title: string;
  content: string;
  posision?: TextPosision;
  className?: string;
}

export enum TextPosision {
  Center,
  Right,
  Left,
}

const ExplanationCard = ({
  title,
  content,
  posision,
  className = "",
}: Props) => {
  return (
    <div className={`${className} flex flex-col font-overpassMono`}>
      <h1
        className={`text-2xl ${
          posision === TextPosision.Center
            ? "text-center"
            : posision === TextPosision.Right
            ? "text-right"
            : posision === TextPosision.Left
            ? "text-left"
            : ""
        }`}
      >
        {title}
      </h1>
      <div className="flex-grow h-1 bg-white my-1"></div>
      <p className="text-lg flex-grow text-pretty mx-1">{content}</p>
    </div>
  );
};

export default ExplanationCard;

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

const ExplanationCard = ({ title, content, posision, className = "" }: Props) => {
  return (
    <div className={`${className} flex flex-col font-overpassMono pr-4`}>
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
      <hr className="my-1"></hr>
      <p className="text-lg flex-grow text-pretty mx-1">{content}</p>
    </div>
  );
};

export default ExplanationCard;

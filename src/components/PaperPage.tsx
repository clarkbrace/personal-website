import React from "react";
import MainNavigation from "./MainNavigation";

interface Props {
  filePath: string;
}

const PaperPage = (props: Props) => {
  return (
    <>
      <MainNavigation />
      <embed
        className="border border-black rounded flex h-screen"
        width="100%"
        src={`${props.filePath}`}
      ></embed>
    </>
  );
};

export default PaperPage;

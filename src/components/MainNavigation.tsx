import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactElement;
}

const MainNavigation = (props: Props) => {
  return (
    <>
      <div className="flex flex-nowrap h-32 bg-gray-500 drop-shadow-2xl rounded-bl-lg rounded-br-lg p-10 border border-black">
        <Link href={"/"} className="">
          <img
            src="/CBLogosvg.svg"
            className="max-w-full border border-black"
          ></img>
        </Link>
        <div className="w-full border border-black">{props.children}</div>
      </div>
    </>
  );
};

export default MainNavigation;

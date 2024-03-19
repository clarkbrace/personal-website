import React from "react";
import MainNavigation from "@/components/MainNavigation";

const resume = () => {
  return (
    <>
      <MainNavigation />
      <embed
        className="border border-black rounded"
        height="1000"
        width="100%"
        src="Current Resume/Clark_Brace_Resume.pdf"
      ></embed>
    </>
  );
};

export default resume;

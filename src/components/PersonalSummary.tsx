import React from "react";

const PersonalSummary = () => {
  return (
    <div className="flex flex-col w-2/3 p-10">
      <h1 className="text-lg justify-center text-center p-1 font-brokenConsole">
        Personal Summary
      </h1>
      <div className="text-xl bg-gray">
        <p>
          My name is Clark and welcome to my website! I graduated from the
          University of Puget Sound with a degree in Computer Science. I have
          always been interested in computers having grown up in a tech-forward
          family. Ever since a young child I loved playing video games and
          tinkering around with technology.
        </p>
        <p>
          <br />I am now an aspiring software engineer and always excited to
          learn new skills and work on fun projects. I am using this website as
          a means to show off what I have been working on be it video games,
          pixel art, or some other form of media.
        </p>
      </div>
    </div>
  );
};

export default PersonalSummary;

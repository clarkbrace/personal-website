import React from "react";
import DesktopDefaultPageFormat from "../Templates/DesktopDefaultPageFormat";
import ExplanationCard from "./ExplanationCard";
import { TextPosision } from "./ExplanationCard";
import WebDevButton from "./WebDevButton";
import Image from "next/image";

const WebDevMainNav = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-80 bg-gradient-to-br from-WebGradientBlue to-WebGradientGreen font-overpassMono text-8xl tracking-tighter whitespace-nowrap">
        <h1 className="text-BodyBlue drop-shadow-md">Clark Brace</h1>
        <h1 className="text-white drop-shadow-md">Web Developer</h1>
      </div>

      <DesktopDefaultPageFormat className="bg-BodyBlue">
        <div className={`${Styles.rowContainer} flex h-96`}>
          <ExplanationCard
            posision={TextPosision.Left}
            title="What I do:"
            content={
              "I work 1:1 with clients to create or improve their websites. My clients have ranged from non-profit  organizations with content-heavy websites of 200+ pages to small businesses just establishing their presence on the web"
            }
            className="text-white w-[40rem] mx-8"
          />

          <Image
            src={"/PromoImage/SelfPromoPhoto.jpg"}
            alt={"Photo of Clark in an Amazon Bio-Dome in Seattle Washington"}
            width={300}
            height={300}
            style={{
              width: "300",
              height: "auto",
              minWidth: "300",
            }}
            className="rounded-full border-WebGradientGreen border-4 mx-8"
          />
        </div>
      </DesktopDefaultPageFormat>
      <DesktopDefaultPageFormat className="bg-BodyLightBlue ">
        <div className={`${Styles.rowContainer} flex h-96`}>
          <Image
            src={"/bitmap.png"}
            alt={"Photo of Clark in an Amazon Bio-Dome in Seattle Washington"}
            width={300}
            height={300}
            style={{
              width: "300",
              height: "auto",
              minWidth: "300",
            }}
            className="rounded-full border-WebGradientGreen border-4 mx-8 bg-white"
          />

          <ExplanationCard
            title={"What platforms I work with:"}
            content={
              "I primarily work off of the website development platforms Squarespace and Wix. However, I am also experienced in working  HTML, CSS, and JavaScript along with other higher level frameworks such as React/React-Native and Next.js"
            }
            posision={TextPosision.Right}
            className="text-white w-[40rem] mx-8"
          />
        </div>
      </DesktopDefaultPageFormat>

      <DesktopDefaultPageFormat className="bg-BodyBlue">
        <div className={`flex h-96 justify-center items-center flex-col`}>
          <h1 className="text-white font-overpassMono text-2xl pb-4">
            Want to learn more? Sign up for a consultation!
          </h1>
          <WebDevButton
            buttonText={"Contact Me"}
            source={
              "mailto:clarkbrace@gmail.com?subject=Web Development Consultation"
            }
            openInNewTab={true}
          />
        </div>
      </DesktopDefaultPageFormat>
    </>
  );
};

export default WebDevMainNav;

const Styles = {
  rowContainer: "flex items-center w-full justify-between",
};

import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";
import Image from "next/image";
import ExplanationCard from "@/components/Web Developer/ExplanationCard";

export default function Home() {
  return (
    <main>
      <DesktopDefaultPageFormat>
        <div className="flex w-full flex-row justify-between">
          <div className=" w-full pr-4 hidden lg:block">
            <div className="flex relative aspect-square ">
              <Image
                src={"/PromoImage/SelfPromoPhoto.jpg"}
                alt={"Photo of Clark in an Amazon Bio-Dome in Seattle Washington"}
                fill={true}
                className="border-4 rounded-full border-BodyBlue"
              />
            </div>
          </div>

          <ExplanationCard
            title={"About Me"}
            content={
              "My name is Clark and welcome to my website! I graduated from the University of Puget Sound with a degree in Computer Science. I have always been interested in computers having grown up in a tech-forward family. Ever since a young child I loved playing video games and tinkering around with technology. I am now an aspiring software engineer and always excited to learn new skills and work on fun projects. I am using this website as a means to show off what I have been working on be it video games, pixel art, or some other form of media."
            }
          />
        </div>
      </DesktopDefaultPageFormat>
    </main>
  );
}

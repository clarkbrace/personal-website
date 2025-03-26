import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";
import Image from "next/image";
import ExplanationCard from "@/components/Web Developer/ExplanationCard";

export default function Home() {
  return (
    <main>
      <DesktopDefaultPageFormat>
        <div className="flex flex-col">
          <div className="flex flex-row content-between ">
            <Image
              src={"/PromoImage/SelfPromoPhoto.jpg"}
              alt={"Photo of Clark in an Amazon Bio-Dome in Seattle Washington"}
              width={250}
              height={250}
              style={{
                width: "250",
                minWidth: "250",
              }}
              className="rounded-full border-4 border-BodyBlue mx-8"
            />

            <ExplanationCard
              title={"About Me"}
              content={
                "My name is Clark and welcome to my website! I graduated from the University of Puget Sound with a degree in Computer Science. I have always been interested in computers having grown up in a tech-forward family. Ever since a young child I loved playing video games and tinkering around with technology. I am now an aspiring software engineer and always excited to learn new skills and work on fun projects. I am using this website as a means to show off what I have been working on be it video games, pixel art, or some other form of media."
              }
            />
          </div>
        </div>
      </DesktopDefaultPageFormat>
    </main>
  );
}

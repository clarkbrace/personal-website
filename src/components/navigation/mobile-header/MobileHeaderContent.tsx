import Link from "next/link";
import HeaderNavigationSelector from "./NavigationSelector";

interface MobileHeaderContentProps {
  setOpenNavMenu: (value: boolean) => void;
}

export default function MobileHeaderContent({ setOpenNavMenu }: MobileHeaderContentProps) {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-col items-center w-1/4">
        <Link href={"/"} className="flex relative w-full max-h-36 ">
          <div className="fle  flex-grow aspect-square bg-website-icon bg-contain hover:bg-website-icon-ani bg-no-repeat"></div>
        </Link>
      </div>

      <h1 className="flex justify-center drop-shadow-md text-center font-overpassMono text-7xl pb-4 pt-4w-1/2 flex-wrap h-min">
        <span className="flex flex-shrink-0 text-BodyBlue px-1">Clark</span>
        <span className="text-white px-1">Brace</span>
      </h1>

      <div className="w-1/4">
        <HeaderNavigationSelector setOpenNavMenu={setOpenNavMenu} />
      </div>
    </header>
  );
}

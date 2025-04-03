import { MainNavigationData, DropDown, PageLink } from "@/components/navigation/DropdownStructure";
import RootNavigationDropDown from "./RootDropDown";
import RootNavigationLink from "./RootNavigationLink";

interface siteStructureProps {
  MainNavigationData: MainNavigationData;
}

export default function NavigationBar({ MainNavigationData }: siteStructureProps) {
  return (
    <div className="flex place-content-between">
      {MainNavigationData.mainNavItems.map((NavigationItem) => {
        switch (NavigationItem.type) {
          case "pagelink":
            return <RootNavigationLink pageLink={NavigationItem} />;
          case "dropdown":
            return <RootNavigationDropDown dropDown={NavigationItem} />;
        }
      })}
    </div>
  );
}

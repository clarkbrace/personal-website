export interface MainNavigationData {
    mainNavItems: (DropDown | PageLink)[];
  }
  
  export type DropDown = {
    type: "dropdown";
    label: string;
    dropDownItems: (PageLink | DropDown)[];
    font?: string;
  };
  
  export type PageLink = {
    type: "pagelink";
    label: string;
    href: string;
    font?: string;
  };
import React, { useContext } from "react";

import { activeTabIndexContext } from "../../App";
import MainBtn from "../MainBtn";

interface NavItem {
  name: string;
  url: string;
}

type NavList = Array<NavItem>;

const navList: NavList = [
  {
    name: "Shorten Url",
    url: "/shorten",
  },
  { name: "Check Shortened Url", url: "/check" },
];
const NavsButtons: React.FC = () => {
  const activeTabIndex = useContext(activeTabIndexContext);

  return (
    <nav className="flex w-full gap-2 justify-center mb-8">
      {navList.map<React.ReactNode>((navItem, index): React.ReactNode => {
        return (
          <MainBtn action={() => activeTabIndex.setState!(index)} key={index}>
            {navItem.name}
          </MainBtn>
        );
      })}
    </nav>
  );
};

export default NavsButtons;

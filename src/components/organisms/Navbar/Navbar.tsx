/* eslint-disable @next/next/no-img-element */
import HboIcon from "@components/atoms/HboIcon";
import Icon from "@components/atoms/Icon";
import NavbarP from "@components/atoms/NavbarP";
import React from "react";

import {
  navDiv,
  navMain,
  subNavDiv,
  subNavDivIcon,
  subNavDivHboLogo,
} from "./Navbar.styles";

export default function Navbar() {
  return (
    <nav className={navMain({})}>
      <div className={navDiv({})}>
        <div className={subNavDivHboLogo({})}>
          <HboIcon />
        </div>
        <div className={subNavDiv({})}>
          <NavbarP text="Movies" />
          <NavbarP text="TV shows" />
          <NavbarP text="Animations" />
          <NavbarP text="Upgrade" />
        </div>
        <div className={subNavDivIcon({})}>
          <Icon />
        </div>
      </div>
    </nav>
  );
}

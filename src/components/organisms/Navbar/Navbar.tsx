/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import HboIcon from "@components/atoms/HboIcon";
import Icon from "@components/atoms/Icon";
import Link from "@components/atoms/Link";

import { header, nav } from "./Navbar.styles";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <header className={header({})}>
      <div onClick={() => setShow(!show)}>
        <HboIcon />
      </div>
      <nav className={nav({ show })}>
        <ul>
          <li>
            <Link text="Movies" />
          </li>
          <li>
            <Link text="TV shows" />
          </li>
          <li>
            <Link text="Animations" />
          </li>
          <li>
            <Link text="Upgrade" />
          </li>
        </ul>
      </nav>
      <div>
        <Icon />
      </div>
    </header>
  );
}

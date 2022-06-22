import React from "react";
import { hboLogo } from "./HboIcon.syles";

export default function HboIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={"https://www.hbobrasil.com/Content/img/logo-HBO_Max-White.png"}
      alt="logo hbo"
      className={hboLogo({})}
    />
  );
}

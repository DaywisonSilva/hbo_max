/* eslint-disable @next/next/no-img-element */
import React from "react";
import { avatarIcon } from "./Icon.style";

export default function Icon() {
  return (
    <img
      src="https://w7.pngwing.com/pngs/931/209/png-transparent-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black-silhouette.png"
      alt="avatar icon"
      className={avatarIcon({})}
    />
  );
}

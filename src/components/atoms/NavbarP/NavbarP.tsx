import React from "react";
import { styledP } from "./NavbarP.styles";

export default function NavbarP({ text }: { text: string }) {
  return <p className={styledP({})}>{text}</p>;
}

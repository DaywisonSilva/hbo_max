import React from "react";
import { link } from "./Link.style";

export default function Link({ text }: { text: string }) {
  return <p className={link({})}>{text}</p>;
}

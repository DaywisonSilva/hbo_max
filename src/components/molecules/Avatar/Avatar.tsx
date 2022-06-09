import React from "react";

import { avatarContainer, avatarIcon, avatarLabel } from "./Avatar.styles";

type AvatarProps = {
  src: string;
  alt: string;
  label: string;
};

export default function Avatar({ src, alt, label }: AvatarProps) {
  return (
    <div className={avatarContainer({})}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={avatarIcon({})}
        alt={`Esta imagem é do filme: ${alt}`}
        src={`${src}`}
      />
      <p className={avatarLabel({})}>{label} </p>
    </div>
  );
}

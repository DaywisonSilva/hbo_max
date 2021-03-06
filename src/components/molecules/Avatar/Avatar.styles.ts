import { css } from "@stitches/core";

export const avatarContainer = css({
  width: "152px",
  height: "227px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const avatarIcon = css({
  width: "90%",
  height: "60%",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "top",
});
export const avatarLabel = css({
  fontFamily: "sans-serif",
  fontWeight: 700,
});

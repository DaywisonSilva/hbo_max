import { css } from "@stitches/core";

export const navMain = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const navDiv = css({
  width: "1412px",
  height: "82px",
  margin: "10px auto",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  borderRadius: "$defaultBorderRadius",
  display: "flex",
});

export const subNavDivHboLogo = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "50px",
});

export const subNavDiv = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  color: "$white",
});

export const subNavDivIcon = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "$white",
});

import { css } from "@stitches/core";
import breakpoints from "@themes/breakpoints";

export const header = css({
  width: "95%",
  height: "82px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "$defaultBorderRadius",
  margin: "0 auto",
  display: "flex",
});

export const nav = css({
  display: "none",

  variants: {
    show: {
      true: {
        display: "block",
      },
    },
  },

  [`@media(min-width: ${breakpoints.sm})`]: {
    display: "block !important",
  },
});

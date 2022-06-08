import { css } from "@stitches/core";

export const card = css({
  backgroundColor: "red",
  width: "219px",
  height: "280px",
  borderRadius: "10px",
  transition: "transform 0.3s ease-in-out",
  margin: "20px",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.15)",
  },
});

export const cardImage = css({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
});

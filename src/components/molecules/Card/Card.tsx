/* eslint-disable @next/next/no-img-element */
import React from "react";
import { card, cardImage } from "./Card.styles";

type ImageProps = {
  src: string;
  alt: string;
};

function Card({ src, alt }: ImageProps) {
  function handleClick(e: any) {
    e.preventDefault();
    return alert("oi");
  }

  return (
    <div className={card({})} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt={`Banner do filme ${alt}`}
        className={cardImage({})}
      />
    </div>
  );
}

export default Card;

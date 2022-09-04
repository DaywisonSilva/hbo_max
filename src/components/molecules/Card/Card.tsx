/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { card, cardImage } from './Card.styles'

type ImageProps = {
  src: string
  alt: string
  onClick?: () => void
}

function Card({ src, alt, onClick = () => {} }: ImageProps) {
  function handleClick(e: any) {
    e.preventDefault()
    onClick()
  }

  return (
    <div className={card({})} onClick={handleClick} data-testid='card'>
      <img
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt={`Banner do filme ${alt}`}
        className={cardImage({})}
      />
    </div>
  )
}

export default Card

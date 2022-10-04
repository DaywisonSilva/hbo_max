import React from 'react'
import * as Styles from './HeroCollection.styles'

function HeroCollection({ data }: { data: TVshow }) {
  return (
    <div
      className={Styles.Container({
        css: {
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
        }
      })}
    ></div>
  )
}

export default HeroCollection

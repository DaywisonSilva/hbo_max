import Image from 'next/image'
import React from 'react'
import * as Styles from './HeroCollection.styles'

function HeroCollection({ data }: { data: TVshow }) {
  return (
    <div className={Styles.Container()}>
      <Image
        width={'100%'}
        height={'100%'}
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.name}
        layout='fill'
        objectFit='cover'
        objectPosition={'top center'}
      />
    </div>
  )
}

export default HeroCollection
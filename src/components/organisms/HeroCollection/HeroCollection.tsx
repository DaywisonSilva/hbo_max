import { ListInfo } from '@components/molecules'
import getDuration from '@utils/getDuration'
import Image from 'next/image'
import React from 'react'
import * as Styles from './HeroCollection.styles'

function HeroCollection({ data }: { data: TVshow }) {
  return (
    <div className={Styles.Container()}>
      <Image
        quality={100}
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.name}
        layout='fill'
        objectFit='cover'
        objectPosition={'top center'}
      />
      <ListInfo year={data.first_air_date.split('-')[0]} />
    </div>
  )
}

export default HeroCollection

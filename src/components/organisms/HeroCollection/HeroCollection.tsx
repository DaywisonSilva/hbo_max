import { ListInfo } from '@components/molecules'
import getDuration from '@utils/getDuration'
import Image from 'next/image'
import React from 'react'
import ContainerInfo from '../ContainerInfo'
import * as Styles from './HeroCollection.styles'

type HeroCollection = {
  data: TVshow
}

function HeroCollection({ data }: HeroCollection) {
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

      <ContainerInfo data={{ ...data, release_date: data.first_air_date }} />
    </div>
  )
}

export default HeroCollection

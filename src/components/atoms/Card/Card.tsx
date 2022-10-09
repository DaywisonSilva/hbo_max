import useGenre from '@hooks/useGenre'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as Styles from './Card.styles'

type CollectionProps = {
  src: string
  alt: string
  genre: number[]
  mediaType?: 'movie' | 'tv' | 'person' | 'all'
  title: string
  id: number
}

function Card({ src, alt, genre, mediaType, title, id }: CollectionProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const genreData = useGenre({
    ids: genre,
    type: mediaType === 'movie' || mediaType === 'tv' ? mediaType : 'movie'
  })

  return (
    <Link href={`tvshow/${id}`}>
      <div className={Styles.CollectionImageContainer()}>
        <Image
          layout='fill'
          src={imgSrc}
          alt={alt}
          quality={100}
          className={Styles.CollectionImage()}
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/img/blur.png'
          onError={() => setImgSrc('/img/error-card.png')}
        />

        <div className={[Styles.ContainerInfo(), 'info'].join(' ')}>
          <p className={Styles.Title()}>{title}</p>
          <ul className={Styles.Subtitle()}>
            {genreData?.map((genre) => {
              return (
                <li className={Styles.SubtitleItem()} key={genre.id}>
                  {genre.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default Card

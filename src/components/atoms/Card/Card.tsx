import useGenre from '@hooks/useGenre'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import * as Styles from './Card.styles'

type CollectionProps = {
  src: string
  alt: string
  link?: string
  genre: number[]
  mediaType?: 'movie' | 'tv' | 'person' | 'all'
  title: string
}

function Card({ src, alt, link, genre, mediaType, title }: CollectionProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const genreData = useGenre({
    ids: genre,
    type: mediaType === 'movie' || mediaType === 'tv' ? mediaType : 'movie'
  })

  return (
    <div className={Styles.CollectionImageContainer()}>
      {link ? (
        <a>
          <Image
            layout='responsive'
            loading='lazy'
            src={imgSrc}
            alt={alt}
            objectFit='cover'
            className={Styles.CollectionImage()}
            placeholder='blur'
            blurDataURL='/img/blur.png'
            onError={() => setImgSrc('/img/error.png')}
          />
        </a>
      ) : (
        <Image
          layout='fill'
          src={imgSrc}
          alt={alt}
          className={Styles.CollectionImage()}
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/img/blur.png'
          onError={() => setImgSrc('/img/error.png')}
        />
      )}
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
          {/* <li className={Styles.SubtitleItem()}>Adventure</li>
          <li className={Styles.SubtitleItem()}>Sci-Fi</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Card

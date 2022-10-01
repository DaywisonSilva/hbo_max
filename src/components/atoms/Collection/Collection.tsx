import Image from 'next/image'
import React, { useState } from 'react'
import { CollectionImage, CollectionImageContainer } from './Collection.styles'

type CollectionProps = {
  src: string
  alt: string
  link?: string
}

function Collection({ src, alt, link }: CollectionProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <>
      {link ? (
        <a className={CollectionImageContainer()}>
          <Image
            layout='responsive'
            loading='lazy'
            src={imgSrc}
            alt={alt}
            objectFit='cover'
            className={CollectionImage()}
            placeholder='blur'
            blurDataURL='/img/blur.png'
            onError={() => setImgSrc('/img/error.png')}
          />
        </a>
      ) : (
        <div className={CollectionImageContainer()}>
          <Image
            layout='fill'
            src={imgSrc}
            alt={alt}
            className={CollectionImage()}
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/img/blur.png'
            onError={() => setImgSrc('/img/error.png')}
          />
        </div>
      )}
    </>
  )
}

export default Collection

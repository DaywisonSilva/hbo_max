import Image from 'next/image'
import React from 'react'
import { CollectionImage, CollectionImageContainer } from './Collection.styles'

type CollectionProps = {
  src: string
  alt: string
  link?: string
}

function Collection({ src, alt, link }: CollectionProps) {
  return (
    <>
      {link ? (
        <a className={CollectionImageContainer()}>
          <Image
            layout='responsive'
            src={src}
            alt={alt}
            objectFit='cover'
            className={CollectionImage()}
          />
        </a>
      ) : (
        <div className={CollectionImageContainer()}>
          <Image
            layout='fill'
            src={src}
            alt={alt}
            className={CollectionImage()}
            objectFit='cover'
          />
        </div>
      )}
    </>
  )
}

export default Collection

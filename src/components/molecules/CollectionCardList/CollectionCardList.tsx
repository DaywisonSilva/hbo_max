import React from 'react'
import * as Styles from './CollectionCardList.styles'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import { Card } from '@components/atoms'

type CollectionListProps = {
  title: string
  collections: TVshow[]
}

function CollectionList({ title, collections }: CollectionListProps) {
  return (
    <div className={Styles.Container()}>
      <h1 className={Styles.Title()}>{title}</h1>
      <Swiper
        freeMode
        slidesPerView={'auto'}
        modules={[FreeMode]}
        spaceBetween={20}
        className={Styles.SwiperContainer()}
        breakpoints={{
          768: {
            spaceBetween: 0
          }
        }}
      >
        {collections.map((collection, i) => {
          return (
            <SwiperSlide
              style={{ width: 179 }}
              className={Styles.SwiperSlide()}
              key={collection.id}
            >
              <div
                data-aos='zoom-in-up'
                data-aos-offset='200'
                data-aos-once='true'
                data-aos-delay={i * 100}
                style={{ height: '100%' }}
              >
                <Card
                  src={
                    'https://image.tmdb.org/t/p/w500/' +
                    collection.backdrop_path
                  }
                  id={collection.id}
                  genre={collection.genre_ids}
                  alt={collection.name}
                  title={collection.name}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CollectionList

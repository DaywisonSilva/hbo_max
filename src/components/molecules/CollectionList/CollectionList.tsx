import React from 'react'
import * as Styles from './CollectionList.styles'
import { Collection } from '@components/atoms'
import StylesModule from './CollectionList.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'

import { FreeMode } from 'swiper'

function CollectionList() {
  return (
    <div className={Styles.Container()}>
      <h1>Popular Collections</h1>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        freeMode
        spaceBetween={20}
        modules={[FreeMode]}
        className={StylesModule['slide-size']}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   // when window width is >= 480px
        //   720: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   1080: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   }
        // }}
      >
        <SwiperSlide style={{ width: 179 }}>
          <Collection
            src='https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg'
            alt='homem de ferro'
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 179 }}>
          <Collection
            src='https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg'
            alt='homem de ferro'
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 179 }}>
          <Collection
            src='https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg'
            alt='homem de ferro'
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 179 }}>
          <Collection
            src='https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg'
            alt='homem de ferro'
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 179 }}>
          <Collection
            src='https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg'
            alt='homem de ferro'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CollectionList

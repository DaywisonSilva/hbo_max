import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const Container = css({
  userSelect: 'none',
  cursor: 'grab',
  height: 200,
  marginBottom: 20,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 250
  }
})

const Title = css({
  marginBottom: 20,
  color: '#fff'
})

const SwiperContainer = css({
  height: 130,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 200
  }
})

const SwiperSlide = css({
  height: 130,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 200
  }
})

export { Container, Title, SwiperContainer, SwiperSlide }

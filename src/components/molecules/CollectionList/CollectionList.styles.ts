import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const Container = css({
  userSelect: 'none',
  cursor: 'grab',
  minHeight: 180,
  marginBottom: 30,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    minHeight: 250,
    marginBottom: 50
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
  width: '97.5px !important',
  height: 130,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 200,
    width: '170px !important'
  }
})

export { Container, Title, SwiperContainer, SwiperSlide }

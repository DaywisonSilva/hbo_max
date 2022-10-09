import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const Container = css({
  userSelect: 'none',
  minHeight: 200,
  marginBottom: 30,
  marginTop: 20,
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
  height: 150,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 220
  }
})

const SwiperSlide = css({
  width: '225px !important',
  height: 150,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    height: 220,
    width: '350px !important'
  }
})

export { Container, Title, SwiperContainer, SwiperSlide }

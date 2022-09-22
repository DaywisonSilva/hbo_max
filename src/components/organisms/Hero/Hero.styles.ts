import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const container = css({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100vh',
  '&::after': {
    content: '',
    display: 'block',
    width: '100%',
    height: '200px',
    backgroundImage:
      'linear-gradient(to bottom, transparent, #0B0A0A, #0B0A0A)',
    position: 'absolute',
    bottom: -100
  }
})

const video = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover'
})

const containerIcon = css({
  position: 'absolute',
  bottom: 10,
  right: 10,
  cursor: 'pointer',
  display: 'grid',
  placeContent: 'center',
  background: '#2224',
  padding: 10,
  borderRadius: '50%',
  zIndex: 1,
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    bottom: 20,
    right: 20
  }
})

const icon = css({
  color: '#fff'
})

export { container, video, icon, containerIcon }

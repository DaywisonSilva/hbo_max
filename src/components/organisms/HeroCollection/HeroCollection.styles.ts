import { css } from '@stitches/core'

const Container = css({
  width: '100%',
  height: '100vh',
  position: 'relative',
  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 150,
    backgroundImage: 'linear-gradient(transparent, #0b0a0a)',
    zIndex: 1
  }
})

const ContainerInfo = css({ position: 'relative', color: 'white' })

export { Container, ContainerInfo }

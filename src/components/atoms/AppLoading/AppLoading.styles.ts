import { css, keyframes } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const lineDraw = keyframes({
  '70%': { strokeDashoffset: 800, fill: 'transparent' },
  '100%': { fill: '#fff', strokeWidth: 0 }
})

const container = css({
  width: '100%',
  height: '100vh',
  display: 'grid',
  placeContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  background: '#110011',
  zIndex: 1,

  svg: {
    transform: 'scale(1.8)',
    [`@media screen and (min-width: ${breakpoints.sm})`]: {
      transform: 'scale(3)'
    }
  },

  '#path': {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    fill: 'transparent',
    animation: `${lineDraw} 2000ms 1 ease-in-out forwards`
  }
})

export { container }

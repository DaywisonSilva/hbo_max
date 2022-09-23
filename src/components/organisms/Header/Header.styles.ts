import { css, keyframes } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const showItem = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50%)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
})

const header = css({
  width: 'calc(100% - 50px)',
  height: 90,
  padding: '30px',
  margin: '20px 0px 0 0px',
  borderRadius: 20,
  position: 'absolute',
  top: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(5px)',
  zIndex: 1,
  transition: 'all .5s cubic-bezier(.46,-0.56,.56,1.47)'
})

const containerIcons = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
})

const icon = css({
  color: '#fff',
  cursor: 'pointer',
  [`@media screen and (min-width: ${breakpoints.lg})`]: {
    display: 'none'
  }
})

const list = css({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column'
})

const listItem = css({
  margin: '6px 0 ',
  cursor: 'pointer',
  padding: 0,
  opacity: 0,
  fontSize: '1.5rem',
  animation: `${showItem} .5s ease-in-out .5s forwards`
})

export { header, containerIcons, icon, list, listItem }

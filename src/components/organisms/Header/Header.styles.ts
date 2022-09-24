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
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(5px)',
  zIndex: 2,
  position: 'sticky',
  top: 20,
  left: 25,
  userSelect: 'none',
  transition: 'all .5s cubic-bezier(.46,-0.56,.56,1.47)',
  [`@media screen and (min-width:  ${breakpoints.lg})`]: {
    flexDirection: 'row',
    top: 30,
    height: '90px !important',
    padding: '30px 50px',
    margin: '40px 50px 0 50px',
    width: 'calc(100% - 100px)'
  }
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
  flexDirection: 'column',
  fontSize: '1.5rem',
  [`@media screen and (min-width:  ${breakpoints.lg})`]: {
    display: 'flex !important',
    flexDirection: 'row',
    width: '100%',
    minWidth: 600,
    justifyContent: 'space-between',
    fontSize: '1.2rem'
  }
})

const listItem = css({
  width: 'fit-content',
  margin: '2px 0 8px 0 ',
  cursor: 'pointer',
  padding: 0,
  opacity: 0,

  animation: `${showItem} .5s ease-in-out .5s forwards`,
  '&::after': {
    content: '',
    display: 'block',
    width: '100%',
    height: 2,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    position: 'relative',
    top: 2,
    transition: 'all .3s ease-in-out'
  },
  '&:hover': {
    '&::after': {
      backgroundColor: '$primary',
      transform: 'scaleX(1)'
    }
  }
})

export { header, containerIcons, icon, list, listItem }

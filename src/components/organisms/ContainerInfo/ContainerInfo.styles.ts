import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'
import { m } from 'vitest/dist/index-ea17aa0c'

const containerInfo = css({
  color: '#fff',
  position: 'absolute',
  left: 30,
  bottom: 0,
  width: 'calc(100% - 60px)',
  maxWidth: 600,
  zIndex: 1,
  transform: 'scale(.5)',
  transformOrigin: 'left bottom',
  '&::before': {
    content: '',
    display: 'block',
    width: '100%',
    height: '100vh',
    background: '#0005',
    position: 'absolute',
    transform: 'scale(1)',
    boxShadow: '0 0 100px 100px #0005',
    borderRadius: '50px',
    top: 'calc(-35% - 120px)',
    left: -50
  },
  [`@media screen and (min-height: 560px)`]: {
    bottom: 100,
    transform: 'scale(1)'
  },
  [`@media screen and (min-width: ${breakpoints.lg})`]: {
    left: 50,
    top: '35%'
  },
  variants: {
    page: {
      content: {
        [`@media screen and (min-width: ${breakpoints.lg})`]: {
          top: '20%'
        }
      }
    }
  }
})

const infoList = css({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  li: {
    borderRight: '2px solid white',
    paddingRight: 8,
    paddingLeft: 8,
    textOverflow: 'ellipsis',
    fontSize: '1rem',
    [`@media screen and (min-width: ${breakpoints.sm})`]: {
      fontSize: '1.2rem'
    }
  },
  'li:first-child': {
    paddingLeft: 0
  },
  'li:last-child': {
    borderRight: 'none',
    paddingRight: 0
  },

  variants: {
    type: {
      genres: {
        fontSize: '1.5rem',
        li: {
          borderRight: '2px solid white',
          paddingRight: 15,
          paddingLeft: 15,
          fontSize: '1.4rem',
          [`@media screen and (min-width: ${breakpoints.sm})`]: {
            fontSize: '1.6rem'
          }
        }
      }
    }
  }
})

const title = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  margin: '10px 0',
  ' -webkit-line-clamp': 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    fontSize: '4rem'
  }
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

const star = css({
  marginTop: 20,
  marginBottom: 30,
  display: 'flex',
  alignItems: 'center',
  span: {
    marginLeft: 15,
    fontSize: '1.5rem'
  }
})

const buttonContainer = css({
  display: 'flex',
  alignItems: 'center',
  span: {
    marginLeft: 10
  }
})

export {
  containerInfo,
  infoList,
  title,
  containerIcon,
  icon,
  star,
  buttonContainer
}

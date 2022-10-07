import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const InfoList = css({
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

export { InfoList }

import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const SectionOne = css({
  width: '100%',
  padding: '30px',
  position: 'relative',
  zIndex: 1,

  [`@media screen and (min-width:  ${breakpoints.lg})`]: {
    padding: '30px 50px',
    width: '100%'
  }
})

export { SectionOne }

import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const CollectionImageContainer = css({
  width: '45% !important',
  minWidth: 'auto !important',
  minHeight: 'auto !important',
  height: 'auto !important',
  aspectRatio: '11 / 16',
  borderRadius: '5%',
  overflow: 'hidden',
  span: {
    position: 'relative !important',
    width: '100% !important',
    height: '100% !important'
  },
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    width: '30% !important'
  },

  [`@media screen and (min-width: ${breakpoints.lg})`]: {
    width: '15.5% !important'
  }
})

const CollectionImage = css({
  width: '100% !important',
  height: '100% !important',
  position: 'relative !important'
})

export { CollectionImage, CollectionImageContainer }

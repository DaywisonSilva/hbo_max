import { css } from '@stitches/core'

const CollectionImageContainer = css({
  // width: 'calc(230px * 0.78) !important',
  aspectRatio: '12 / 16',
  minWidth: 'auto !important',
  minHeight: 'auto !important',
  height: '100% !important',
  borderRadius: '5%',
  overflow: 'hidden',
  span: {
    position: 'relative !important',
    width: '100% !important',
    height: '100% !important'
  }
})

const CollectionImage = css({
  width: '100% !important',
  height: '100% !important',
  position: 'relative !important'
})

export { CollectionImage, CollectionImageContainer }

import { css } from '@stitches/core'

const CollectionImageContainer = css({
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
  position: 'relative !important',
  userSelect: 'none',
  touchCallout: 'none',
  transition: 'all .3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
    cursor: 'pointer'
  }
})

export { CollectionImage, CollectionImageContainer }

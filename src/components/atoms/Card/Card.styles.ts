import { css } from '@stitches/core'
import breakpoints from '@themes/breakpoints'

const CollectionImageContainer = css({
  aspectRatio: '12 / 8',
  minWidth: 'auto !important',
  minHeight: 'auto !important',
  height: '100% !important',
  borderRadius: '5%',
  overflow: 'hidden',
  position: 'relative',
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
  transition: 'all .3s ease-in-out'
})

const ContainerInfo = css({
  height: '37%',
  width: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  padding: 8,
  boxSizing: 'border-box',
  backdropFilter: 'blur(4px)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    padding: 20
  }
})

const Title = css({
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 6,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    fontSize: '1.2rem'
  }
})

const Subtitle = css({
  color: '#fff',
  display: 'flex',
  fontSize: '.7rem',
  [`@media screen and (min-width: ${breakpoints.md})`]: {
    fontSize: '.8rem'
  }
})

const SubtitleItem = css({
  marginRight: 8,
  paddingRight: 8,
  borderRight: '1px solid #fff',
  '&:last-child': {
    border: 'none',
    margin: 0,
    padding: 0
  }
})

export {
  CollectionImage,
  CollectionImageContainer,
  ContainerInfo,
  Title,
  Subtitle,
  SubtitleItem
}

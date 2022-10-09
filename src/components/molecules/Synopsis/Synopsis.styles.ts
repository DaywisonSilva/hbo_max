import { css } from '@stitches/core'

const title = css({
  fontSize: 30,
  marginBottom: 10
})

const content = css({
  lineHeight: '30px',
  ' -webkit-line-clamp': 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical'
})

export { title, content }

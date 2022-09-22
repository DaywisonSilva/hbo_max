import { css } from '@stitches/core'

const header = css({
  width: 'calc(100% - 100px)',
  height: 82,
  padding: '30px 50px',
  margin: '40px 50px 0 50px',
  borderRadius: 20,
  position: 'absolute',
  top: 0,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(5px)',
  zIndex: 1
})

const list = css({
  color: '#fff',
  display: 'flex'
})

const listItem = css({
  margin: '0 50px',
  cursor: 'pointer'
})

export { header, list, listItem }

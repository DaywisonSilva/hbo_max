import { css } from '@stitches/core'

const button = css({
  backgroundColor: 'transparent',
  border: 'none',
  minWidth: '100px',
  borderRadius: '10px',
  padding: '15px',
  outline: 'none',
  fontSize: '13px',
  backdropFilter: 'blur(20px)',
  backgroundImage:
    'linear-gradient(132deg, rgba(255, 255, 255, 0.2) -2.16%, rgba(0, 0, 0, 0.052) 151.47%)',
  variants: {
    outlined: {
      true: {
        border: '1px solid red'
      }
    }
  }
})

export default button

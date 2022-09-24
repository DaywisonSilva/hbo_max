import { css } from '@stitches/core'

const button = css({
  backgroundColor: 'transparent',
  border: 'none',
  minWidth: '100px',
  borderRadius: '10px',
  padding: '15px',
  outline: 'none',
  fontSize: '1.2rem',
  backdropFilter: 'blur(20px)',
  color: '#fff',
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  '&:active': {
    transform: 'translateY(15px)'
  },
  backgroundImage:
    'linear-gradient(132deg, rgba(255, 255, 255, 0.2) -2.16%, rgba(0, 0, 0, 0.052) 151.47%)',
  variants: {
    outlined: {
      true: {
        backdropFilter: 'blur(0)',
        backgroundImage: 'none',
        border: '1px solid #fff'
      }
    }
  }
})

export default button

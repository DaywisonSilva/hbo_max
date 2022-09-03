import React from 'react'
import button from './Button.styles'

type ButtonProps = {
  label: string
}

function Button({ label }: ButtonProps) {
  return (
    <button className={button({ outlined: false })} data-testid='button'>
      {label}
    </button>
  )
}

export default Button

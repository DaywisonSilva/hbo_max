import React from 'react'
import button from './Button.styles'

type ButtonProps = {
  children: React.ReactNode
  outlined?: boolean
}

function Button({ children, outlined }: ButtonProps) {
  return (
    <button className={button({ outlined: outlined })} data-testid='button'>
      {children}
    </button>
  )
}

export default Button

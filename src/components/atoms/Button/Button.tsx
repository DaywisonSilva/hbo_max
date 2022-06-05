import React from 'react'
import button from './Button.styles'

function Button() {
  return <button className={button({ outlined: false })}>Olá</button>
}

export default Button

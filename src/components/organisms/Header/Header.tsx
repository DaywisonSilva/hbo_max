import Image from 'next/image'
import React from 'react'
import * as Styles from './Header.styles'

function Header() {
  return (
    <header className={Styles.header()}>
      <Image
        src='/img/logo.svg'
        alt='logo hbo max'
        width={132}
        height={30}
        objectFit='contain'
      />

      <ul className={Styles.list()}>
        <li className={Styles.listItem()}>Movies</li>
        <li className={Styles.listItem()}>TV shows</li>
        <li className={Styles.listItem()}>Animations</li>
        <li className={Styles.listItem()}>Upgrade</li>
      </ul>
    </header>
  )
}

export default Header

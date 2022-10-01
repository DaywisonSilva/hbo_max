import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import * as Styles from './Header.styles'
import { Menu } from 'react-feather'
import { Transition } from 'react-transition-group'

function Header() {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const refMenu = useRef<HTMLUListElement>(null)

  const duration = 300

  const transitionStyles = {
    entering: { height: 300 },
    entered: { height: 300 },
    exiting: { height: 90 },
    exited: { height: 90 },
    unmounted: { height: 90 }
  }

  return (
    <Transition nodeRef={ref} in={show} timeout={duration}>
      {(state) => (
        <header
          className={Styles.header()}
          ref={ref}
          style={{ ...transitionStyles[state] }}
        >
          <div className={Styles.containerIcons()}>
            <Image
              src='/img/Logo.svg'
              alt='logo hbo max'
              width={132}
              height={30}
              objectFit='contain'
            />
            <Menu
              className={Styles.icon()}
              size={30}
              onClick={() => setShow(!show)}
            />
          </div>
          <ul
            className={[Styles.list(), show ? null : 'd-none'].join(' ')}
            ref={refMenu}
          >
            <li className={Styles.listItem()} style={{ animationDelay: '.5s' }}>
              Movies
            </li>
            <li className={Styles.listItem()} style={{ animationDelay: '.7s' }}>
              TV shows
            </li>
            <li className={Styles.listItem()} style={{ animationDelay: '.9s' }}>
              Animations
            </li>
            <li
              className={Styles.listItem()}
              style={{ animationDelay: '1.1s' }}
            >
              Upgrade
            </li>
          </ul>
        </header>
      )}
    </Transition>
  )
}

export default Header

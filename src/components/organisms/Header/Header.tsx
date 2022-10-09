import Image from 'next/image'
import React, { useRef, useState } from 'react'
import * as Styles from './Header.styles'
import { Menu } from 'react-feather'
import { Transition } from 'react-transition-group'
import Link from 'next/link'

type HeaderProps = {
  hasBackground?: boolean
}

function Header({ hasBackground = true }: HeaderProps) {
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
          className={Styles.header({
            page: hasBackground ? undefined : 'content'
          })}
          ref={ref}
          style={{ ...transitionStyles[state] }}
        >
          <div className={Styles.containerIcons()}>
            <Link href='/'>
              <a>
                <Image
                  src='/img/Logo.svg'
                  alt='logo hbo max'
                  width={132}
                  height={30}
                  objectFit='contain'
                />
              </a>
            </Link>
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
            <Link href='/'>
              <li
                className={Styles.listItem()}
                style={{ animationDelay: '.5s' }}
              >
                Home
              </li>
            </Link>
            <li className={Styles.listItem()} style={{ animationDelay: '.7s' }}>
              Movies
            </li>
            <li className={Styles.listItem()} style={{ animationDelay: '.9s' }}>
              TV shows
            </li>
            <li
              className={Styles.listItem()}
              style={{ animationDelay: '1.1s' }}
            >
              Animations
            </li>
          </ul>
        </header>
      )}
    </Transition>
  )
}

export default Header

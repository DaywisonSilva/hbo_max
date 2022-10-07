import React from 'react'
import * as Styles from './ListInfo.styles'

type ListProps = {
  year?: string
  certification?: string
  duration?: string
  type?: 'genres' | undefined
  children?: React.ReactNode
}

function ListInfo({
  children,
  year,
  certification,
  duration,
  type
}: ListProps) {
  return (
    <ul className={Styles.InfoList({ type })}>
      {type === 'genres' ? (
        children
      ) : (
        <>
          {year && <li>{year}</li>}
          {certification && <li>{certification}</li>}
          {duration && <li>{duration}</li>}
        </>
      )}
    </ul>
  )
}

export default ListInfo

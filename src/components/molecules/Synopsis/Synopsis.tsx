import React from 'react'
import * as Styles from './Synopsis.styles'

type SynopsisProps = {
  content: string
}

function Synopsis({ content }: SynopsisProps) {
  return (
    <>
      <h2 className={Styles.title()}>Synopsis</h2>
      <p className={Styles.content()}>{content}</p>
    </>
  )
}

export default Synopsis

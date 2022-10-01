import { CollectionList } from '@components/molecules'
import React from 'react'
import * as Styles from './SectionOne.styles'

function SectionOne() {
  return (
    <section className={Styles.SectionOne()}>
      <CollectionList />
    </section>
  )
}

export default SectionOne

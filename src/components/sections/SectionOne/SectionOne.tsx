import { CollectionList } from '@components/molecules'
import React from 'react'
import * as Styles from './SectionOne.styles'

type SectionOneProps = {
  collections: Movie[]
}

function SectionOne({ collections }: SectionOneProps) {
  return (
    <section className={Styles.SectionOne()}>
      <CollectionList title='Popular Collections' collections={collections} />
      <CollectionList title='Popular Collections' collections={collections} />
      <CollectionList title='Popular Collections' collections={collections} />
    </section>
  )
}

export default SectionOne

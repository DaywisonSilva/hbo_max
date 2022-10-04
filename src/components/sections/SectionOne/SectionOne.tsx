import { CollectionCardList, CollectionList } from '@components/molecules'
import React from 'react'
import * as Styles from './SectionOne.styles'

type SectionOneProps = {
  data: {
    movies: Movie[]
    seasons: TVshow[]
    mostPopular: MostPupular[]
  }
}

function SectionOne({ data }: SectionOneProps) {
  return (
    <section className={Styles.SectionOne()}>
      <CollectionCardList title='Popular TV Shows' collections={data.seasons} />
      <CollectionList title='The Top Trending' collections={data.mostPopular} />
      <CollectionList title='Popular Movies' collections={data.movies} />
    </section>
  )
}

export default SectionOne

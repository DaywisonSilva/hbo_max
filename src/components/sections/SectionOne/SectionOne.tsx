import { CollectionList } from '@components/molecules'
import React from 'react'
import * as Styles from './SectionOne.styles'

type SectionOneProps = {
  data: {
    movies: Movie[]
    seasons: TVSeason[]
    mostPopular: MostPupular[]
  }
}

function SectionOne({ data }: SectionOneProps) {
  return (
    <section className={Styles.SectionOne()}>
      <CollectionList title='The Top Trending' collections={data.mostPopular} />
      <CollectionList title='Popular Movies' collections={data.movies} />
      <CollectionList title='Popular TV Shows' collections={data.seasons} />
    </section>
  )
}

export default SectionOne

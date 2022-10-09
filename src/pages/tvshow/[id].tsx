import api from '@services/api'
import React from 'react'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Header from '@components/organisms/Header'
import HeroCollection from '@components/organisms/HeroCollection'
import Head from 'next/head'

function Season(data: TVshow & { slug: string }) {
  return (
    <>
      <Head>
        <meta property='og:title' content={data.name} />
        <meta property='og:type' content='movie' />
        <meta
          property='og:url'
          content='https://hbo-max-redesign.netlify.app/'
        />
        <meta property='og:image' content={data.backdrop_path} />
      </Head>
      <Header />
      <main>
        <HeroCollection data={data} />
      </main>
    </>
  )
}

interface MovieQuery extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as MovieQuery
  let season: TVshow | null = null

  try {
    const { data }: { data: TVshow } = await api.get(`tv/${id}`)
    season = data
    console.log('\x1b[32m', `\n✅ Movie Page [${id}] created with success`)
  } catch (e) {
    console.log('\x1b[31m', `\n❌ Movie Page [${id}] wasn't created`)
  }

  return {
    props: {
      ...season
    }
  }
}

export const getStaticPaths = async () => {
  let tvSeasons: TVshow[] = []

  try {
    const {
      data: { results: data }
    }: { data: { results: TVshow[] } } = await api.get(`tv/popular`)

    tvSeasons = data
  } catch (e) {
    console.error(e)
  }

  const paths = tvSeasons.map((season) => ({
    params: { id: season.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default Season

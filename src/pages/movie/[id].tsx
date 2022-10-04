import api from '@services/api'
import React from 'react'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

function Movie({ title }: Movie & { slug: string }) {
  return <div>{title}</div>
}

interface MovieQuery extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as MovieQuery
  let movie: Movie | null = null

  try {
    const { data }: { data: Movie } = await api.get(`/movie/${id}`)
    movie = data
    console.log('\x1b[32m', `\n✅ Movie Page [${id}] created with success`)
  } catch (e) {
    console.log('\x1b[31m', `\n❌ Movie Page [${id}] wasn't created`)
  }

  return {
    props: {
      ...movie
    }
  }
}

export const getStaticPaths = async () => {
  let movies: Movie[] = []

  try {
    const {
      data: { results: moviesData }
    }: { data: { results: Movie[] } } = await api.get('/movie/popular')

    const {
      data: { results: mostPopular }
    }: { data: { results: TVSeason[] } } = await api.get(`trending/movie/week`)

    movies = [...moviesData, ...mostPopular]
  } catch (e) {
    console.error(e)
  }

  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default Movie

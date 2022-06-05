import api from '@services/api'
import React from 'react'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

function Movie({ title, id }: Movie) {
  return <div>{title}</div>
}

type Params = {
  id: number
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

export async function getStaticPaths() {
  let movies: Movie[] = []

  try {
    const { data }: { data: { results: Movie[] } } = await api.get(
      '/movie/popular'
    )
    movies = data.results
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

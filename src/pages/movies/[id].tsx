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

  const { data: movie }: { data: Movie } = await api.get(`/movie/${id}`)

  return {
    props: {
      ...movie
    }
  }
}

export async function getStaticPaths() {
  const {
    data: { results: movies }
  }: { data: { results: Movie[] } } = await api.get('/movie/popular')

  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default Movie

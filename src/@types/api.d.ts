type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type Certification = {
  iso_3166_1: string
  release_dates: Array<{
    certification: string
    iso_639_1: string
    release_date: string
    type: number
  }>
}

type MostPupular = Movie & { media_type: 'all' | 'movie' | 'tv' | 'person' }

type TVSeason = Movie

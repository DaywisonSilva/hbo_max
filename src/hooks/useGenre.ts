import { GenreContext } from 'context'
import { useContext } from 'react'

type GenreType = 'movie' | 'tv' | null

const useGenre = ({ ids, type }: { ids: number[]; type: GenreType }) => {
  const genreData = useContext(GenreContext)
  if (!type) return

  return genreData![type].filter((genre) => {
    const result = ids.find((id) => id === genre.id)

    return !!result
  })
}

export default useGenre

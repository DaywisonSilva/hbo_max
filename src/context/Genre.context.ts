import React from 'react'

type GenreData = { movie: Genre[]; tv: Genre[] }

const GenreContext = React.createContext<GenreData | null>(null)

export default GenreContext

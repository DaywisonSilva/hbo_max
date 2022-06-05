import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: { api_key: process.env.NEXT_PUBLIC_API_KEY }
})

export default api

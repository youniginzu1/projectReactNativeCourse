
export const fetchMovie = async (title) => {
  const res = await fetch(`https://www.omdbapi.com/?apiKey=e635ed6f&s=${title}`)
  const result = await res.json()
  return result
}
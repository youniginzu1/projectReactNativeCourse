import React from 'react'
import MovieDetails from '../components/MovieDetails'

function MovieDetailsScreen({navigation, route}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.Title
    })
  }, [route])

  return (
    <MovieDetails item={route.params.item}/> 
  )
}

export default MovieDetailsScreen
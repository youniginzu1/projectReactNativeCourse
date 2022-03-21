import React from 'react'
import {Button, View, Text, StyleSheet} from 'react-native'

import MoviesList from './MoviesList'
import SearchBar from './SearchBar'
import {fetchMovie} from '../api'

function SearchMovie({navigation}) {

  const [movies, setMovies] = React.useState([])

  const handleSearchMovie = title => {
    fetchMovie(title)
      .then(result => {
        if (result.Response === 'False') {
          setMovies([])
        } else {
          setMovies(result.Search)
        }
      })
  }

  const handleSelectMovie = item => {
    navigation.navigate('MovieDetails', {
      item: item
    })
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearchMovie={handleSearchMovie}/>
      <MoviesList movies={movies} onHandleSelectMovie={handleSelectMovie}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15
  },
})

export default SearchMovie
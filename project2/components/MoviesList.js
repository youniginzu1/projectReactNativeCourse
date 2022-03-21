import React from 'react'
import {Button, View, Text, StyleSheet, FlatList} from 'react-native'
import Row from './Row'

function MoviesList({movies, onHandleSelectMovie}) {

  const renderItem = ({item}) => (
    <Row item={item} onHandleSelectMovie={onHandleSelectMovie}/>
  )

  return (
    <FlatList 
      style={styles.container}
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.imdbID}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})

export default MoviesList
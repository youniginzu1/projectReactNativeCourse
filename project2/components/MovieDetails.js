import React from 'react'
import {Button, ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native'

var width = Dimensions.get('window').width; 

function MovieDetails({item}) {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.row}>Title: {item.Title}</Text>
      <Text style={styles.row}>Year: {item.Year}</Text>
      <Text style={styles.row}>imdbID: {item.imdbID}</Text>
      <Text style={styles.row}>Type: {item.Type}</Text>
      <Image 
        style={styles.img}
        source={{
          uri: item.Poster,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  row: {
    marginBottom: 8
  },
  img: {
    width: '100%',
    height: 500
  }
})

export default MovieDetails
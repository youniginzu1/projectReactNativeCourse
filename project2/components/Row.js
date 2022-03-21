import React from 'react'
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function Row({item, onHandleSelectMovie}) {

  return (
    <TouchableOpacity style={styles.row} onPress={() => onHandleSelectMovie(item)}>
      <Text>{item.Title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 5,
  }
})

export default Row
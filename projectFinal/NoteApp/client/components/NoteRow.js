import React from "react"
import {TouchableHighlight, Text, StyleSheet} from 'react-native'

function NoteRow({ item, onNoteSelect}) {

  const getNoteTitle = (noteContent) => {
    if (noteContent.length < 30) {
      return noteContent
    } else {
      return noteContent.slice(0, 30) + '...'
    }
  }

  return (
    <TouchableHighlight 
      onPress={() => onNoteSelect(item)} 
      style={[styles.container]}
      underlayColor='#f0e6c5'
    >
      <Text style={styles.row}>{getNoteTitle(item.noteContent)}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  row: {
    fontSize: 18,
  }
})

export default NoteRow
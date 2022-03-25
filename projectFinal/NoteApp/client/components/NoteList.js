import React, { useEffect } from 'react'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import NoteRow from './NoteRow'
import { addNote } from '../redux/actions'

function NoteList({route, navigation, notes, addNote}) {
  const item = route.params.item
  const noteList = notes.filter(note => note.folderId === item.folderId)

  const handleAddNote = () => {
    const newItem = {folderId: item.folderId, noteId: noteList.length, noteContent: ''}
    addNote(newItem)
    navigation.navigate('NoteDetails', {
      item: newItem
    })
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title='Add' onPress={handleAddNote}/>
      )
    })
  }, [notes])

  const handleNoteSelect = (item) => {
    navigation.navigate('NoteDetails', {
      item: item
    })
  }

  const renderItem = ({ item }) => <NoteRow item={item} onNoteSelect={handleNoteSelect} />

  const keyExtractor = (item) => item.noteId

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{item.folderName}</Text>
        <FlatList 
          data={noteList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingBottom: 10
  }
})

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, {addNote})(NoteList)

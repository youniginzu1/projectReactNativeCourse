import React from 'react'
import { View, TextInput, StyleSheet, Button, ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { changeContentNote, deleteNote } from '../redux/actions'

class NoteDetails extends React.Component {

  item = this.props.route.params.item

  state = {
    content: this.item.noteContent,
    height: 0,
    fullHeight: 0
  }

  handleChangeText = (content) => {
    this.setState({content})
    this.props.changeContentNote(
      { 
        folderId: this.item.folderId, 
        noteContent: content, noteId: this.item.noteId
      }
    )
  }

  componentWillUnmount() {
    if (this.state.content === '') {
      this.props.deleteNote(this.item.noteId, this.item.folderId)
    }
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerBackTitle: this.item.folderName
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled   keyboardVerticalOffset={0}>
        <ScrollView style={{flex: 1}} keyboardDismissMode='interactive' onLayout={(ev) => {
          const fullHeight = ev.nativeEvent.layout.height
          this.setState({height: fullHeight, fullHeight: fullHeight})
        }}>
          <TextInput 
            multiline={true}
            value={this.state.content}
            onChangeText={this.handleChangeText}
            style={[styles.input, {height: this.state.height}]}
            autoFocus={true}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 18,
  }
})

export default connect(null, {changeContentNote, deleteNote})(NoteDetails)

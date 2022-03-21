import React from 'react'
import {Button, View, Text, StyleSheet, TextInput} from 'react-native'

function SearchBar({onSearchMovie}) {

  const [title, setTitle] = React.useState('')

  const handleTitleChange = title => {
    setTitle(title)
    onSearchMovie(title)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search movie...'
        value={title}
        onChangeText={handleTitleChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 2,
  }
})

export default SearchBar
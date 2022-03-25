import React from "react"
import { Text, StyleSheet, View, TouchableHighlight} from 'react-native'

function FolderRow({ item, onFolderSelect}) {

  const handleFolderSelect = () => {
    onFolderSelect(item)
  }

  return (
    <TouchableHighlight 
      onPress={handleFolderSelect} 
      style={[ styles.container, {borderTopWidth: item.folderId !== 0 ? 1 : 0, borderTopColor: '#ddd'} ]}
      underlayColor='#f0e6c5'
    >
      <Text style={[styles.row]}>{item.folderName}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  row: {
    fontSize: 18,
  }
})

export default FolderRow
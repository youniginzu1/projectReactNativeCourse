import React from 'react'
import { Button, View, Text, StyleSheet, Keyboard } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FolderList from './FolderList'
import NoteList from './NoteList'
import NoteDetails from './NoteDetails'

const Stack = createNativeStackNavigator()

function Home() {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='FolderList'
        component={FolderList}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='NoteList'
        component={NoteList}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false
        }}
      />
      <Stack.Screen 
        name='NoteDetails'
        component={NoteDetails}
        options={{
          headerRight: () => (
            <Button title='Xong' onPress={() => Keyboard.dismiss()} />
          ),
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerBackTitle: 'abcc'
        }}
      />
    </Stack.Navigator>
  )
}

export default Home
import React from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MovieDetailsScreen from './screens/MovieDetailsScreen'
import SearchMovieScreen from './screens/SearchMovieScreen'

const Stack = createNativeStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SearchMovie'
          component={SearchMovieScreen}
        />
        <Stack.Screen
          name='MovieDetails'
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
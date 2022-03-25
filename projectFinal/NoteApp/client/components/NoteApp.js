import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

function NoteApp() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#a41034'}}>
        <Tab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntIcon 
                name='home' 
                size={25} 
                color={color}
              />
            )
          }}
        />
        <Tab.Screen 
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <AntIcon 
                name='profile'
                size={25} 
                color={color}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NoteApp
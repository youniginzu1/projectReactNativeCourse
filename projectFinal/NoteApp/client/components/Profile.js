import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { logoutUser } from '../redux/actions'

function Profile({ logoutUser }) {

  const handelLogout = () => {
    logoutUser()
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title='Logout' onPress={handelLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(null, {logoutUser})(Profile)
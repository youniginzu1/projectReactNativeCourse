import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loginUser } from '../redux/actions'

function Login({ loginUser, logErr }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const login = () => {
    loginUser(username, password)
  }

  const handleUsername = (username) => {
    setUsername(username)
  }

  const handlePassword = (password) => {
    setPassword(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.errText}>{logErr}</Text>
      <TextInput
        style={styles.input}
        placeholder='Username?'
        value={username}
        onChangeText={handleUsername}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password?'
        value={password}
        onChangeText={handlePassword}
        autoCapitalize='none'
        secureTextEntry
      />
      <Button title='Login' onPress={login}/>
    </View>
  )
}

Login.propTypes = {
  err: PropTypes.string,
  token: PropTypes.string,
  loginUser: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 4 
  },
  errText: {
    color: 'red'
  }
})

const mapStateToProps = state => ({
  logErr: state.user.logErr,
})

export default connect(mapStateToProps, {loginUser})(Login)
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    height: 100,
    width: 100,
    borderRadius: 50
  },
  fontStyle: {
    fontSize: 20
  }
})

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress>
    <Text style={styles.fontStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export { Button }

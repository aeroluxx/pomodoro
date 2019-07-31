import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from './components/Button'
import Timer from './components/Timer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
        <View style={styles.containerButton}>
          <Button title="Stop" />
          <Button title="Start" />
          <Button title="Skip" />
        </View>
      </View>
    )
  }
}

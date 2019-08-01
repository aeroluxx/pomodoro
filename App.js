import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from './components/Button'
import Timer from './components/Timer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
  updateData = value => {
    this.setState({ name: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer updateData={this.updateData} />
        <View style={styles.containerButton}>
          <Button title="Stop" />
          <Button title="Start" />
          <Button title="Skip" />
        </View>
      </View>
    )
  }
}

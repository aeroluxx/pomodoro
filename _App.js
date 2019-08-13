import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './components/Button'
import ButtonStop from './components/ButtonStop'
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
  constructor() {
    super()
    this.state = {
      stateTimer: false,
      resetTimer: false
    }
  }

  startPause = value => {
    this.setState({ stateTimer: value })
  }

  stopReset = valueReset => {
    this.setState({ resetTimer: valueReset })
  }

  render() {
    //console.log(this.state)
    return (
      <View style={styles.container}>
        <Timer stateTimer={this.state.stateTimer} resetTimer={this.state.resetTimer} />
        <View style={styles.containerButton}>
          <ButtonStop title="Stop" stop={this.stopReset} />
          <Button title="Start" start={this.startPause} />
          <Button title="Skip" />
        </View>
      </View>
    )
  }
}

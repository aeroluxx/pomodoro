import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

export default class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      stateTimer: true
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.start(this.state.stateTimer)
          this.setState(prevState => ({
            stateTimer: !prevState.stateTimer
          }))
        }}
      >
        <Text style={styles.fontStyle}>{this.state.stateTimer ? this.props.title : 'Pause'}</Text>
      </TouchableOpacity>
    )
  }
}

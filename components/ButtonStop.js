import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
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

export default class ButtonStop extends React.Component {
  constructor() {
    super()
    this.state = {
      resetTimer: true
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.stop(this.state.resetTimer)
        }}
      >
        <Text style={styles.fontStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

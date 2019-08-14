import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    marginHorizontal: 10
  },
  fontStyle: {
    fontSize: 20
  }
})

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            width: this.props.title === ('Start' || 'Pause') ? 120 : 90,
            height: this.props.title === ('Start' || 'Pause') ? 120 : 90,
            borderRadius: this.props.title === ('Start' || 'Pause') ? 60 : 45
          }
        ]}
        onPress={this.props.onPress}
      >
        <Text style={styles.fontStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'white',
    marginBottom: 120
  },
  countStyle: {
    fontSize: 50,
    color: 'black'
  }
})

export default class Timer extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.countStyle}>
            {this.props.minutes}:{this.props.seconds}
          </Text>
        </View>
      </View>
    )
  }
}

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

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      seconds: 0,
      minutes: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  inc = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
      minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countStyle}>
          {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes} :{' '}
        </Text>
        <Text style={styles.countStyle}>{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</Text>
      </View>
    )
  }
}

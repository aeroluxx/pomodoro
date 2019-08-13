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

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  inc = () => {
    if (this.props.stateTimer) {
      this.setState(prevState => ({
        seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
        minutes:
          prevState.minutes === 25
            ? prevState.minutes - 25
            : prevState.seconds === 59
            ? prevState.minutes + 1
            : prevState.minutes
      }))
    } else if (this.props.resetTimer) {
      this.setState({
        seconds: 0,
        minutes: 0
      })
    }
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.countStyle}>
            {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes} :{' '}
          </Text>
          <Text style={styles.countStyle}>
            {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
          </Text>
        </View>
        {/*<Text style={styles.countStyle}>{this.props.stateTimer ? 'true' : 'false'}</Text>*/}
      </View>
    )
  }
}

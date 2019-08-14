import React from 'react'
import { StyleSheet, View } from 'react-native'
import Timer from './components/Timer'
import Button from './components/Button'
import { vibrate } from './utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e21f34',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lineSkip: {
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginBottom: 40
  }
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      minutes: '25',
      resetprev: '25',
      seconds: '00',
      isOn: false,
      completed: false,
      skipCounter: 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.dec, 1)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  dec = () => {
    if (this.state.isOn && !this.state.completed) {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({ seconds: String(+prevState.seconds - 1) }))
        if (+this.state.seconds < 10) {
          this.setState({ seconds: `0${this.state.seconds}` })
        }
      } else {
        this.setState(prevState => ({ minutes: String(+prevState.minutes - 1), seconds: '59' }))
        if (+this.state.minutes < 10) {
          this.setState({ minutes: `0${String(this.state.minutes)}` })
        }
      }
      if (this.state.minutes === '00' && this.state.seconds === '00') {
        this.setState({ completed: true })
        this.setState({ isOn: false })
        // clearInterval(this.interval)
        vibrate
      }
    }
  }

  handleReset = () => {
    this.setState(prevState => ({ minutes: prevState.resetprev, seconds: '00' }))
    this.setState({ completed: false })
    this.setState({ isOn: false })
  }

  handlePlay = () => {
    this.setState({ isOn: true })
  }

  handlePause = () => {
    this.setState({ isOn: false })
  }

  handleSkip = () => {
    if ([0, 2, 4, 6].includes(this.state.skipCounter)) {
      this.setWork()
    } else if ([1, 3, 5].includes(this.state.skipCounter)) {
      this.setShortbr()
    } else this.setLongbr()
    this.setState(prevState => ({
      skipCounter: prevState.skipCounter === 7 ? prevState.skipCounter - 7 : prevState.skipCounter + 1
    }))
  }

  setWork = () => {
    this.setState({ minutes: '25', seconds: '00', resetprev: '25', completed: false, isOn: false })
  }

  setShortbr = () => {
    this.setState({ minutes: '05', seconds: '00', resetprev: '05', completed: false, isOn: false })
  }

  setLongbr = () => {
    this.setState({ minutes: '15', seconds: '00', resetprev: '15', completed: false, isOn: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <View style={[styles.lineSkip, { width: `${14.3 * this.state.skipCounter}%` }]} />
        <View style={styles.containerButton}>
          <Button title="Reset" onPress={this.handleReset} />
          <Button
            title={this.state.isOn ? 'Pause' : 'Start'}
            onPress={this.state.isOn ? this.handlePause : this.handlePlay}
          />
          <Button title="Skip" onPress={this.handleSkip} />
        </View>
      </View>
    )
  }
}

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countStyle: {
    fontSize: 40,
    color: 'black'
  },
});

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countStyle}>{this.state.count}</Text>
      </View>
    );
  }
}

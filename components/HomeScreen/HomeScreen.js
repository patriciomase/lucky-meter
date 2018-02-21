import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class HomeScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Wait for ...</Text>
        <TouchableOpacity
          style={styles.waitForButton}
          onPress={this.onPress}
        >
          <Text> Touch Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  waitForButton: {
    backgroundColor: '#990000',
    padding: 20
  }
});

export default HomeScreen;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

// Components.
import Board from './components/Board/Board';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  render() {
    const title = this.state.loggedIn ? 'Log Out' : 'Log In';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          How lucky are you today?
        </Text>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
  },
  loginButton: {
    color: '#eaeaea',
    backgroundColor: '#4444dd'
  },
  welcome: {
    color: '#eaeaea',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  }
});

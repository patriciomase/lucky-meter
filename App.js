'use strict'
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

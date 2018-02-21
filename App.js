'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigatorIOS,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Components.
import HomeScreen from './components/HomeScreen/HomeScreen';

class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'MyTurn',
          component: HomeScreen
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

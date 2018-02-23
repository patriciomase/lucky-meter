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
import AppState from './components/AppState/AppState';

class App extends Component {
  render() {
    return (
      <AppState>
        {(state, actions) => 
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'MyTurn',
              component: HomeScreen,
              passProps: {
                actions: actions,
                ...state
              }
            }}
          />
        }
      </AppState>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

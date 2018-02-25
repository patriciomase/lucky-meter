'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Components.
import HomeScreen from './components/HomeScreen/HomeScreen';
import AppState from './components/AppState/AppState';
import WaitForScreen from './components/WaitForScreen/WaitForScreen';
import WaitingsListScreen from './components/WaitingsListScreen/WaitingsListScreen';

const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    WaitForScreen: {
      screen: WaitForScreen
    },
    enterManually: {
      screen: WaitingsListScreen,
      title: 'Enter code manually'
    },
    waitingsList: {
      screen: WaitingsListScreen,
      title: 'I\'m waiting for'
    },
    seeMore: {
      screen: WaitingsListScreen,
      title: 'See more things to wait for'
    },
  },
  {
    initialRouteName: 'Home'
  }
);

class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default App;

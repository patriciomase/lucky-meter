'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Components.
import AppState from './components/AppState/AppState';
import HomeScreen from './components/HomeScreen/HomeScreen';
import WaitForScreen from './components/WaitForScreen/WaitForScreen';
import WaitingsListScreen from './components/WaitingsListScreen/WaitingsListScreen';
import WeCanWaitForScreen from './components/WeCanWaitForScreen/WeCanWaitForScreen';

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
    weCanWaitFor: {
      screen: WeCanWaitForScreen,
      title: 'Things to wait for'
    }
  },
  {
    initialRouteName: 'Home'
  }
);

class App extends Component {
  render() {
    return (
      <AppState>
      {
        (state, actions) => <RootStack screenProps={{
          state: state,
          actions: actions
        }} />
      }
      </AppState>
    );
  }
}

export default App;

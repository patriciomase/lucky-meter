import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import WeCanWaitForList from '../WeCanWaitForList/WeCanWaitForList';

const WeCanWaitForScreen = ({ screenProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Waitings</Text>
      <WeCanWaitForList
        current={screenProps.state.waitingsList}
        items={screenProps.state.weCanWaitFor}
        toggleWaiting={screenProps.actions.toggleWaiting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    width: '100%'
  }
});

export default WeCanWaitForScreen;

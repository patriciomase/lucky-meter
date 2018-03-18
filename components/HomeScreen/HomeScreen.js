import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import HomeScreenNavigation from '../HomeScreenNavigation/HomeScreenNavigation';
import HeroImage from '../HeroImage/HeroImage';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'MyTurn'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeroImage />
        <HomeScreenNavigation {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waitForButton: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#990000',
  }
});

export default HomeScreen;

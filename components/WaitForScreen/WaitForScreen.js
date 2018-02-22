import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import HomeScreenNavigation from '../HomeScreenNavigation/HomeScreenNavigation';
import HeroImage from '../HeroImage/HeroImage';

class WaitForScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeroImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  waitForButton: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#990000',
  }
});

export default WaitForScreen;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import HeroImage from '../HeroImage/HeroImage';

class WaitForScreen extends Component {
  static navigationOptions = {
    title: 'Scan QR code'
  }

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeroImage path={ require('./qr-code-art.jpg') }/>
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

export default WaitForScreen;

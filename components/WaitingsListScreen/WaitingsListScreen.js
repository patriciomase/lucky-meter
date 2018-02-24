import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import HeroImage from '../HeroImage/HeroImage';
import WaitingsList from '../WaitingsList/WaitingsList';

class WaitingsListScreen extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('tsgnd', this.props)
    return (
      <View style={styles.container}>
        <WaitingsList {...this.props} />
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

export default WaitingsListScreen;

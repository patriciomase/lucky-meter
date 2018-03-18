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
    this.state = {
      items: [
        {
          title: 'sasasa'
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WaitingsList
          items={this.props.screenProps.state.waitingsList}
          add={(item) => {
            this.props.screenProps.actions.addWaiting(item);
          }}
        />
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

export default WaitingsListScreen;

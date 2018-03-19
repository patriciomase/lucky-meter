import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-navigation', () => ({
  StackNavigator: () => 'Navigator'
}));
jest.mock('react-native-tableview', () => 'TableView');

fetch = jest.fn(() => new Promise(resolve => resolve()));

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

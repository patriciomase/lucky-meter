import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import TableView from 'react-native-tableview'
import WaitForScreen from '../WaitForScreen/WaitForScreen';

const { Section, Item } = TableView;

const options = [
  'Wait for ...',
  'See waiting lists'
];

const HomeScreenNavigation = (props) => {
  console.log('navigating');
  const onPress = () => {
    props.navigator.push({
      component: WaitForScreen,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    })
  }
  return (
    <TableView
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
    >
      <Section>
        {options.map(opt => <Item
          key={opt}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          onPress={onPress}
          >
            {opt}
          </Item>
        )}
      </Section>
    </TableView>
  );
}

export default HomeScreenNavigation;
